"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "./icons";
import { businessInfo } from "../data/site";

const navigationLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Carta", href: "#carta" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Visítanos", href: "#visitanos" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const closeOnDesktop = () => {
      if (window.innerWidth > 860) setIsOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <header className="site-header">
        <div className="site-header__inner">
          <a className="brand" href="#inicio" onClick={closeMenu}>
            <Image
              className="brand__logo"
              src="/brand/poxtrea-logo-black.png"
              alt="Logotipo de Poxtrea"
              width={168}
              height={56}
              priority
            />
            <span className="brand__tag">{businessInfo.subtitle}</span>
          </a>

          <nav className="desktop-nav" aria-label="Navegación principal">
            {navigationLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
            <a
              className="button button--small button--ink"
              href={businessInfo.mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Cómo llegar
              <ArrowUpRight aria-hidden="true" />
            </a>
          </nav>

          <button
            ref={menuButtonRef}
            className={`menu-toggle${isOpen ? " is-open" : ""}`}
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <nav
          id="mobile-navigation"
          className={`mobile-nav${isOpen ? " is-open" : ""}`}
          aria-label="Navegación móvil"
          hidden={!isOpen}
        >
          <div className="mobile-nav__links">
            {navigationLinks.map((link, index) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                <span>0{index + 1}</span>
                {link.label}
              </a>
            ))}
          </div>
          <a
            className="button button--full button--mustard"
            href={businessInfo.mapsUrl}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Cómo llegar
            <ArrowUpRight aria-hidden="true" />
          </a>
        </nav>
      </header>
    </>
  );
}
