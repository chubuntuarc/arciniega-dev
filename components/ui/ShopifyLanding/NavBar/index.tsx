import React from 'react';
import styles from './NavBar.module.css';

interface NavBarProps {
  language: string;
  onLanguageChange: (lang: string) => void;
  translations: {
    nav: {
      home: string;
      portfolio: string;
      services: string;
      about: string;
      team: string;
      contact: string;
    };
    cta: {
      button: string;
    };
    language: {
      en: string;
      es: string;
    };
  };
}

const NavBar: React.FC<NavBarProps> = ({ language, onLanguageChange, translations }) => {
  const toggleLanguage = () => {
    onLanguageChange(language === 'en' ? 'es' : 'en');
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+526141561723';
    const messages = {
      en: "Hi! I'm interested in your Shopify development services. Can you help me with my project?",
      es: "¡Hola! Estoy interesado en tus servicios de desarrollo Shopify. ¿Puedes ayudarme con mi proyecto?"
    };
    
    const message = encodeURIComponent(messages[language as keyof typeof messages] || messages.en);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <img src="/arc_favicon.png" alt="arciniega.dev" height={48} width={48} />
        </div>
        <nav className={styles.nav}>
          <a href="#home">{translations.nav.home}</a>
          <a href="#portfolio">{translations.nav.portfolio}</a>
          <a href="#services">{translations.nav.services}</a>
          <a href="#contact">{translations.nav.contact}</a>
        </nav>
        <div className={styles.headerActions}>
          <button className={styles.languageToggle} onClick={toggleLanguage}>
            {translations.language[language === 'en' ? 'es' : 'en']}
          </button>
          <button className={styles.ctaButton} onClick={handleWhatsAppClick}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            {translations.cta.button}
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
