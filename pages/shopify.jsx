import React, { useState } from 'react';
import styles from './shopify.module.css';
import NavBar from '../components/ui/ShopifyLanding/NavBar';

// Translations object
const translations = {
  en: {
    nav: {
      home: "Home",
      portfolio: "Portfolio", 
      services: "Services",
      about: "About",
      team: "Team",
      contact: "Contact"
    },
    hero: {
      title: "SCALING BRANDS ON SHOPIFY",
      cta: "Learn More"
    },
    trust: {
      brands: ["SPIRCONIAN", "MEACHERS", "BRAND A", "BRAND B", "BRAND C"]
    },
    intro: {
      title: "We create high-performing websites that convert, elevate your brand, and drive sustainable growth across every stage of your business.",
      cta: "Learn More"
    },
    portfolio: {
      card1: "2012",
      card2: "120+",
      card3: "THE NEW LOOK",
      card4: "Elo & Jonah Cosmetic",
      card5: "RUSHMERE"
    },
    audience: {
      title: "For everyone from entrepreneurs to enterprise",
      subtitle: "We serve businesses of all sizes, from startups to Fortune 500 companies, providing tailored solutions that drive results.",
      categories: ["Cosmetics & Beauty", "Lifestyle & Fashion", "Home & Furniture"]
    },
    work: {
      label: "OUR WORK",
      title: "Trusted by leading brands in the Shopify space, we deliver with precision—on time, on budget, and built to perform, scale and grow."
    },
    customers: {
      title: "Find your forever customers",
      subtitle: "Reach the right customers faster"
    },
    services: {
      label: "SERVICES",
      title: "Shopify Growth Services",
      description: "Comprehensive Shopify development and optimization services designed to accelerate your business growth and maximize your online potential.",
      cta: "Learn More"
    },
    business: {
      label: "SERVICES",
      title: "Taking care of your business",
      description: "From initial setup to ongoing maintenance, we handle every aspect of your Shopify store to ensure optimal performance and growth.",
      cta: "Learn More"
    },
    podcast: {
      label: "PODCAST/BLOG",
      episodes: [
        {
          number: "EPISODE 100",
          title: "Why We Choose the Shopify Platform",
          description: "Discover the strategic advantages and technical benefits that make Shopify the preferred choice for e-commerce success."
        },
        {
          number: "EPISODE 101", 
          title: "Scaling Success: An Interview with Shopify Expert",
          description: "Insights from industry experts on scaling your business and maximizing your Shopify store's potential."
        },
        {
          number: "EPISODE 102",
          title: "From Start-Up to Enterprise: A Shopify Success Story", 
          description: "Real-world case study of a business that transformed from startup to enterprise using Shopify."
        }
      ],
      viewAll: "View All"
    },
    testimonial: {
      label: "WHAT OUR CLIENTS SAY",
      quote: "Working with milkbox transformed our online presence. Their expertise in Shopify development helped us increase our conversion rate by 300% in just six months. The team's attention to detail and commitment to our success exceeded all expectations.",
      author: "Mia Jones",
      position: "Founder, Mia's Boutique"
    },
    cta: {
      title: "Let's Build The Future together",
      subtitle: "Our team of experienced Shopify experts is ready to help you achieve your business goals.",
      button: "Contact via WhatsApp"
    },
    footer: {
      newsletter: "Subscribe to our newsletter",
      emailPlaceholder: "Enter your email address",
      submit: "Submit",
      services: "Services",
      company: "Company", 
      resources: "Resources",
      legal: "Legal",
      links: {
        webDesign: "Web Design",
        development: "Development",
        optimization: "Optimization",
        consulting: "Consulting",
        aboutUs: "About Us",
        team: "Team",
        careers: "Careers",
        contact: "Contact",
        blog: "Blog",
        podcast: "Podcast",
        caseStudies: "Case Studies",
        guides: "Guides",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service",
        cookiePolicy: "Cookie Policy",
        gdpr: "GDPR"
      }
    },
    language: {
      en: "EN",
      es: "ES"
    }
  },
  es: {
    nav: {
      home: "Inicio",
      portfolio: "Portafolio",
      services: "Servicios", 
      about: "Nosotros",
      team: "Equipo",
      contact: "Contacto"
    },
    hero: {
      title: "ESCALANDO MARCAS EN SHOPIFY",
      cta: "Saber Más"
    },
    trust: {
      brands: ["SPIRCONIAN", "MEACHERS", "MARCA A", "MARCA B", "MARCA C"]
    },
    intro: {
      title: "Creamos sitios web de alto rendimiento que convierten, elevan tu marca y generan crecimiento sostenible en cada etapa de tu negocio.",
      cta: "Saber Más"
    },
    portfolio: {
      card1: "2012",
      card2: "120+",
      card3: "EL NUEVO LOOK",
      card4: "Elo & Jonah Cosmetic",
      card5: "RUSHMERE"
    },
    audience: {
      title: "Para todos, desde emprendedores hasta empresas",
      subtitle: "Servimos a empresas de todos los tamaños, desde startups hasta empresas Fortune 500, proporcionando soluciones personalizadas que generan resultados.",
      categories: ["Cosméticos y Belleza", "Estilo de Vida y Moda", "Hogar y Muebles"]
    },
    work: {
      label: "NUESTRO TRABAJO",
      title: "Confiado por las principales marcas en el espacio Shopify, entregamos con precisión—a tiempo, dentro del presupuesto, y construido para rendir, escalar y crecer."
    },
    customers: {
      title: "Encuentra tus clientes para siempre",
      subtitle: "Alcanza a los clientes correctos más rápido"
    },
    services: {
      label: "SERVICIOS",
      title: "Servicios de Crecimiento Shopify",
      description: "Servicios integrales de desarrollo y optimización de Shopify diseñados para acelerar el crecimiento de tu negocio y maximizar tu potencial en línea.",
      cta: "Saber Más"
    },
    business: {
      label: "SERVICIOS",
      title: "Cuidando tu negocio",
      description: "Desde la configuración inicial hasta el mantenimiento continuo, manejamos cada aspecto de tu tienda Shopify para asegurar un rendimiento y crecimiento óptimos.",
      cta: "Saber Más"
    },
    podcast: {
      label: "PODCAST/BLOG",
      episodes: [
        {
          number: "EPISODIO 100",
          title: "Por Qué Elegimos la Plataforma Shopify",
          description: "Descubre las ventajas estratégicas y beneficios técnicos que hacen de Shopify la opción preferida para el éxito del comercio electrónico."
        },
        {
          number: "EPISODIO 101",
          title: "Escalando el Éxito: Una Entrevista con Experto de Shopify",
          description: "Perspectivas de expertos de la industria sobre escalar tu negocio y maximizar el potencial de tu tienda Shopify."
        },
        {
          number: "EPISODIO 102",
          title: "De Start-Up a Empresa: Una Historia de Éxito con Shopify",
          description: "Caso de estudio real de un negocio que se transformó de startup a empresa usando Shopify."
        }
      ],
      viewAll: "Ver Todo"
    },
    testimonial: {
      label: "LO QUE DICEN NUESTROS CLIENTES",
      quote: "Trabajar con milkbox transformó nuestra presencia en línea. Su experiencia en desarrollo de Shopify nos ayudó a aumentar nuestra tasa de conversión en un 300% en solo seis meses. La atención al detalle del equipo y su compromiso con nuestro éxito superó todas las expectativas.",
      author: "Mia Jones",
      position: "Fundadora, Boutique de Mia"
    },
    cta: {
      title: "Construyamos el Futuro juntos",
      subtitle: "Nuestro equipo de expertos experimentados en Shopify está listo para ayudarte a alcanzar tus objetivos de negocio.",
      button: "Contactar por WhatsApp"
    },
    footer: {
      newsletter: "Suscríbete a nuestro boletín",
      emailPlaceholder: "Ingresa tu dirección de correo",
      submit: "Enviar",
      services: "Servicios",
      company: "Empresa",
      resources: "Recursos", 
      legal: "Legal",
      links: {
        webDesign: "Diseño Web",
        development: "Desarrollo",
        optimization: "Optimización",
        consulting: "Consultoría",
        aboutUs: "Sobre Nosotros",
        team: "Equipo",
        careers: "Carreras",
        contact: "Contacto",
        blog: "Blog",
        podcast: "Podcast",
        caseStudies: "Casos de Estudio",
        guides: "Guías",
        privacyPolicy: "Política de Privacidad",
        termsOfService: "Términos de Servicio",
        cookiePolicy: "Política de Cookies",
        gdpr: "GDPR"
      }
    },
    language: {
      en: "EN",
      es: "ES"
    }
  }
};

export default function ShopifyLanding() {
  const [language, setLanguage] = useState('en');
  const t = translations[language];



  return (
    <div className={styles.container}>
      {/* Header/Navigation */}
      <NavBar 
        language={language}
        onLanguageChange={setLanguage}
        translations={{
          nav: t.nav,
          cta: t.cta,
          language: t.language
        }}
      />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            {t.hero.title.split('SHOPIFY').map((part, index) => (
              <React.Fragment key={index}>
                {part}
                {index === 0 && <span className={styles.shopifyHighlight}>SHOPIFY</span>}
              </React.Fragment>
            ))}
          </h1>
          <button className={styles.heroCta}>{t.hero.cta}</button>
        </div>
        <div className={styles.heroBackground}></div>
      </section>

      {/* Trust Section */}
      <section className={styles.trust}>
        <div className={styles.trustLogos}>
          {t.trust.brands.map((brand, index) => (
            <span key={index}>{brand}</span>
          ))}
        </div>
      </section>

      {/* Introduction Section */}
      <section className={styles.intro}>
        <div className={styles.introContent}>
          <div className={styles.introText}>
            <h2>{t.intro.title}</h2>
            <button className={styles.introCta}>{t.intro.cta}</button>
          </div>
        </div>
      </section>

      {/* Portfolio Grid 1 */}
      <section className={styles.portfolio}>
        <div className={styles.portfolioGrid}>
          <div className={styles.portfolioCard}>
            <div className={styles.cardImage} style={{backgroundImage: 'linear-gradient(45deg, #FF6B35, #FF8E53)'}}>
              <div className={styles.cardOverlay}></div>
            </div>
          </div>
          <div className={styles.portfolioCard}>
            <div className={styles.cardImage} style={{backgroundImage: 'linear-gradient(45deg, #2D5A27, #4A7C59)'}}>
              <div className={styles.cardText}>{t.portfolio.card1}</div>
            </div>
          </div>
          <div className={styles.portfolioCard}>
            <div className={styles.cardImage} style={{backgroundImage: 'linear-gradient(45deg, #F8F9FA, #E9ECEF)'}}>
              <div className={styles.cardOverlay}></div>
            </div>
          </div>
          <div className={styles.portfolioCard}>
            <div className={styles.cardImage} style={{backgroundImage: 'linear-gradient(45deg, #2D5A27, #4A7C59)'}}>
              <div className={styles.cardText}>{t.portfolio.card2}</div>
            </div>
          </div>
          <div className={styles.portfolioCard}>
            <div className={styles.cardImage} style={{backgroundImage: 'linear-gradient(45deg, #E6B8AF, #D4A5A5)'}}>
              <div className={styles.cardText}>{t.portfolio.card3}</div>
            </div>
          </div>
          <div className={styles.portfolioCard}>
            <div className={styles.cardImage} style={{backgroundImage: 'linear-gradient(45deg, #E6B8AF, #D4A5A5)'}}>
              <div className={styles.cardOverlay}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className={styles.targetAudience}>
        <div className={styles.audienceContent}>
          <div className={styles.audienceText}>
            <h2>{t.audience.title}</h2>
            <p>{t.audience.subtitle}</p>
          </div>
          <div className={styles.audienceGrid}>
            <div className={styles.audienceCard}>
              <div className={styles.audienceImage} style={{backgroundImage: 'linear-gradient(45deg, #2C2C2C, #404040)'}}></div>
              <p>{t.audience.categories[0]}</p>
            </div>
            <div className={styles.audienceCard}>
              <div className={styles.audienceImage} style={{backgroundImage: 'linear-gradient(45deg, #8B7355, #A0522D)'}}></div>
              <p>{t.audience.categories[1]}</p>
            </div>
            <div className={styles.audienceCard}>
              <div className={styles.audienceImage} style={{backgroundImage: 'linear-gradient(45deg, #F4D03F, #F7DC6F)'}}></div>
              <p>{t.audience.categories[2]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className={styles.ourWork}>
        <div className={styles.workContent}>
          <div className={styles.workHeader}>
            <span className={styles.workLabel}>{t.work.label}</span>
            <h2>{t.work.title}</h2>
          </div>
        </div>
      </section>

      {/* Portfolio Grid 2 */}
      <section className={styles.portfolioDark}>
        <div className={styles.portfolioGrid}>
          <div className={styles.portfolioCard}>
            <div className={styles.cardImage} style={{backgroundImage: 'linear-gradient(45deg, #FF6B35, #FF8E53)'}}>
              <div className={styles.cardOverlay}></div>
            </div>
            <p className={styles.cardLabel}>{t.portfolio.card4}</p>
          </div>
          <div className={styles.portfolioCard}>
            <div className={styles.cardImage} style={{backgroundImage: 'linear-gradient(45deg, #F8F9FA, #E9ECEF)'}}>
              <div className={styles.cardOverlay}></div>
            </div>
          </div>
          <div className={styles.portfolioCard}>
            <div className={styles.cardImage} style={{backgroundImage: 'linear-gradient(45deg, #2D5A27, #4A7C59)'}}>
              <div className={styles.cardOverlay}></div>
            </div>
          </div>
          <div className={styles.portfolioCard}>
            <div className={styles.cardImage} style={{backgroundImage: 'linear-gradient(45deg, #8B7355, #A0522D)'}}>
              <div className={styles.cardOverlay}></div>
            </div>
          </div>
          <div className={styles.portfolioCard}>
            <div className={styles.cardImage} style={{backgroundImage: 'linear-gradient(45deg, #E74C3C, #C0392B)'}}>
              <div className={styles.cardOverlay}></div>
            </div>
            <p className={styles.cardLabel}>{t.portfolio.card5}</p>
          </div>
          <div className={styles.portfolioCard}>
            <div className={styles.cardImage} style={{backgroundImage: 'linear-gradient(45deg, #8B7355, #A0522D)'}}>
              <div className={styles.cardOverlay}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Find Your Forever Customers */}
      <section className={styles.foreverCustomers}>
        <div className={styles.customersContent}>
          <h2>{t.customers.title}</h2>
          <div className={styles.customersGrid}>
            <div className={styles.customerCard}>
              <div className={styles.customerImage} style={{backgroundImage: 'linear-gradient(45deg, #8B5CF6, #A78BFA)'}}>
                <div className={styles.customerOverlay}></div>
              </div>
              <p>{t.customers.subtitle}</p>
            </div>
            <div className={styles.customerCard}>
              <div className={styles.customerImage} style={{backgroundImage: 'linear-gradient(45deg, #2C2C2C, #404040)'}}>
                <div className={styles.customerOverlay}></div>
              </div>
              <p>{t.customers.subtitle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shopify Growth Services */}
      <section className={styles.services}>
        <div className={styles.servicesContent}>
          <div className={styles.serviceImage}>
            <div className={styles.imagePlaceholder} style={{backgroundImage: 'linear-gradient(45deg, #F4D03F, #F7DC6F)'}}></div>
          </div>
          <div className={styles.serviceText}>
            <span className={styles.serviceLabel}>{t.services.label}</span>
            <h2>{t.services.title}</h2>
            <p>{t.services.description}</p>
            <button className={styles.serviceCta}>{t.services.cta}</button>
          </div>
        </div>
      </section>

      {/* Taking Care of Your Business */}
      <section className={styles.businessCare}>
        <div className={styles.businessContent}>
          <div className={styles.businessImage}>
            <div className={styles.imagePlaceholder} style={{backgroundImage: 'linear-gradient(45deg, #2C2C2C, #404040)'}}></div>
          </div>
          <div className={styles.businessText}>
            <span className={styles.businessLabel}>{t.business.label}</span>
            <h2>{t.business.title}</h2>
            <p>{t.business.description}</p>
            <button className={styles.businessCta}>{t.business.cta}</button>
          </div>
        </div>
      </section>

      {/* Podcast/Blog Section */}
      <section className={styles.podcast}>
        <div className={styles.podcastContent}>
          <div className={styles.podcastHeader}>
            <span className={styles.podcastLabel}>{t.podcast.label}</span>
          </div>
          <div className={styles.podcastGrid}>
            {t.podcast.episodes.map((episode, index) => (
              <div key={index} className={styles.podcastCard}>
                <div className={styles.podcastImage} style={{backgroundImage: 'linear-gradient(45deg, #2D5A27, #4A7C59)'}}></div>
                <h3>{episode.number}</h3>
                <h4>{episode.title}</h4>
                <p>{episode.description}</p>
              </div>
            ))}
          </div>
          <div className={styles.podcastNav}>
            <button className={styles.navArrow}>←</button>
            <button className={styles.viewAll}>{t.podcast.viewAll}</button>
            <button className={styles.navArrow}>→</button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className={styles.testimonial}>
        <div className={styles.testimonialContent}>
          <div className={styles.testimonialHeader}>
            <span className={styles.testimonialLabel}>{t.testimonial.label}</span>
          </div>
          <div className={styles.testimonialQuote}>
            <blockquote>
              {t.testimonial.quote}
            </blockquote>
            <div className={styles.testimonialAuthor}>
              <div className={styles.authorImage}></div>
              <div className={styles.authorInfo}>
                <h4>{t.testimonial.author}</h4>
                <p>{t.testimonial.position}</p>
              </div>
              <div className={styles.authorSignature}></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>{t.cta.title}</h2>
          <p>{t.cta.subtitle}</p>
          <button className={styles.ctaButton} onClick={() => {
            const phoneNumber = '+1234567890'; // Reemplaza con tu número real
            const messages = {
              en: "Hi! I'm interested in your Shopify development services. Can you help me with my project?",
              es: "¡Hola! Estoy interesado en tus servicios de desarrollo Shopify. ¿Puedes ayudarme con mi proyecto?"
            };
            
            const message = encodeURIComponent(messages[language] || messages.en);
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
            
            window.open(whatsappUrl, '_blank');
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            {t.cta.button}
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerNewsletter}>
            <h3>{t.footer.newsletter}</h3>
            <div className={styles.newsletterForm}>
              <input type="email" placeholder={t.footer.emailPlaceholder} />
              <button>{t.footer.submit}</button>
            </div>
            <div className={styles.footerLogo}>
              <img src="/arc_favicon.png" alt="arciniega.dev" height={32} width={32} />
            </div>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.linkColumn}>
              <h4>{t.footer.services}</h4>
              <a href="#">{t.footer.links.webDesign}</a>
              <a href="#">{t.footer.links.development}</a>
              <a href="#">{t.footer.links.optimization}</a>
              <a href="#">{t.footer.links.consulting}</a>
            </div>
            <div className={styles.linkColumn}>
              <h4>{t.footer.company}</h4>
              <a href="#">{t.footer.links.aboutUs}</a>
              <a href="#">{t.footer.links.team}</a>
              <a href="#">{t.footer.links.careers}</a>
              <a href="#">{t.footer.links.contact}</a>
            </div>
            <div className={styles.linkColumn}>
              <h4>{t.footer.resources}</h4>
              <a href="#">{t.footer.links.blog}</a>
              <a href="#">{t.footer.links.podcast}</a>
              <a href="#">{t.footer.links.caseStudies}</a>
              <a href="#">{t.footer.links.guides}</a>
            </div>
            <div className={styles.linkColumn}>
              <h4>{t.footer.legal}</h4>
              <a href="#">{t.footer.links.privacyPolicy}</a>
              <a href="#">{t.footer.links.termsOfService}</a>
              <a href="#">{t.footer.links.cookiePolicy}</a>
              <a href="#">{t.footer.links.gdpr}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
