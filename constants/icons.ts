import facebook from "@/public/icons/facebook.svg";
import instagram from "@/public/icons/instagram.svg";
import tiktok from "@/public/icons/tiktok.svg";
import logo from "@/public/logo.png";
import whatsapp from "@/public/icons/whatsapp.png";

export const icons = {
  logo,
  whatsapp,
  facebook,
  instagram,
  tiktok,
} as const;

export type IconKey = keyof typeof icons;
