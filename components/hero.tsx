import { PartyPopper, Sparkles, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { buildWhatsAppUrl } from "@/lib/utils";

export function Hero() {
  const whatsappUrl = buildWhatsAppUrl(
    "Hola Anggelykids! 👋 Quiero cotizar un show para mi fiesta infantil."
  );

  return (
    <section id="inicio" className="gradient-hero relative overflow-hidden pb-20 pt-16 lg:pb-28 lg:pt-24">
      {/* Estrellitas decorativas flotando */}
      <div className="pointer-events-none absolute -left-6 top-16 h-16 w-16 animate-float text-angely-yellow-400">
        <Sparkles className="h-full w-full" />
      </div>
      <div className="pointer-events-none absolute right-4 top-40 h-20 w-20 animate-float text-angely-pink-500 [animation-delay:1.5s]">
        <PartyPopper className="h-full w-full" />
      </div>

      <div className="container relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Badge variant="secondary" className="mb-5">
            <Sparkles className="h-3.5 w-3.5" />
            Shows temáticos y estimulación sensorial en Lima
          </Badge>

          <h1 className="font-heading text-4xl font-extrabold leading-[1.05] text-angely-purple-900 sm:text-5xl lg:text-6xl">
            Fiestas infantiles que se{" "}
            <span className="text-angely-pink-600">bailan</span>,{" "}
            <span className="text-angely-purple-600">brillan</span> y se{" "}
            <span className="text-angely-teal-400">sienten</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-foreground/70">
            Animación didáctica, personajes con vestuario idéntico al original y
            experiencias sensoriales pensadas para cada edad. Tú disfruta la fiesta,
            nosotros ponemos la magia.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" variant="whatsapp">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Cotizar por WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#paquetes">Ver catálogo de paquetes</a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-angely-purple-900">
              <ShieldCheck className="h-5 w-5 text-emerald-500" />
              Animación 100% didáctica y segura
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-angely-purple-900">
              <ShieldCheck className="h-5 w-5 text-emerald-500" />
              Puntualidad garantizada
            </div>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div className="absolute inset-0 rounded-[3rem] bg-white/60 shadow-playful backdrop-blur-sm" />
          <div className="absolute inset-6 flex items-center justify-center rounded-[2.5rem] bg-gradient-to-br from-angely-pink-100 via-angely-purple-100 to-angely-teal-300/40">
            <div className="text-center">
              <p className="font-heading text-7xl font-extrabold text-angely-purple-700">+300</p>
              <p className="mt-2 text-sm font-bold uppercase tracking-wide text-angely-purple-700/70">
                Fiestas felices realizadas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
