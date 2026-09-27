import Image from "next/image";
import { Facebook, Instagram, Phone } from "lucide-react";

import { buildWhatsAppUrl } from "@/lib/utils";
import TikTokIcon from "./icons/tiktok-icon";

export function Footer() {
  const whatsappUrl = buildWhatsAppUrl(
    "Hola Anggelykids! 👋 Quiero más información sobre sus shows y paquetes.",
  );

  return (
    <footer className="bg-angely-purple-900 py-2 text-white">
      <div className="container max-w-5xl mx-auto grid gap-2">
        <div className="grid gap-3 lg:grid-cols-3 items-center justify-center text-center">
          {/* Columna 1: Logo y descripción */}
          <div className="hidden sm:flex flex-col items-center text-start max-w-xs gap-1">
            <div className="rounded-2xl p-2 shadow-sm inline-block">
              <Image
                src="/logo.png"
                alt="Anggelykids Shows y Eventos"
                width={200}
                height={100}
                className="h-14 sm:h-16 w-auto object-contain"
                quality={95}
              />
            </div>
            <p className="text-xs text-white/70">
              Shows infantiles temáticos, sensoriales y mucho más. Hacemos de
              cada fiesta un momento inolvidable.
            </p>
          </div>

          {/* Columna 2: Contacto */}
          <div className="flex flex-col items-start text-start max-w-xs gap-1">
            <p className="font-heading text-xs font-extrabold uppercase tracking-wide text-angely-pink-300">
              Contacto
            </p>
            <div className="flex items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-angely-pink-500 text-angely-pink-300 hover:text-white transition-all duration-200"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/anggelykids/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-angely-pink-500 text-angely-pink-300 hover:text-white transition-all duration-200"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.facebook.com/p/AnggelyKids-Shows-Eventos-100070584128490/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-angely-pink-500 text-angely-pink-300 hover:text-white transition-all duration-200"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://www.tiktok.com/@anggelykids.show?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-angely-pink-500 text-angely-pink-300 hover:text-white transition-all duration-200"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Columna 3: Información importante */}
          <div className="flex flex-col items-start text-start max-w-xs gap-1">
            <p className="font-heading text-xs font-extrabold uppercase tracking-wide text-angely-pink-300">
              Importante
            </p>
            <p className="text-xs text-white/70">
              Todos los paquetes tienen duración específica y{" "}
              <span className="font-bold text-white">
                no incluyen movilidad
              </span>
              . El costo de traslado se cotiza según el distrito del evento.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-3 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Anggelykids Shows y Eventos. Todos los
          derechos reservados.
        </div>
      </div>
    </footer>
  );
}
