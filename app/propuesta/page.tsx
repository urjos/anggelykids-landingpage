import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { ValueProps } from "@/components/value-props";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Por qué elegirnos | Anggelykids Shows y Eventos",
  description:
    "Conoce nuestra propuesta de valor: animación didáctica, puntualidad garantizada, caracterización fiel y estimulación sensorial para fiestas infantiles en Lima.",
};

export default function PropuestaPage() {
  return (
    <div>
      <ValueProps />
      <section className="border-t border-angely-purple-100/50 bg-angely-purple-50/50 py-16">
        <div className="container mx-auto max-w-xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-angely-pink-100 px-4 py-1.5 text-xs font-bold text-angely-pink-700">
            <Sparkles className="h-3.5 w-3.5" />
            ¿Listos para celebrar?
          </div>
          <h3 className="font-heading text-2xl font-extrabold text-angely-purple-900 sm:text-3xl">
            Encuentra el show ideal para tu pequeño
          </h3>
          <p className="mt-3 text-sm text-foreground/70">
            Descubre nuestras opciones clásicas, temáticas de tendencia y
            estimulación sensorial pensadas para cada edad.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" variant="default">
              <Link href="/paquetes" className="flex items-center gap-2">
                Ver paquetes <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/cotizar">Cotizar ahora</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
