import type { ComponentType, SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

export type CategoryIconName =
  | "coffee"
  | "toast"
  | "smoothie"
  | "frappe"
  | "sandwich"
  | "tea";

const iconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  strokeWidth: 1.8,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
  focusable: false,
};

export function ArrowRight(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRight(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M5 19 19 5" />
      <path d="M8 5h11v11" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M19 10c0 5-7 10-7 10S5 15 5 10a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="m12 2 1.3 6.7L20 10l-6.7 1.3L12 18l-1.3-6.7L4 10l6.7-1.3L12 2Z" />
      <path d="m19 16 .5 2.5L22 19l-2.5.5L19 22l-.5-2.5L16 19l2.5-.5L19 16Z" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z" />
    </svg>
  );
}

export function CoffeeIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M5 8h11v6.2A3.8 3.8 0 0 1 12.2 18H8.8A3.8 3.8 0 0 1 5 14.2V8Z" />
      <path d="M16 10h1.4a2.6 2.6 0 0 1 0 5.2H16" />
      <path d="M4 20h14" />
      <path d="M8 5c-.7-.7-.7-1.4 0-2M12 5c-.7-.7-.7-1.4 0-2" />
    </svg>
  );
}

export function ToastIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M5 18V8.5A3.5 3.5 0 0 1 8.5 5h7A3.5 3.5 0 0 1 19 8.5V18" />
      <path d="M5 18h14l-1.2 2H6.2L5 18Z" />
      <path d="M9 9.5c1.4-1 2.6 1 4 0 1.3-1 2.5 1 4 0" />
    </svg>
  );
}

export function SmoothieIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="m14 5 3-3" />
      <path d="M8 7h9l-1.1 13H9.1L8 7Z" />
      <path d="M7 7h11" />
      <path d="M10 11h5M10.5 14h4" />
      <path d="M12 5c-.7-1.4-.3-2.3.8-3" />
    </svg>
  );
}

export function FrappeIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="m8 6 1 14h6l1-14" />
      <path d="M7 6h10M9 10h6M9.5 14h5" />
      <path d="M10 4c.4-1.3 1.3-2 2.8-2 1.3 0 2.2.7 2.2 2" />
      <path d="M12 2V1" />
    </svg>
  );
}

export function SandwichIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="m4 9 8-5 8 5-8 5-8-5Z" />
      <path d="m4 9 8 5 8-5M4 13l8 5 8-5M4 17l8 5 8-5" />
    </svg>
  );
}

export function TeaIcon(props: IconProps) {
  return (
    <svg {...iconProps} {...props}>
      <path d="M5 9h11v5.5A4.5 4.5 0 0 1 11.5 19h-1A4.5 4.5 0 0 1 6 14.5V9Z" />
      <path d="M16 11h1.2a2.5 2.5 0 1 1 0 5H16" />
      <path d="M4 21h14" />
      <path d="M9 6c-.6-.8-.4-1.6.4-2.4M13 6c-.6-.8-.4-1.6.4-2.4" />
    </svg>
  );
}

export const categoryIconMap: Record<
  CategoryIconName,
  ComponentType<IconProps>
> = {
  coffee: CoffeeIcon,
  toast: ToastIcon,
  smoothie: SmoothieIcon,
  frappe: FrappeIcon,
  sandwich: SandwichIcon,
  tea: TeaIcon,
};
