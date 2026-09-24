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
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex h-12 w-12 sm:h-16 sm:w-16 animate-wiggle items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_-5px_rgba(37,211,102,0.6)] transition-all hover:scale-110 active:scale-95"
    >
      <Image
        src="/icons/whatsapp.png"
        alt="WhatsApp"
        width={36}
        height={36}
        className="h-6 w-6 sm:h-8 sm:w-8 object-contain brightness-0 invert"
        priority
      />
    </a>
  );
}
