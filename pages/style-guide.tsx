import React, { useEffect, useState } from 'react';
import styles from './style-guide.module.css';
import { Navbar, NavbarLink, NavbarAction } from '../components/ui/Navbar/Navbar';

function ThemeSwitch() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Detectar tema inicial
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    setTheme(current);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <button
      className={styles.themeSwitch}
      onClick={toggleTheme}
      aria-label="Cambiar modo claro/oscuro"
      type="button"
    >
      {theme === 'dark' ? '🌙 Oscuro' : '☀️ Claro'}
    </button>
  );
}

const links: NavbarLink[] = [
  { label: 'arciniega.dev', href: '/', active: true },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

const actions: NavbarAction[] = [
  { label: 'Login', href: '/login' },
  { label: 'Sign up', href: '/signup', primary: true },
];

export default function StyleGuide() {
  return (
    <div className={styles.styleGuideRoot}>
      <Navbar logo={<img src="/arc_favicon.png" alt="SoRun" className={styles.navLogo} height={32} width={32} />} links={links}  />
      <header className={styles.styleGuideHeader}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div>
            <h1>Guía de Estilos & Branding</h1>
            <h2>Componentes y lineamientos visuales</h2>
            <p>
              Esta guía define los colores, fuentes y elementos visuales clave
              para mantener la coherencia de tu portafolio personal.
            </p>
          </div>
          <ThemeSwitch />
        </div>
      </header>
      <section className={styles.brandingSection}>
        <h3>Colores principales</h3>
        <div className={styles.colorPalette}>
          <div className={`${styles.colorSwatch} ${styles.primary}`}>
            <span>#8B5CF6</span>
            <span>Primario</span>
          </div>
          <div className={`${styles.colorSwatch} ${styles.secondary}`}>
            <span>#F43F5E</span>
            <span>Secundario</span>
          </div>
          <div className={`${styles.colorSwatch} ${styles.accent}`}>
            <span>#22D3EE</span>
            <span>Accent</span>
          </div>
          <div className={`${styles.colorSwatch} ${styles.dark}`}>
            <span>#18181B</span>
            <span>Fondo Oscuro</span>
          </div>
          <div className={`${styles.colorSwatch} ${styles.light}`}>
            <span>#F4F4F5</span>
            <span>Fondo Claro</span>
          </div>
        </div>
        <h3>Fuentes</h3>
        <div className={styles.fontSamples}>
          <div className={styles.fontSample}>
            <span
              style={{
                fontFamily: "Geist, Inter, sans-serif",
                fontWeight: 700,
                fontSize: 32,
              }}
            >
              Título Ejemplo
            </span>
            <span>Fuente: Geist / Inter, 700</span>
          </div>
          <div className={styles.fontSample}>
            <span
              style={{
                fontFamily: "Geist, Inter, sans-serif",
                fontWeight: 400,
                fontSize: 18,
              }}
            >
              Texto de párrafo ejemplo
            </span>
            <span>Fuente: Geist / Inter, 400</span>
          </div>
        </div>
      </section>
    </div>
  );
}
