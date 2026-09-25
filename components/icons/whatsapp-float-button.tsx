"use client";

import { buildWhatsAppUrl } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

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
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex h-12 w-12 sm:h-16 sm:w-16 hover:animate-wiggle items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_-5px_rgba(37,211,102,0.6)] hover:scale-110 hover:bg-[#1DA851] active:scale-95 transition-all"
    >
      <WhatsAppIcon size={36} priority className="h-7 w-7 sm:h-9 sm:w-9" />
    </a>
  );
}
