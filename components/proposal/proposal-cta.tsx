import Link from "next/link";
import { ArrowRight, CheckCircle2, Heart, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { buildWhatsAppUrl } from "@/lib/utils";

export function ProposalCta() {
  const whatsappUrl = buildWhatsAppUrl(
    "Hola Anggelykids! 👋 Estuve viendo su propuesta y me gustaría cotizar un show ideal para mi fiesta infantil.",
  );

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 gradient-hero">
      {/* Fondo decorativo con gradiente suave */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-angely-purple-50/40 to-angely-pink-50/30" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Contenedor estilo tarjeta claymorphism */}
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl sm:rounded-[36px] border-2 sm:border-[3px] border-angely-purple-200/80 bg-gradient-to-br from-angely-purple-50/90 via-white to-angely-pink-50/90 p-8 sm:p-12 lg:p-14 text-center shadow-playful backdrop-blur-md">
          {/* Orbes de luz decorativos en esquinas */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-angely-yellow-300/35 blur-3xl animate-pulse" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-angely-pink-300/35 blur-3xl animate-pulse [animation-duration:6s]" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-angely-purple-300/20 blur-3xl" />

          {/* Título de alto impacto */}
          <h2 className="relative font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold text-angely-purple-900 tracking-tight leading-tight">
            Encuentra el show ideal para{" "}
            <span className="text-angely-pink-600 underline decoration-angely-yellow-400 decoration-wavy decoration-2 underline-offset-4">
              tu pequeño
            </span>
          </h2>

          {/* Descripción persuasiva */}
          <p className="relative mx-auto mt-4 max-w-2xl text-sm sm:text-base lg:text-lg text-foreground/80 leading-relaxed">
            Descubre nuestras opciones clásicas, temáticas de tendencia y
            estimulación sensorial pensadas para cada edad. ¡Te asesoramos de
            inmediato para hacer de su fiesta un recuerdo mágico!
          </p>

          {/* Botones de acción (CTA) */}
          <div className="relative flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2 mt-4">
            <Button
              asChild
              size="lg"
              variant="default"
              className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-bold shadow-playful hover:shadow-lg transition-all"
            >
              <Link
                href="/paquetes"
                className="flex items-center justify-center gap-2"
              >
                <span>Ver paquetes</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-7 text-sm sm:text-base font-bold border-2 border-angely-purple-300 bg-white/70 hover:bg-angely-purple-100/50 transition-all"
            >
              <Link href="/cotizar">Ver Cotizador</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
