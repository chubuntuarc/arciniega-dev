import styles from './vite.module.css';
import Image from 'next/image';
import Head from 'next/head';
export default function ShopifyVite() {
  return (
     <>
      <Head>
        <title>Shopify Vite Integration for Minicart Upgrade</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
    <div className={styles.container}>
      <h1 className={styles.title}>Shopify Vite Integration for Minicart Upgrade</h1>

      <p className={styles.description}>
        This project involved upgrading the Shopify minicart functionality for an
        existing store. The goal was to leverage modern frontend tooling by
        integrating Vite with Shopify and rebuilding the minicart using ReactJS
        for a faster, more interactive user experience.
      </p>

      <h2 className={styles.processTitle}>Process Overview</h2>

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <Image
            src="/vite.png" // Replace with your actual image path
            alt="Initial Setup Screenshot"
            className={styles.cardImage}
            width={500}
            height={300}
          />
          <h3 className={styles.cardTitle}>1. Vite + Shopify Integration</h3>
          <p className={styles.cardText}>
            Set up the development environment using the Vite Shopify plugin.
            This involved configuring Vite to work alongside the existing Shopify
            theme structure, enabling hot module replacement (HMR) for faster
            development cycles.
          </p>
          <p className={styles.cardText}>
            Docs: <a href="https://github.com/barrel/shopify-vite" className={styles.cardLink}>https://github.com/barrel/shopify-vite</a>
          </p>
        </div>

        <div className={styles.card}>
          <Image
            src="/code.png" // Replace with your actual image path
            alt="React Component Screenshot"
            className={styles.cardImage}
            width={500}
            height={300}
          />
          <h3 className={styles.cardTitle}>2. Building the React Minicart</h3>
          <p className={styles.cardText}>
            Developed the new minicart component using ReactJS. Focused on state
            management (we have a custom state component called cartStore) to handle cart items,
            quantities, and totals dynamically fetched from Shopify's AJAX API.
          </p>
        </div>

        {/* Card 3: Theme Integration */}
        <div className={styles.card}>
          <Image
            src="/minicart.png" // Replace with your actual image path
            alt="Theme Integration Screenshot"
            className={styles.cardImage}
            width={500}
            height={300}
          />
          <h3 className={styles.cardTitle}>3. Shopify Theme Deployment</h3>
          <p className={styles.cardText}>
            Integrated the compiled React application into the Shopify theme using
            snippets and section schema. Ensured the React component mounts correctly
            and interacts seamlessly with the existing theme's structure and styles.
          </p>
          <p className={styles.cardText}>Visit the <a href="https://www.solawoodflowers.com/" className={styles.cardLink}>Sola Wood Flowers</a> store to see the minicart in action.</p>
        </div>
      </div>
    </div>
    </>
  );
}
