"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#propuesta", label: "Por qué elegirnos" },
  { href: "#paquetes", label: "Paquetes" },
  { href: "#cotizar", label: "Cotizador" },
  { href: "#faq", label: "Preguntas" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const whatsappUrl = buildWhatsAppUrl(
    "Hola Anggelykids! 👋 Quiero más información sobre sus shows y paquetes.",
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/40 bg-white/80 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Anggelykids Shows y Eventos"
            width={52}
            height={52}
            className="h-24 w-24 object-contain"
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="whatsapp" size="default">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Phone className="h-4 w-4" />
              Contactar al WhatsApp
            </a>
          </Button>
        </div>

        <button
          className="rounded-full p-2 text-angely-purple-700 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-semibold text-foreground/80"
              >
                {link.label}
              </a>
            ))}
            <Button asChild variant="whatsapp" className="mt-2 w-full">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Phone className="h-4 w-4" />
                Contactar al Whatsapp
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
