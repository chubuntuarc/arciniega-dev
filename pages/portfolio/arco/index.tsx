import React from 'react';
import styles from './arco.module.css';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '+526141561723';
    const message = encodeURIComponent("Hi! I'm interested in your services. Can you help me?");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <img src="/arco.png" alt="arciniega.dev" height={48} width={48} />
        </div>
        <span>Arco - Persistent Cart</span>
        {/* <button className={styles.whatsappButton} onClick={handleWhatsAppClick}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          Contact via WhatsApp
        </button> */}
      </div>
    </header>
  );
};

export default function ArcoPage() {
  const handleAppStoreClick = () => {
    window.open('https://apps.shopify.com/arco-cart-sync', '_blank');
  };

  return (
    <div className={styles.container}>
      <WhatsAppButton />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              NEVER LOSE A SALE AGAIN
            </h1>
            <p className={styles.heroSubtitle}>
              Keep your customers&apos; carts synchronized across all devices
              and sessions. Arco prevents lost sales from cart abandonment when
              shoppers switch devices.
            </p>
            <button className={styles.heroButton} onClick={handleAppStoreClick}>
              TRY FOR FREE
            </button>
          </div>
          <div className={styles.heroVideo}>
            <div className={styles.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/x7YAplGErv0?rel=0&modestbranding=1&showinfo=0"
                title="Arco - Persistent Cart Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className={styles.valueProp}>
        <div className={styles.valueContent}>
          <div className={styles.valueHeader}>
            <div className={styles.valueAccent}></div>
            <h2 className={styles.valueTitle}>
              Seamless Cross-Device
              <br />
              Shopping Experience
            </h2>
          </div>
          <p className={styles.valueDescription}>
            Arco automatically syncs a logged-in customer&apos;s cart, so items
            added on mobile are available on desktop (and vice versa). This
            seamless experience reduces friction, improves conversions, and
            helps customers complete their purchases.
          </p>
          <div className={styles.valueFeatures}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>✓</div>
              <span>Automatic cart synchronization</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>✓</div>
              <span>Cross-device compatibility</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>✓</div>
              <span>Improved conversion rates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className={styles.features}>
        <div className={styles.featuresGrid}>
          <div className={styles.featureSection}>
            <div className={styles.featureCard}>
              <div className={styles.cardHeader}>
                <div className={styles.brandName}>Arco - Persistent Cart</div>
                <div className={styles.ctaText}>MADE FOR CONVERSION</div>
                <div className={styles.subText}>
                  Explore our cross-device cart sync now
                </div>
              </div>

              <div className={styles.benefitsGrid}>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitContent}>
                    <h4>Sales Increase</h4>
                    <div className={styles.benefitMetric}>
                      <span className={styles.amount}>$12,875</span>
                      <span className={styles.increase}>17% ↑</span>
                    </div>
                    <div className={styles.benefitChart}></div>
                    <p>Attributed to cart sync</p>
                  </div>
                </div>

                <div className={styles.benefitCard}>
                  <div className={styles.benefitContent}>
                    <h4>Cart Abandonment</h4>
                    <div className={styles.benefitMetric}>
                      <span className={styles.amount}>-23%</span>
                      <span className={styles.increase}>Reduction</span>
                    </div>
                    <div className={styles.benefitChart}></div>
                    <p>Prevented abandoned carts</p>
                  </div>
                </div>
              </div>

              <div className={styles.productDetail}>
                <div className={styles.productInfo}>
                  <h4>Solves Cross-Device Interruption</h4>
                  <span>
                    Customers can seamlessly continue shopping across all their
                    devices without losing their cart items. This prevents
                    abandoned carts and increases conversion rates.
                  </span>
                </div>
              </div>

              <div className={styles.cartFooter}>
                <a
                  href="https://apps.shopify.com/arco-cart-sync"
                  className={styles.addToCartButton}
                >
                  Try for Free
                </a>
                <div className={styles.cartInfo}>
                  <span>Free trial</span>
                  <span>$6.99/month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.howItWorks}>
        <div className={styles.howContent}>
          <h2 className={styles.howTitle}>How It Works</h2>
          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>1</div>
              <h3>Install App</h3>
              <p>
                Add Arco to your Shopify store with one click from the App
                Store.
              </p>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>2</div>
              <h3>Activate in Theme</h3>
              <p>
                Enable the app embed in your theme customizer to start syncing
                carts.
              </p>
            </div>

            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>3</div>
              <h3>Automatic Sync</h3>
              <p>
                Customer carts automatically sync across all devices when they
                log in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready to boost your sales?</h2>
          <p>
            Join thousands of Shopify stores that never lose a sale due to cart
            abandonment.
          </p>
          <button className={styles.ctaButton} onClick={handleAppStoreClick}>
            Install from Shopify App Store
          </button>
        </div>
      </section>
    </div>
  );
}
