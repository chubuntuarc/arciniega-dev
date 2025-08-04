import React, { useState } from "react";
import { Clock, Zap, Calendar, User, Globe, Code2 } from "lucide-react";
import Head from "next/head";
import styles from "./dra.module.css";
import Image from "next/image";

// Función para enviar eventos a Google Analytics
const handleGtagEvent = (eventName, eventParams) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

const content = {
  es: {
    title: <>Consigue <span className={styles.draGradient}>Más Clientes</span> con una <span className={styles.draGradient}>Web Profesional</span></>,
    subtitle: <>
      Una transformación completa que moderniza la experiencia del usuario<br />
      <span className={styles.draSubtitleAccent}>y optimiza el rendimiento al máximo</span>
    </>,
    tabs: ["Antes", "Después"],
    old: {
      cardTitle: "Versión Anterior",
      list: [
        "Navegación confusa y experiencia de usuario deficiente",
        "Diseño obsoleto.",
        "Código legacy con tecnologías desactualizadas",
        "Score de 66/100 en Google PageSpeed",
      ],
      previewTitle: "Vista previa del sitio anterior",
      previewDesc: "Diseño obsoleto y lento",
    },
    modern: {
      cardTitle: "Versión Moderna",
      list: [
        "UI/UX moderno, minimalista y 100% responsive",
        "Carga ultrarrápida (<2s) y optimización avanzada",
        "Navegación intuitiva y experiencia de usuario sobresaliente",
        "Código limpio con tecnologías actuales",
      ],
      previewTitle: "Vista previa del nuevo sitio",
      previewDesc: "Moderno, rápido y eficiente",
    },
    nav: ["Transformación completa", "Resultados impresionantes"],
    langBtn: "EN",
    details: {
      infoTitle: "Información del Proyecto",
      duration: "Fecha",
      durationValue: "Abril - Mayo 2025",
      client: "Cliente",
      clientValue: "Medico Estetico, Empresaria, Escritora",
      type: "Tipo",
      typeValue: "Rediseño completo y modernización",
      tech: "Tecnologías",
      techs: ["React", "TypeScript", "Vite"],
      objectivesTitle: "Objetivos Principales",
      objectives: [
        "Mejorar la experiencia del usuario y modernizar el diseño",
        "Optimizar el rendimiento y reducir tiempos de carga",
        "Implementar diseño responsive para todos los dispositivos",
        "Mejorar el SEO y la accesibilidad web",
      ],
    },
  },
  en: {
    title: <>Get <span className={styles.draGradient}>More Clients</span> with a <span className={styles.draGradient}>Professional Web</span></>,
    subtitle: <>
      A complete transformation that modernizes the user experience<br />
      <span className={styles.draSubtitleAccent}>and maximizes performance</span>
    </>,
    tabs: ["Before", "After"],
    old: {
      cardTitle: "Previous Version",
      list: [
        "Confusing navigation and poor user experience",
        "Outdated design.",
        "Legacy code with obsolete technologies",
        "Score of 66/100 on Google PageSpeed",
      ],
      previewTitle: "Preview of the old site",
      previewDesc: "Outdated and slow design",
    },
    modern: {
      cardTitle: "Modern Version",
      list: [
        "Modern, minimalist, and fully responsive UI/UX",
        "Ultra-fast load (<2s) and advanced optimization",
        "Intuitive navigation and outstanding user experience",
        "Clean code with up-to-date technologies",
      ],
      previewTitle: "Preview of the new site",
      previewDesc: "Modern, fast, and efficient",
    },
    nav: ["Full transformation", "Impressive results"],
    langBtn: "ES",
    details: {
      infoTitle: "Project Information",
      duration: "Date",
      durationValue: "April - May 2025",
      client: "Client",
      clientValue: "Aesthetic Doctor, Entrepreneur, Writer",
      type: "Type",
      typeValue: "Full redesign and modernization",
      tech: "Technologies",
      techs: ["React", "TypeScript", "Vite"],
      objectivesTitle: "Main Objectives",
      objectives: [
        "Improve user experience and modernize the design",
        "Optimize performance and reduce load times",
        "Implement responsive design for all devices",
        "Improve SEO and web accessibility",
      ],
    },
  },
};

export default function Dramileidy() {
  const [tab, setTab] = useState("despues");
  const [lang, setLang] = useState("es");
  const t = content[lang];
  return (
    <>
      <Head>
        <title>Dra Mileidy</title>
      </Head>
      <div className={styles.draBg}>
        <div className={styles.draContainer}>
          <button
            className={styles.draLangBtn}
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            aria-label="Switch language"
          >
            {t.langBtn}
          </button>
          <h1 className={styles.draTitle}>{t.title}</h1>
          <p className={styles.draSubtitle}>{t.subtitle}</p>
          <div className={styles.draSynopsisContainer}>
            <p className={styles.draSynopsis}>
              {lang === "es"
                ? "La Dra. Mileidy tenía un sitio web lento y difícil de usar desde el móvil, lo que le hacía perder pacientes potenciales. Desarrollamos una nueva plataforma moderna y ultrarrápida que ahora sirve como su principal canal para captar nuevos clientes."
                : "Dr. Mileidy had a slow and mobile-unfriendly website, causing her to lose potential patients. We developed a new modern and ultra-fast platform that now serves as her main channel for attracting new clients."}
            </p>
          </div>
          <div className={styles.draTabs}>
            <button
              className={tab === "antes" ? styles.draTabActiveAntes : styles.draTab}
              onClick={() => setTab("antes")}
            >
              <Clock className={styles.draTabIcon} /> {t.tabs[0]}
            </button>
            <button
              className={tab === "despues" ? styles.draTabActiveDespues : styles.draTab}
              onClick={() => {
                setTab("despues");
                handleGtagEvent('click', { event_category: 'Tab', event_label: 'After Tab' });
              }}
            >
              <Zap className={styles.draTabIcon} /> {t.tabs[1]}
            </button>
          </div>
          <div className={styles.draGrid}>
            {tab === "antes" ? (
              <>
                <div className={styles.draCardLeft}>
                  <h2 className={styles.draCardTitle}>{t.old.cardTitle}</h2>
                  <ul className={styles.draList}>
                    {t.old.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.draCardRight}>
                  <div className={styles.draPreviewBox}>
                    <div className={styles.draPreviewImgWrapper}>
                      <Image src="/before_main.png" alt={t.old.previewTitle} width={320} height={180} className={styles.draPreviewImg} />
                    </div>
                    <div>
                      <div className={styles.draPreviewTitle}>{t.old.previewTitle}</div>
                      <div className={styles.draPreviewDesc}>{t.old.previewDesc}</div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className={styles.draCardLeft}>
                  <h2 className={styles.draCardTitle}>{t.modern.cardTitle}</h2>
                  <ul className={styles.draListModern}>
                    {t.modern.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.draCardRight}>
                  <div className={styles.draPreviewBox}>
                    <div className={styles.draPreviewImgWrapper}>
                      <Image src="/after_main.png" alt={t.modern.previewTitle} width={320} height={180} className={styles.draPreviewImg} />
                    </div>
                    <div>
                      <div className={styles.draPreviewTitle}>{t.modern.previewTitle}</div>
                      <div className={styles.draPreviewDesc}>{t.modern.previewDesc}</div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className={styles.draDetailsHeader}>
            <h2 className={styles.draDetailsMainTitle}>
              {lang === "es" ? (
                <>Detalles del <span className={styles.draGradient}>Proyecto</span></>
              ) : (
                <>Project <span className={styles.draGradient}>Details</span></>
              )}
            </h2>
            <p className={styles.draDetailsDesc}>
              {lang === "es"
                ? "Un proceso que garantiza resultados excepcionales"
                : "A methodological process that guarantees exceptional results"}
            </p>
          </div>
          <div className={styles.draDetailsSection}>
            <div className={styles.draCardLeft}>
              <h2 className={styles.draDetailsTitle}>{t.details.infoTitle}</h2>
              <ul className={styles.draDetailsList}>
                <li>
                  <span className={styles.draDetailsIcon} role="img" aria-label="Duración"><Calendar /></span>
                  <span>
                    <b>{t.details.duration}</b><br />
                    {t.details.durationValue}
                  </span>
                </li>
                <li>
                  <span className={styles.draDetailsIcon} role="img" aria-label="Cliente"><User /></span>
                  <span>
                    <b>{t.details.client}</b><br />
                    {t.details.clientValue}
                  </span>
                </li>
                <li>
                  <span className={styles.draDetailsIcon} role="img" aria-label="Tipo"><Globe /></span>
                  <span>
                    <b>{t.details.type}</b><br />
                    {t.details.typeValue}
                  </span>
                </li>
                <li>
                  <span className={styles.draDetailsIcon} role="img" aria-label="Tecnologías"><Code2 /></span>
                  <span>
                    <b>{t.details.tech}</b><br />
                    <span className={styles.draDetailsTags}>
                      {t.details.techs.map((tech, i) => (
                        <span key={i}>{tech}</span>
                      ))}
                    </span>
                  </span>
                </li>
              </ul>
            </div>
            <div className={styles.draCardRight}>
              <h2 className={styles.draDetailsTitle}>{t.details.objectivesTitle}</h2>
              <ul className={styles.draDetailsListBullets}>
                {t.details.objectives.map((obj, i) => (
                  <li key={i}>{obj}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.draFinalSection}>
            <h2 className={styles.draFinalTitle}>
              {lang === "es"
                ? <>¿Listo para Ver el <span className={styles.draGradient}>Proyecto Completo</span>?</>
                : <>Ready to See the <span className={styles.draGradient}>Full Project</span>?</>}
            </h2>
            <p className={styles.draFinalDesc}>
              {lang === "es"
                ? "Explora la transformación completa y descubre cómo este rediseño puede inspirar tu próximo proyecto"
                : "Explore the full transformation and see how this redesign can inspire your next project"}
            </p>
            <div className={styles.draFinalActions}>
              <a
                href="https://preview.dramileidy.com" target="_blank" rel="noopener noreferrer"
                className={styles.draFinalBtn}
                onClick={() => handleGtagEvent('click', { event_category: 'Button', event_label: 'View Live Website' })}
              >
                <span>🔗</span> {lang === "es" ? "Ver Caso de Éxito" : "View Success Case"}
              </a>
            </div>
            <div className={styles.draFinalCta}>
              {lang === "es"
                ? <span>🚀 <b>¿Tienes un proyecto en mente?</b> <br />Escríbeme y te doy una asesoría gratuita{' '}
                    <a
                      href="https://wa.me/+526141561723?text=Hola%2C%20quiero%20un%20redise%C3%B1o%20web%20como%20el%20de%20Dra.%20Mileidy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.draFinalBtnWhatsapp}
                      onClick={() => handleGtagEvent('click', { event_category: 'Button', event_label: 'Send WhatsApp (ES)' })}
                    >Enviarme un WhatsApp</a>
                  </span>
                : <span>🚀 <b>Do you have a project in mind?</b> <br />Write me and I&apos;ll give you a free 15-minute consultation.{' '}
                    <a
                      href="https://wa.me/+526141561723?text=Hi%2C%20I%20want%20a%20website%20redesign%20like%20Dra.%20Mileidy's%20project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.draFinalBtnWhatsapp}
                      onClick={() => handleGtagEvent('click', { event_category: 'Button', event_label: 'Send WhatsApp (EN)' })}
                    >Send me a WhatsApp</a>
                  </span>}
            </div>
          </div>
          <footer className={styles.draFooter}>
            <span>
              © {new Date().getFullYear()} arciniega.dev
            </span>
            <br />
            <span>
              {lang === "es" ? "Desarrollo: " : "Development: "}
              <a href="https://www.linkedin.com/in/jesusarciniega/" target="_blank" rel="noopener noreferrer">Jesus Arciniega</a>
            </span> / &nbsp;
            <span>
              {lang === "es" ? "Diseño: " : "Design: "}
              <a href="https://www.linkedin.com/in/cynthia-rdz-ux/" target="_blank" rel="noopener noreferrer">Cynthia Rodriguez</a>
            </span>
          </footer>
        </div>
      </div>
    </>
  );
}
