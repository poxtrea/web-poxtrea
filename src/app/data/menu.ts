import type { CategoryIconName } from "../components/icons";

export type MenuCategory =
  | "Cafés"
  | "Tostadas"
  | "Smoothies"
  | "Frappés"
  | "Bocadillos"
  | "Infusiones"
  | "Bebidas"
  | "Extras";

export type MenuFilter = "Todo" | MenuCategory;

export type MenuItem = {
  category: MenuCategory;
  name: string;
  description?: string;
  price?: string;
  subgroup?: "Ensaladas" | "Zumos";
};

export type MenuCategoryCard = {
  title: MenuCategory;
  description: string;
  color: "orange" | "mustard" | "caramel" | "coffee" | "toast" | "cream";
  icon: CategoryIconName;
};

export const menuFilters: { label: MenuFilter; value: MenuFilter }[] = [
  { label: "Todo", value: "Todo" },
  { label: "Cafés", value: "Cafés" },
  { label: "Tostadas", value: "Tostadas" },
  { label: "Smoothies", value: "Smoothies" },
  { label: "Frappés", value: "Frappés" },
  { label: "Bocadillos", value: "Bocadillos" },
  { label: "Infusiones", value: "Infusiones" },
  { label: "Bebidas", value: "Bebidas" },
  { label: "Extras", value: "Extras" },
];

export const menuCategories: MenuCategoryCard[] = [
  {
    title: "Cafés",
    description: "Espresso, leche y pequeños giros.",
    color: "orange",
    icon: "coffee",
  },
  {
    title: "Tostadas",
    description: "Del desayuno sencillo al antojo dulce.",
    color: "mustard",
    icon: "toast",
  },
  {
    title: "Smoothies",
    description: "Mezclas de fruta para beber despacio.",
    color: "caramel",
    icon: "smoothie",
  },
  {
    title: "Frappés",
    description: "Textura fría, sabor a elegir.",
    color: "coffee",
    icon: "frappe",
  },
  {
    title: "Bocadillos",
    description: "Bocados salados y ensaladas.",
    color: "toast",
    icon: "sandwich",
  },
  {
    title: "Infusiones",
    description: "Una pausa caliente para alargar el día.",
    color: "cream",
    icon: "tea",
  },
];

export const menuItems: MenuItem[] = [
  {
    category: "Tostadas",
    name: "Mediterránea",
    description: "Pan, tomate fresco rallado, sal y aceite",
  },
  {
    category: "Tostadas",
    name: "Dulce",
    description: "Pan artesano, mantequilla y mermelada",
  },
  {
    category: "Tostadas",
    name: "Tosta de Nutella y frutos rojos",
    price: "3,90 €",
  },
  { category: "Tostadas", name: "Tosta de las ibéricas", price: "6,00 €" },
  { category: "Tostadas", name: "Tosta nórdica", price: "6,50 €" },
  { category: "Tostadas", name: "Tosta green", price: "5,90 €" },
  { category: "Tostadas", name: "Tosta Healthy", price: "7,00 €" },
  { category: "Tostadas", name: "Jamón y queso", price: "5,50 €" },
  { category: "Tostadas", name: "Tosta Thunnus", price: "5,50 €" },

  { category: "Cafés", name: "Americano", price: "1,90 € / 2,30 €" },
  { category: "Cafés", name: "Cortado", price: "1,90 € / 2,30 €" },
  { category: "Cafés", name: "Espresso", price: "1,90 € / 2,30 €" },
  { category: "Cafés", name: "Café con leche", price: "1,90 € / 2,30 €" },
  { category: "Cafés", name: "Cappuccino", price: "2,30 € / 2,80 €" },
  { category: "Cafés", name: "Mocca latte", price: "3,70 €" },
  { category: "Cafés", name: "Latte de vainilla", price: "3,70 €" },
  { category: "Cafés", name: "Caramel latte", price: "3,70 €" },

  {
    category: "Smoothies",
    name: "Açaí · fresa · arándano · plátano",
    price: "4,70 €",
  },
  { category: "Smoothies", name: "Fresa · plátano", price: "4,70 €" },
  {
    category: "Smoothies",
    name: "Fresa · mora · frambuesa",
    price: "4,70 €",
  },
  {
    category: "Smoothies",
    name: "Fresa · dragon fruit · piña · arándano",
    price: "4,70 €",
  },
  {
    category: "Smoothies",
    name: "Coco · piña · mango · plátano",
    price: "4,70 €",
  },
  { category: "Smoothies", name: "Papaya · mango · piña", price: "4,70 €" },
  {
    category: "Smoothies",
    name: "Mango · piña · melón · kiwi",
    price: "4,70 €",
  },
  {
    category: "Smoothies",
    name: "Espinaca · apio · manzana",
    price: "4,70 €",
  },

  { category: "Frappés", name: "Oreo", price: "4,70 €" },
  { category: "Frappés", name: "Vainilla", price: "4,70 €" },
  { category: "Frappés", name: "Caramelo", price: "4,70 €" },
  { category: "Frappés", name: "Chocolate", price: "4,70 €" },
  { category: "Frappés", name: "Lotus", price: "4,70 €" },

  {
    category: "Bocadillos",
    name: "Ibérico",
    price: "4,50 €",
  },
  { category: "Bocadillos", name: "Atún", price: "4,20 €" },
  { category: "Bocadillos", name: "Salmón", price: "4,90 €" },
  { category: "Bocadillos", name: "Pollo kebab", price: "4,20 €" },
  { category: "Bocadillos", name: "Pollo alioli", price: "4,20 €" },
  { category: "Bocadillos", name: "Tortilla", price: "4,90 €" },
  { category: "Bocadillos", name: "Croissant ibérico", price: "4,90 €" },
  { category: "Bocadillos", name: "Croissant huevo", price: "4,50 €" },
  { category: "Bocadillos", name: "Vegano", price: "4,90 €" },
  { category: "Bocadillos", name: "Croissant mixto", price: "3,50 €" },
  { category: "Bocadillos", name: "Sándwich mixto", price: "3,50 €" },
  {
    category: "Bocadillos",
    name: "Sándwich mixto vegetal",
    price: "4,00 €",
  },
  {
    category: "Bocadillos",
    name: "Ensalada de aguacate",
    price: "6,10 €",
    subgroup: "Ensaladas",
  },
  {
    category: "Bocadillos",
    name: "Ensalada de atún",
    price: "6,10 €",
    subgroup: "Ensaladas",
  },

  { category: "Infusiones", name: "Manzanilla · tila", price: "1,90 €" },
  { category: "Infusiones", name: "Té verde · rojo · negro", price: "1,90 €" },
  {
    category: "Infusiones",
    name: "Frutas del Pacífico",
    price: "2,10 €",
  },
  { category: "Infusiones", name: "Rooibos vainilla", price: "2,10 €" },
  { category: "Infusiones", name: "Frutos rojos", price: "2,10 €" },
  {
    category: "Infusiones",
    name: "Té de jengibre y naranja",
    price: "2,10 €",
  },
  { category: "Infusiones", name: "Chai", price: "3,70 € / 4,50 €" },
  { category: "Infusiones", name: "Matcha", price: "3,70 € / 4,50 €" },

  { category: "Bebidas", name: "Cola Cao", price: "1,90 €" },
  { category: "Bebidas", name: "Chocolate a la taza", price: "2,50 €" },
  { category: "Bebidas", name: "Vaso de leche", price: "1,90 €" },
  { category: "Bebidas", name: "Refrescos", price: "3,00 €" },
  { category: "Bebidas", name: "Agua", price: "1,70 €" },
  { category: "Bebidas", name: "Agua con gas", price: "2,50 €" },
  { category: "Bebidas", name: "Cerveza tercio", price: "3,50 €" },
  { category: "Bebidas", name: "Cerveza doble", price: "2,50 €" },
  { category: "Bebidas", name: "Caña", price: "1,90 €" },
  { category: "Bebidas", name: "Malta", price: "2,50 €" },
  { category: "Bebidas", name: "Vino de verano", price: "3,90 €" },
  { category: "Bebidas", name: "Small", price: "2,10 €", subgroup: "Zumos" },
  { category: "Bebidas", name: "Grande", price: "3,80 €", subgroup: "Zumos" },
  {
    category: "Bebidas",
    name: "Zumo de bote",
    price: "2,20 €",
    subgroup: "Zumos",
  },

  { category: "Extras", name: "Salmón", price: "3,80 €" },
  { category: "Extras", name: "Aguacate", price: "2,50 €" },
  { category: "Extras", name: "Huevo", price: "1,50 €" },
  { category: "Extras", name: "Mantequilla", price: "0,20 €" },
  { category: "Extras", name: "Mermelada", price: "0,20 €" },
  { category: "Extras", name: "Jamón ibérico", price: "2,50 €" },
  { category: "Extras", name: "Jamón york", price: "1,50 €" },
  { category: "Extras", name: "Queso", price: "1,50 €" },
  { category: "Extras", name: "Aceite", price: "0,20 €" },
];

export const menuNotes = {
  toast:
    "La tostada incluye café, té o Cola Cao tamaño S. Tamaño L: suplemento de 0,50 €.",
  sizes: "Cuando aparecen dos precios, corresponden a tamaños S / L.",
  frappe: "Los frappés están disponibles con base de café o vainilla.",
};

export const featuredMenuItem = {
  name: "Frappé Berrys",
  description: "Producto destacado de la carta para una pausa fría.",
  price: "Consultar",
};
