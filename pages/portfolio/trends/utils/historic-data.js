const historicDataByDay = async (pair) => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${apiUrl}/historic-data/${pair}`);
  const data = await response.json();
  const mergedData = Object.values(data["Time Series FX"] || []).reduce((acc, item) => {
      const date = new Date(item.date).toLocaleDateString();
      if (!acc[date]) {
        acc[date] = item;
      } else {
        acc[date].high = Math.max(acc[date].high, item.high);
        acc[date].low = Math.min(acc[date].low, item.low);
        if (new Date(item.date) < new Date(acc[date].date)) {
          acc[date].open = item.open;
          acc[date].date = item.date;
        } else {
          acc[date].close = item.close;
        }
      }
      return acc;
    }, {});

  return Object.values(mergedData);
};

export default historicDataByDay;
