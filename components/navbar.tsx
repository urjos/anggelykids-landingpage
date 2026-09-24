"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn, buildWhatsAppUrl } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/propuesta", label: "Por qué elegirnos" },
  { href: "/paquetes", label: "Paquetes" },
  { href: "/cotizar", label: "Cotizador" },
  { href: "/faq", label: "Preguntas" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const whatsappUrl = buildWhatsAppUrl(
    "Hola Anggelykids! 👋 Quiero más información sobre sus shows y paquetes.",
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/40 bg-white/80 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center py-1 group">
          <Image
            src="/logo.png"
            alt="Anggelykids Shows y Eventos"
            width={220}
            height={134}
            className="h-14 sm:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-sm"
            priority
            quality={95}
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-primary",
                  isActive
                    ? "text-primary font-bold border-b-2 border-primary pb-0.5"
                    : "text-foreground/80",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

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
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-base font-semibold transition-colors hover:text-primary",
                    isActive
                      ? "text-primary font-bold bg-angely-purple-50 px-3 py-1.5 rounded-xl"
                      : "text-foreground/80 px-3 py-1.5",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
