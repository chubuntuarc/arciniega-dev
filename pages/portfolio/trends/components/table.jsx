import styles from './table.module.css';
import React from 'react';

const Table = ({ title, data }) => {
  // Early return if no data
  if (!data || data.length === 0) {
    return null;
  }

  // Add state for number of items to show
  const [visibleItems, setVisibleItems] = React.useState(5);

  // Get headers from the first data object
  const headers = Object.keys(data[0]);

  // Handle loading more items
  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + 5);
  };

  return (
    <div className={styles.tableContainer}>
      <h2 className={styles.tableTitle}>{title}</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} className={styles.tableHeader}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {data.slice(0, visibleItems).map((row, index) => (
            <tr key={index} className={styles.tableRow}>
              {headers.map((header) => (
                <td key={`${index}-${header}`} className={styles.tableCell}>
                  {header === 'difference' ? (
                    <span className={row[header] > 0 ? styles.positive : styles.negative}>
                      {row[header]}
                    </span>
                  ) : (
                    row[header]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {visibleItems < data.length && (
        <button
          className={styles.loadMoreButton}
          onClick={handleLoadMore}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Table;
