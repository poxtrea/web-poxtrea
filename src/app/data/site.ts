export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.poxtrea.es"
).replace(/\/$/, "");

export const siteAssets = {
  logoBlack: `${siteUrl}/brand/poxtrea-logo-black.png`,
  logoWhite: `${siteUrl}/brand/poxtrea-logo-white.png`,
  openGraph: `${siteUrl}/opengraph-image`,
} as const;

export const seoContent = {
  title: "Poxtrea | Cafetería y desayunos en Madrid, Ciudad Lineal",
  description:
    "Cafetería Poxtrea en Ciudad Lineal, Madrid: café, desayunos, tostadas, smoothies, frappés, bocadillos e infusiones para disfrutar en local o recoger cada día.",
  socialImageAlt: "Poxtrea, café y desayunos en Madrid, Ciudad Lineal",
} as const;

export const businessInfo = {
  name: "Poxtrea",
  subtitle: "COFFEE & BREAKFAST",
  address:
    "C. de los Hermanos García Noblejas, 18, Ciudad Lineal, 28037 Madrid",
  addressLines: [
    "C. de los Hermanos García Noblejas, 18",
    "Ciudad Lineal, 28037 Madrid",
  ],
  mapsUrl: "https://maps.app.goo.gl/spy5CRpvivND8BYw5",
  rating: {
    value: "4,2/5",
    numericValue: 4.2,
    reviewCount: 342,
  },
  priceRange: "1–10 € por persona",
  services: ["En local", "Recogida", "Sin delivery"],
} as const;
