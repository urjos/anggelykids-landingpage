"use client";

import { MessageCircle } from "lucide-react";

import { buildWhatsAppUrl } from "@/lib/utils";
import Image from "next/image";

export function WhatsAppFloatButton() {
  const whatsappUrl = buildWhatsAppUrl(
    "Hola Anggelykids! 👋 Quiero más información sobre sus shows y paquetes.",
  );

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 animate-wiggle items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] transition-transform hover:scale-110"
    >
      <Image
        src="/icons/whatsapp.png"
        alt="WhatsApp"
        width={52}
        height={52}
        className="object-contain brightness-0 invert"
        priority
      />
    </a>
  );
}
