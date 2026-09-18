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
