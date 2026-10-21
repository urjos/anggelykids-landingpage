import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { ReviewsSection } from "@/components/reviews/reviews-section";
import { buildWhatsAppUrl } from "@/lib/utils";
import { REVIEWS } from "@/constants/reviews";

export const metadata: Metadata = {
  title: "Reseñas y Recomendaciones | Anggelykids Shows y Eventos",
  description:
    "Lee las recomendaciones reales que las familias dejan en nuestra página de Facebook después de sus fiestas infantiles con Anggelykids en Lima.",
};

export default function ReviewsPage() {
  const whatsappUrl = buildWhatsAppUrl(
    "Hola Anggelykids! 👋 Vi sus reseñas en la web y quiero cotizar un show para mi fiesta infantil.",
  );

  return (
    <main>
      <ReviewsSection headingLevel="h1" />

      <section className="border-t border-angely-purple-100/50 bg-angely-purple-50/50 py-16">
        <div className="container mx-auto max-w-xl text-center">
          <h2 className="font-heading text-2xl font-extrabold text-angely-purple-900 sm:text-3xl">
            ¿Quieres ser la próxima familia feliz?
          </h2>
          <p className="mt-3 text-sm text-foreground/70">
            Más de {REVIEWS.length} familias ya nos recomendaron. Cuéntanos qué
            sueñas para tu fiesta y armamos el show perfecto para tu pequeño.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" variant="whatsapp">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={24} className="h-6 w-6" />
                Cotizar por WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/paquetes">
                Ver paquetes
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
