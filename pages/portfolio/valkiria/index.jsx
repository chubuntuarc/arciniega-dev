import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Assuming you might use Next.js Image component
import Head from 'next/head'; // Import the Head component
import Modal from '../../../components/Modal'; // Import the Modal component
import styles from './valkiria.module.css'; // Import the SCSS module

// Simple translation object (can be moved to a separate file later)
const translations = {
  es: {
    pageTitle: 'Valkiria Tech - Desarrollo de Software',
    navAbout: 'Nosotros',
    navServices: 'Servicios',
    navContact: 'Contacto',
    langButton: 'EN',
    heroSubtitle: 'Desarrollo de Software',
    aboutTitle: 'DESARROLLO WEB PROFESIONAL',
    aboutSubtitle: 'Creación de sitios web y sistemas a la medida',
    featureDesignTitle: 'DISEÑO',
    featureDesignDesc: 'Nuestros productos cuentan con un diseño agradable a la vista del cliente.',
    featureControlTitle: 'CONTROL',
    featureControlDesc: 'No pierda de vista ningun detalle de su negocio, coloquese en linea.',
    featureAvailabilityTitle: 'DISPONIBILIDAD',
    featureAvailabilityDesc: 'Olvidate de tener que ir a la oficina a revisar como va el trabajo, trabaja en donde te encuentres.',
    featureSecurityTitle: 'SEGURIDAD',
    featureSecurityDesc: 'Aunque tu información este en linea, ten la tranquilidad de que tu información esta a salvo.',
    growthTextPart1: 'Los mas grandes ',
    growthHighlight1: 'negocios',
    growthTextPart2: ' necesitan de las mejores ',
    growthHighlight2: 'soluciones',
    growthTextPart3: ' para lograr un mayor',
    growthHighlight3: ' crecimiento.',
    growthTextPart4: '', // Empty for Spanish structure
    servicesTitle: 'NUESTROS SERVICIOS',
    servicesSubtitle: 'Servicio profesional listo para funcionar con su negocio.',
    servicesWebTitle: 'SITIOS WEB',
    servicesWebItem1: 'Informativos',
    servicesWebItem2: 'Dinámicos',
    servicesWebItem3: 'Responsivos',
    servicesWebItem4: 'Elegantes',
    servicesSystemsTitle: 'SISTEMAS',
    servicesSystemsItem1: 'Punto de venta',
    servicesSystemsItem2: 'Control de gastos',
    servicesSystemsItem3: 'Administración de negocio',
    servicesSystemsItem4: 'Marketing',
    servicesNetworksTitle: 'REDES',
    servicesNetworksItem1: 'Redes informaticas',
    servicesNetworksItem2: 'Soporte técnico',
    servicesNetworksItem3: 'Implementación de sistemas',
    servicesNetworksItem4: 'Seguridad informática',
    contactTitle: 'CONTACTO',
    contactSubtitle: 'Contactanos hoy mismo, queremos saber de ti.',
    contactNamePlaceholder: 'Nombre',
    contactEmailPlaceholder: 'Correo',
    contactPhonePlaceholder: 'Teléfono',
    contactMessagePlaceholder: 'Mensaje',
    contactSubmitButton: 'Enviar',
    footerText: 'Derechos reservados',
  },
  en: {
    pageTitle: 'Valkiria Tech - Software Development',
    navAbout: 'About Us',
    navServices: 'Services',
    navContact: 'Contact',
    langButton: 'ES',
    heroSubtitle: 'Software Development',
    aboutTitle: 'PROFESSIONAL WEB DEVELOPMENT',
    aboutSubtitle: 'Creation of custom websites and systems',
    featureDesignTitle: 'DESIGN',
    featureDesignDesc: 'Our products feature a design that is pleasing to the client\'s eye.',
    featureControlTitle: 'CONTROL',
    featureControlDesc: 'Don\'t lose sight of any detail of your business, get online.',
    featureAvailabilityTitle: 'AVAILABILITY',
    featureAvailabilityDesc: 'Forget having to go to the office to check on work, work wherever you are.',
    featureSecurityTitle: 'SECURITY',
    featureSecurityDesc: 'Even though your information is online, rest assured that your information is safe.',
    growthTextPart1: 'The biggest ',
    growthHighlight1: 'businesses',
    growthTextPart2: ' need the best ',
    growthHighlight2: 'solutions',
    growthTextPart3: ' to achieve greater',
    growthHighlight3: ' growth.',
    growthTextPart4: '', // Empty for English structure
    servicesTitle: 'OUR SERVICES',
    servicesSubtitle: 'Professional service ready to work with your business.',
    servicesWebTitle: 'WEBSITES',
    servicesWebItem1: 'Informative',
    servicesWebItem2: 'Dynamic',
    servicesWebItem3: 'Responsive',
    servicesWebItem4: 'Elegant',
    servicesSystemsTitle: 'SYSTEMS',
    servicesSystemsItem1: 'Point of Sale',
    servicesSystemsItem2: 'Expense Tracking',
    servicesSystemsItem3: 'Business Management',
    servicesSystemsItem4: 'Marketing',
    servicesNetworksTitle: 'NETWORKS',
    servicesNetworksItem1: 'Computer Networks',
    servicesNetworksItem2: 'Technical Support',
    servicesNetworksItem3: 'System Implementation',
    servicesNetworksItem4: 'IT Security',
    contactTitle: 'CONTACT',
    contactSubtitle: 'Contact us today, we want to hear from you.',
    contactNamePlaceholder: 'Name',
    contactEmailPlaceholder: 'Email',
    contactPhonePlaceholder: 'Phone',
    contactMessagePlaceholder: 'Message',
    contactSubmitButton: 'Send',
    footerText: 'All rights reserved',
  }
};

function ValkiriaPage() {
  // Add state for language ('es' or 'en')
  const [language, setLanguage] = useState('es');
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll
  const [isModalOpen, setIsModalOpen] = useState(false); // State for the modal

  // Add state for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;
    const whatsappNumber = '+526141578690';
    const whatsappMessage = `Hola! Quiero contactarlos.\n\nNombre: ${name}\nCorreo: ${email}\nTeléfono: ${phone}\nMensaje: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'es' ? 'en' : 'es'));
  };

  // Get current translations based on language state
  const t = translations[language];

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true if page is scrolled more than 50px, else false
      setIsScrolled(window.scrollY > 50);
    };

    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <> 
      <Head>
        <title>{t.pageTitle}</title>
        <link rel="icon" href="/valkiria/favicon.png" />
      </Head>
      <div className={styles.valkiriaPage}>
        <header className={`${styles.valkiriaHeader} ${isScrolled ? styles.scrolledHeader : ''}`}>
          <div className={styles.logoContainer}>
            <Image src="/valkiria/logo.png" alt="Valkiria Logo Small" width={50} height={40} />
          </div>
          <nav className={styles.valkiriaNav}>
            <ul>
              <li><a href="#about">{t.navAbout}</a></li>
              <li><a href="#services">{t.navServices}</a></li>
              <li><a href="#contact">{t.navContact}</a></li>
            </ul>
          </nav>
          {/* Add Language Switch Button */}
          <button onClick={toggleLanguage} className={styles.langButton}>
            {t.langButton}
          </button>
        </header>
        
        <button onClick={() => setIsModalOpen(true)} className={styles.detailsButton}>
          Project Details
        </button>

        <main className={styles.valkiriaHero}>
          <div className={styles.heroContent}>
            <Image src="/valkiria/profile.png" alt="Valkiria Logo Large" width={250} height={280} />
            <p>{t.heroSubtitle}</p>
          </div>
        </main>
        <section id="about" className={styles.aboutSection}>
          <h2>{t.aboutTitle}</h2>
          <p className={styles.subtitle}>{t.aboutSubtitle}</p>
          <div className={styles.featuresContainer}>
            <div className={styles.featureItem}>
              <i className="icon-placeholder">✏️</i>
              <h3>{t.featureDesignTitle}</h3>
              <p>{t.featureDesignDesc}</p>
            </div>
            <div className={styles.featureItem}>
              <i className="icon-placeholder">💻</i>
              <h3>{t.featureControlTitle}</h3>
              <p>{t.featureControlDesc}</p>
            </div>
            <div className={styles.featureItem}>
              <i className="icon-placeholder">⏱️</i>
              <h3>{t.featureAvailabilityTitle}</h3>
              <p>{t.featureAvailabilityDesc}</p>
            </div>
            <div className={styles.featureItem}>
              <i className="icon-placeholder">⚙️</i>
              <h3>{t.featureSecurityTitle}</h3>
              <p>{t.featureSecurityDesc}</p>
            </div>
          </div>
        </section>
        <section id="growth" className={styles.growthSection}>
          <div className={styles.growthContent}>
            <p>
              {t.growthTextPart1}<span className={styles.highlight}>{t.growthHighlight1}</span>
              {t.growthTextPart2}<span className={styles.highlight}>{t.growthHighlight2}</span>
              {t.growthTextPart3}<span className={styles.highlight}>{t.growthHighlight3}</span>
              {t.growthTextPart4}
            </p>
          </div>
        </section>
        <section id="services" className={styles.servicesSection}>
          <h2>{t.servicesTitle}</h2>
          <p className={styles.subtitle}>{t.servicesSubtitle}</p>
          <div className={styles.servicesColumns}>
            <div className={styles.serviceColumn}>
              <h3>{t.servicesWebTitle}</h3>
              <ul>
                <li>{t.servicesWebItem1}</li>
                <li>{t.servicesWebItem2}</li>
                <li>{t.servicesWebItem3}</li>
                <li>{t.servicesWebItem4}</li>
              </ul>
            </div>
            <div className={styles.serviceColumn}>
              <h3>{t.servicesSystemsTitle}</h3>
              <ul>
                <li>{t.servicesSystemsItem1}</li>
                <li>{t.servicesSystemsItem2}</li>
                <li>{t.servicesSystemsItem3}</li>
                <li>{t.servicesSystemsItem4}</li>
              </ul>
            </div>
            <div className={styles.serviceColumn}>
              <h3>{t.servicesNetworksTitle}</h3>
              <ul>
                <li>{t.servicesNetworksItem1}</li>
                <li>{t.servicesNetworksItem2}</li>
                <li>{t.servicesNetworksItem3}</li>
                <li>{t.servicesNetworksItem4}</li>
              </ul>
            </div>
          </div>
        </section>
        <section id="contact" className={styles.contactSection}>
          <h2>{t.contactTitle}</h2>
          <p className={styles.subtitle}>{t.contactSubtitle}</p>
          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t.contactNamePlaceholder}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t.contactEmailPlaceholder}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder={t.contactPhonePlaceholder}
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <textarea
                  id="message"
                  name="message"
                  placeholder={t.contactMessagePlaceholder}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className={styles.submitButton}>{t.contactSubmitButton}</button>
            </form>
          </div>
        </section>
      </div>
      <footer className={styles.footer}>
        <p>{t.footerText} &copy; {new Date().getFullYear()} arciniega.dev</p>
      </footer>

      {/* Add the Modal Component */}
      <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Project Details: Valkiria Tech Landing Page"
          repo_url="https://github.com/chubuntuarc/valkiria"
          year="2015"
          content={
              <>
                <p>
                    This project is a responsive landing page for &quot;Valkiria Tech&quot;, a local software development company.
                    It showcases services, features, and provides a contact form. Originally built in 2015, it was later updated.
                </p>
                <br />
                <div>
                  <hr style={{ border: '1px solid #000', width: '100%' }} />
                  <br />
                  <h4>Update 2025</h4>
                  <p>
                    The project was migrated to Next.js to leverage its features like server-side rendering and optimized image handling. Key updates include multi-language support (English/Spanish) and modifying the contact form to send inquiries directly via WhatsApp.
                  </p>
                  <br />
                  <h4>Technologies Used:</h4>
                  <p>Next.js (React Framework)</p>
                  <p>React (with Hooks: useState, useEffect)</p>
                  <p>JavaScript (ES6+)</p>
                  <p>CSS Modules (for styling)</p>
                  <p>HTML5</p>
                  <br />
                  <h4>Main Features:</h4>
                  <p>Responsive design adapting to different screen sizes.</p>
                  <p>Multi-language support (English/Spanish) with easy toggling.</p>
                  <p>Dynamic content rendering based on selected language.</p>
                  <p>Sticky header on scroll for improved navigation.</p>
                  <p>Use of Next.js `&lt;Image&gt;` component for optimized images.</p>
                  <p>Use of Next.js `&lt;Head&gt;` component for SEO and metadata.</p>
                  <br />
                  <h4>Challenges and Learnings:</h4>
                  <p>
                    Implementing the multi-language feature required structuring the text content efficiently and managing the language state with React Hooks. Integrating the contact form with the WhatsApp API involved correctly formatting the message and URL. Migrating the original structure to Next.js and CSS Modules provided practice in modern frontend development workflows.
                  </p>
                </div>
              </>
          }
      />
    </>
  );
}

export default ValkiriaPage;
