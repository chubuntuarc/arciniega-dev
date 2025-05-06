import styles from './currency-tabs.module.css';

export const CurrencyTabs = ({ pairs, activeTab, onTabChange }) => {
  return (
    <div className={styles.container}>
      {pairs.map((pair) => (
        <button
          key={pair.id}
          onClick={() => onTabChange(pair.id)}
          className={`${styles.tab} ${activeTab === pair.id ? styles.activeTab : ''}`}
          data-testid={`currency-tab-${pair.id}`}
        >
          {pair.label}
        </button>
      ))}
    </div>
  );
};

export default CurrencyTabs;
