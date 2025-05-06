import styles from './currency-banner.module.css';

const CurrencyBanner = ({ pair_data }) => {
  const rate_color = (rate, initialRate) => {
    if (rate > initialRate) {
      return styles.rateTablePositive;
    } else if (rate < initialRate) {
      return styles.rateTableNegative;
    }
  };
  
  const formatDateTime = (timestamp) => {
    if (!timestamp) return '-';
    try {
      const date = new Date(timestamp);
      if (isNaN(date.getTime())) return '-';
      return date.toISOString().replace('T', ' ').slice(0, 19);
    } catch (error) {
      return '-';
    }
  };
  
  return (
    <div className={styles.bannerContainer} data-testid="currency-banner">
      <table className={`${styles.rateTable} ${pair_data ? rate_color(pair_data.currentRate, pair_data.initialRate) : ''}`}>
        <thead>
          <tr>
            <th>Currency Pair</th>
            <th>Current Exchange-Rate Value</th>
            <th>Highest Exchange-Rate Today</th>
            <th>Lowest Exchange-Rate Today</th>
            <th>Last Update (UTC)</th>
          </tr>
        </thead>
        <tbody>
          <tr key={pair_data.id}>
            <td className={styles.currencyPair}>{pair_data.id}</td>
            <td className={rate_color(pair_data.currentRate, pair_data.initialRate)} data-testid={`current-rate-${pair_data.id}`}>{pair_data.currentRate?.toFixed(4)}</td>
            <td className={styles.highRate}>{pair_data.highestRate?.toFixed(4)}</td>
            <td className={styles.lowRate}>{pair_data.lowestRate?.toFixed(4)}</td>
            <td className={styles.timestamp}>{formatDateTime(pair_data.lastUpdate)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyBanner;
