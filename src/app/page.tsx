import CategoryCards from "./components/category-cards";
import Footer from "./components/footer";
import {
  ArrowRight,
  ArrowUpRight,
  MapPinIcon,
  SparkIcon,
  StarIcon,
} from "./components/icons";
import MenuSection from "./components/menu-section";
import Navbar from "./components/navbar";
import { businessInfo } from "./data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: businessInfo.name,
  description:
    "Cafés, tostadas, smoothies, frappés y desayunos en Poxtrea, Madrid.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "C. de los Hermanos García Noblejas, 18",
    addressLocality: "Ciudad Lineal, Madrid",
    postalCode: "28037",
    addressCountry: "ES",
  },
  hasMap: businessInfo.mapsUrl,
  priceRange: businessInfo.priceRange,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: businessInfo.rating.numericValue,
    bestRating: 5,
    ratingCount: businessInfo.rating.reviewCount,
  },
};

export default function Home() {
  return (
    <div className="site-shell">
      <Navbar />

      <main id="contenido">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero__overlay" aria-hidden="true" />
          <div className="hero__inner">
            <div className="hero__copy">
              <span className="eyebrow eyebrow--light">CAFÉ · TOSTADAS · MADRID</span>
              <h1 id="hero-title" className="hero__title">
                Tu pausa
                <br />
                <span>favorita</span>
                <br />
                en Madrid
              </h1>
              <p className="hero__lead">
                Cafés, tostadas, smoothies, frappés y algo rico para cualquier
                momento del día.
              </p>
              <div className="hero__actions">
                <a className="button button--mustard" href="#carta">
                  Ver la carta <ArrowRight aria-hidden="true" />
                </a>
                <a className="text-link text-link--light" href={businessInfo.mapsUrl} target="_blank" rel="noreferrer">
                  Cómo llegar <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
              <div className="hero__proof">
                <span className="hero__stars" aria-hidden="true">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </span>
                <span>
                  <strong>{businessInfo.rating.value}</strong> en Maps · {businessInfo.rating.reviewCount} opiniones
                </span>
              </div>
            </div>

            <div className="hero__visual" aria-hidden="true">
              <div className="hero-art__burst" />
              <div className="hero-art__sun" />
              <div className="hero-art__label hero-art__label--top">MADRID / 28037</div>
              <div className="hero-art__label hero-art__label--side">Pausa rica</div>
              <div className="hero-art__poster">
                <div className="poster__headline">
                  <span>PAUSA</span>
                  <strong>RICA</strong>
                </div>
                <div className="poster__spark">✦</div>
                <div className="poster__cup">
                  <div className="poster__handle" />
                  <div className="poster__cup-top" />
                  <div className="poster__cup-body">P</div>
                  <div className="poster__saucer" />
                </div>
                <div className="poster__toast">
                  <span />
                </div>
                <div className="poster__bean poster__bean--one" />
                <div className="poster__bean poster__bean--two" />
                <span className="poster__footer">COFFEE &amp; BREAKFAST</span>
              </div>
              <div className="hero-art__sticker">HEY<br />MADRID</div>
            </div>
          </div>
          <div className="hero__scroll" aria-hidden="true">
            <span />
            Desliza
          </div>
        </section>

        <section className="intro-section section" id="nosotros" aria-labelledby="intro-title">
          <div className="intro-grid">
            <div className="intro-copy">
              <span className="eyebrow">POXTREA · CIUDAD LINEAL</span>
              <h2 id="intro-title" className="display-title">
                Café que te
                <br />
                <span>alegra el día.</span>
              </h2>
              <p className="intro-copy__lead">
                Un sitio para desayunar sin prisa, hacer una pausa o llevarte
                algo rico.
              </p>
            </div>

            <div className="intro-detail">
              <div className="intro-detail__top">
                <span className="intro-detail__label">EN LA MESA</span>
                <SparkIcon aria-hidden="true" />
              </div>
              <p>
                Cafés, tostadas, bocadillos, smoothies, frappés e infusiones
                para que el momento se adapte a ti.
              </p>
              <ul className="fact-list">
                <li>
                  <span>01</span>
                  <strong>Café</strong>
                  <small>para arrancar</small>
                </li>
                <li>
                  <span>02</span>
                  <strong>Tostadas</strong>
                  <small>dulces o saladas</small>
                </li>
                <li>
                  <span>03</span>
                  <strong>Opciones</strong>
                  <small>para cada antojo</small>
                </li>
              </ul>
              <div className="intro-detail__rating">
                <span className="intro-detail__rating-value">{businessInfo.rating.value}</span>
                <span>valoración visible en Google Maps<br />{businessInfo.rating.reviewCount} opiniones</span>
              </div>
            </div>
          </div>
        </section>

        <CategoryCards />
        <MenuSection />

        <section className="cta-strip" aria-labelledby="cta-title">
          <div className="cta-strip__inner">
            <div>
              <span className="eyebrow">UN PLAN SENCILLO</span>
              <h2 id="cta-title">¿Desayunamos?</h2>
              <p>Ven a Poxtrea y encuentra tu combinación favorita.</p>
            </div>
            <a className="button button--ink" href={businessInfo.mapsUrl} target="_blank" rel="noreferrer">
              <MapPinIcon aria-hidden="true" />
              Ver ubicación
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <SparkIcon className="cta-strip__spark" aria-hidden="true" />
        </section>

        <section className="visit-section section" id="visitanos" aria-labelledby="visit-title">
          <div className="visit-grid">
            <div className="visit-copy">
              <span className="eyebrow eyebrow--light">POXTREA · MADRID</span>
              <h2 id="visit-title" className="display-title display-title--light">
                Nos vemos
                <br />
                <span>en Madrid.</span>
              </h2>
              <p>
                Te esperamos en Ciudad Lineal para una pausa con algo rico a
                mano.
              </p>
              <address className="visit-address">
                {businessInfo.addressLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
              <div className="service-badges" aria-label="Servicios disponibles">
                {businessInfo.services.map((service) => (
                  <span key={service}>{service}</span>
                ))}
              </div>
              <a className="button button--cream" href={businessInfo.mapsUrl} target="_blank" rel="noreferrer">
                Abrir en Google Maps <ArrowUpRight aria-hidden="true" />
              </a>
            </div>

            <aside className="visit-card" aria-label="Ubicación de Poxtrea">
              <div className="visit-card__grid" aria-hidden="true" />
              <div className="visit-card__top">
                <span>ESTAMOS AQUÍ</span>
                <MapPinIcon aria-hidden="true" />
              </div>
              <div className="visit-card__number">18</div>
              <div className="visit-card__route">
                <span>CIUDAD LINEAL</span>
                <ArrowRight aria-hidden="true" />
                <span>MADRID</span>
              </div>
              <div className="visit-card__bottom">
                <span>POXTREA</span>
                <span>{businessInfo.priceRange}</span>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
