import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Construye una URL de WhatsApp con mensaje prellenado.
 * Usar siempre para los CTAs de cotización.
 */
export function buildWhatsAppUrl(message: string, phone = "51957189685") {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

export function quotePackageMessage(packageName: string, price: string) {
  return `Hola Anggelykids! 👋 Quiero cotizar el paquete "${packageName}" (${price}). ¿Me ayudan con la disponibilidad?`;
}

const MONTHS_ES = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

/**
 * Formatea una fecha ISO (YYYY-MM-DD) como "21 de marzo de 2026".
 * Se hace a mano (sin Intl) para que el resultado sea idéntico en servidor y
 * cliente y no dependa de la zona horaria.
 */
export function formatReviewDate(isoDate: string) {
  const [year, month, day] = isoDate.split("-").map(Number);
  const monthName = MONTHS_ES[month - 1] ?? "";
  return `${day} de ${monthName} de ${year}`;
}
