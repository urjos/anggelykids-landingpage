import Image from "next/image";
import { Facebook, Instagram, Phone } from "lucide-react";

import { buildWhatsAppUrl } from "@/lib/utils";

export function Footer() {
  const whatsappUrl = buildWhatsAppUrl(
    "Hola Anggelykids! 👋 Quiero más información sobre sus shows y paquetes.",
  );

  return (
    <footer className="bg-angely-purple-900 py-2 text-white">
      <div className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex justify-center md:justify-start items-center">
            <div className="rounded-2xl p-2 shadow-sm inline-block">
              <Image
                src="/logo.png"
                alt="Anggelykids Shows y Eventos"
                width={220}
                height={134}
                className="h-14 sm:h-16 w-auto object-contain"
                quality={95}
              />
            </div>
          </div>
          <p className="mt-4 text-sm text-white/70">
            Shows infantiles temáticos y estimulación sensorial en Lima. Hacemos
            de cada fiesta un recuerdo inolvidable.
          </p>
        </div>

        <div>
          <p className="font-heading text-sm font-extrabold uppercase tracking-wide text-angely-pink-300">
            Contacto
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                +51 957 189 685
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram className="h-4 w-4" />
              <a
                href="https://www.instagram.com/anggelykids/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                @anggelykids
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Facebook className="h-4 w-4" />
              <a
                href="https://www.facebook.com/p/AnggelyKids-Shows-Eventos-100070584128490/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                AnggelyKids Shows &amp; Eventos
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-heading text-sm font-extrabold uppercase tracking-wide text-angely-pink-300">
            Importante
          </p>
          <p className="mt-4 text-sm text-white/70">
            Todos los paquetes tienen duración específica y{" "}
            <span className="font-bold text-white">no incluyen movilidad</span>.
            El costo de traslado se cotiza según el distrito del evento.
          </p>
        </div>
      </div>

      <div className="container mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Anggelykids Shows y Eventos. Todos los
        derechos reservados.
      </div>
    </footer>
  );
}
