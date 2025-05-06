const pairData = async (pair) => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const historic_data = await fetch(`${apiUrl}/historic-data/${pair}`).then(
        (res) => res.json()
      );
      
      const pair_data = {
        id: pair,
        label: historic_data["Meta Data"]["2. From Symbol"] + "-" + historic_data["Meta Data"]["3. To Symbol"],
        currentRate: historic_data["Time Series FX"][0].close,
        highestRate: Math.max(...historic_data["Time Series FX"].map(d => d.high)),
        lowestRate: Math.min(...historic_data["Time Series FX"].map(d => d.low)),
        initialRate: historic_data["Time Series FX"][historic_data["Time Series FX"].length - 1].open,
        lastUpdate: historic_data["Meta Data"]["5. Last Refreshed"],
      };

      return pair_data;
  } catch (error) {
    console.error("Error fetching pairs data:", error);
    return [];
  }
};

const pairsCatalogueData = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const pairs_catalogue_data = await fetch(`${apiUrl}/pairs`)
    .then((res) => res.json());
  const pairs_tabs = Object.entries(pairs_catalogue_data).map(([id, label]) => {
    return {
      id,
      label,
    };
  });
  return pairs_tabs;
};

export { pairData, pairsCatalogueData };
