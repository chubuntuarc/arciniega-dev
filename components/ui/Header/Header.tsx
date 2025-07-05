import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  title: string;
  subtitle: string;
  ctaLabel: string;
  onCtaClick?: () => void;
  image?: React.ReactNode | string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, ctaLabel, onCtaClick, image }) => {
  return (
    <section className={styles.headerCard}>
      <div className={styles.headerContent}>
        <h1 className={styles.headerTitle}>{title}</h1>
        <h2 className={styles.headerSubtitle}>{subtitle}</h2>
        <button className={styles.headerCta} onClick={onCtaClick}>{ctaLabel}</button>
      </div>
      {image && (
        <div className={styles.headerImage}>
          {typeof image === 'string' ? (
            <img src={image} alt="Header visual" />
          ) : (
            image
          )}
        </div>
      )}
    </section>
  );
};

export default Header;
