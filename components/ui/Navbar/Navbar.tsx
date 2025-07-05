import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export interface NavbarLink {
  label: string;
  href: string;
  active?: boolean;
}

export interface NavbarAction {
  label: string;
  onClick?: () => void;
  href?: string;
  primary?: boolean;
}

interface NavbarProps {
  logo: React.ReactNode;
  links: NavbarLink[];
  actions?: NavbarAction[];
}

export const Navbar: React.FC<NavbarProps> = ({ logo, links, actions }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Efecto scroll para reducir tamaño
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Cerrar menú con Escape
  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e: MouseEvent) => {
      // Permitir click en el botón hamburguesa
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !(e.target as HTMLElement).closest(`.${styles.menuToggle}`)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [menuOpen]);

  return (
    <nav className={scrolled ? `${styles.exampleNavbar} ${styles.navbarScrolled}` : styles.exampleNavbar}>
      <Link href="/" className={styles.navLogo}>{logo}</Link>
      <button
        className={styles.menuToggle}
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
        aria-controls="navbar-menu"
        onClick={() => setMenuOpen((v) => !v)}
        type="button"
        style={{ zIndex: 200 }}
      >
        <span className={styles.menuIcon} aria-hidden="true">
          <span className={menuOpen ? styles.barOpen : styles.bar}></span>
          <span className={menuOpen ? styles.barOpen : styles.bar}></span>
          <span className={menuOpen ? styles.barOpen : styles.bar}></span>
        </span>
      </button>
      <div
        className={
          menuOpen
            ? `${styles.menuMobile} ${styles.menuMobileOpen}`
            : styles.menuMobile
        }
        id="navbar-menu"
        ref={menuRef}
      >
        <ul className={styles.navLinks}>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={link.active ? styles.active : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {actions && (
          <div className={styles.navActions}>
            {actions.map((action, idx) =>
              action.href ? (
                <a
                  key={action.label + idx}
                  href={action.href}
                  className={action.primary ? styles.navBtnPrimary : styles.navBtn}
                >
                  {action.label}
                </a>
              ) : (
                <button
                  key={action.label + idx}
                  className={action.primary ? styles.navBtnPrimary : styles.navBtn}
                  onClick={action.onClick}
                  type="button"
                >
                  {action.label}
                </button>
              )
            )}
          </div>
        )}
      </div>
      {/* Desktop nav (oculto en mobile) */}
      <div className={styles.menuDesktop}>
        <ul className={styles.navLinks}>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={link.active ? styles.active : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {actions && (
          <div className={styles.navActions}>
            {actions.map((action, idx) =>
              action.href ? (
                <a
                  key={action.label + idx}
                  href={action.href}
                  className={action.primary ? styles.navBtnPrimary : styles.navBtn}
                >
                  {action.label}
                </a>
              ) : (
                <button
                  key={action.label + idx}
                  className={action.primary ? styles.navBtnPrimary : styles.navBtn}
                  onClick={action.onClick}
                  type="button"
                >
                  {action.label}
                </button>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};
