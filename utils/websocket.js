let ws;
let reconnectAttempts = 0;
const maxReconnectAttempts = 3;

const connect = () => {
  // Only create a new WebSocket if one doesn't exist or if it's closed
  if (!ws || ws.readyState === WebSocket.CLOSED) {
    ws = new WebSocket(process.env.NEXT_PUBLIC_WS_URL || "");

    ws.onopen = () => {
      console.log("WebSocket connected");
      reconnectAttempts = 0; // Reset attempts on successful connection
    };

    ws.onclose = () => {
      console.log("WebSocket closed");
      ws = undefined; // Clear the instance on close
      attemptReconnect();
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
      // Optionally handle error before closing, maybe trigger reconnect here too
      // ws.close(); // The browser might close it automatically on error
    };
  }
};

const attemptReconnect = () => {
  if (reconnectAttempts < maxReconnectAttempts) {
    reconnectAttempts++;
    console.log(
      `Attempting to reconnect... (${reconnectAttempts}/${maxReconnectAttempts})`
    );
    // Use exponential backoff or a fixed delay
    setTimeout(connect, 5000 * reconnectAttempts); // e.g., 5s, 10s, 15s
  } else {
    console.error(
      "Max reconnection attempts reached. Will not attempt further reconnections."
    );
  }
};

// Initial connection attempt when the module loads
connect();

const webSocketClient = () => {
  // If the connection hasn't been established yet (e.g., initial load fails),
  // try connecting again when requested.
  if (!ws || ws.readyState === WebSocket.CLOSED) {
     if (reconnectAttempts >= maxReconnectAttempts) {
       console.log("Cannot return WS client, max reconnection attempts reached.");
       return undefined; // Or handle this case as needed
     }
     // Attempt to connect immediately if requested and not already connecting/connected
     // This might be redundant if attemptReconnect is already scheduled
     // connect(); // Consider if this immediate call is needed vs waiting for timeout
  }
  // Always return the current ws instance (or undefined if connection failed permanently)
  return ws;
};

export default webSocketClient;