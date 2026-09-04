import Image from "next/image";
import { ArrowUpRight } from "./icons";
import { businessInfo } from "../data/site";

const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Carta", href: "#carta" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Visítanos", href: "#visitanos" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="footer-brand">
          <a className="footer-brand__link" href="#inicio">
            <Image
              className="footer-brand__logo"
              src="/brand/poxtrea-logo-white.png"
              alt="Poxtrea"
              width={220}
              height={73}
            />
          </a>
          <p>
            Una pausa con buen color
            <br />
            en Ciudad Lineal.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Navegación del pie de página">
          <span className="footer-label">Explora</span>
          {footerLinks.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-address">
          <span className="footer-label">Encuéntranos</span>
          <address>
            {businessInfo.addressLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
          <a
            className="footer-map-link"
            href={businessInfo.mapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            Google Maps <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>POXTREA / COFFEE &amp; BREAKFAST</span>
        <span>Madrid · Ciudad Lineal</span>
      </div>
    </footer>
  );
}
