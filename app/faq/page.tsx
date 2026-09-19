import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

import { Faq } from "@/components/faq";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Anggelykids Shows y Eventos",
  description:
    "Resuelve todas tus dudas sobre reservas, movilidad, cobertura en Lima y personalización de paquetes para tu fiesta infantil.",
};

export default function FaqPage() {
  const whatsappUrl = buildWhatsAppUrl(
    "Hola Anggelykids! 👋 Tengo una consulta adicional sobre sus shows.",
  );

  return (
    <main>
      <Faq />
      <section className="border-t border-angely-purple-100/50 bg-angely-purple-50/50 py-16">
        <div className="container mx-auto max-w-xl text-center">
          <h3 className="font-heading text-2xl font-extrabold text-angely-purple-900 sm:text-3xl">
            ¿Tienes otra pregunta?
          </h3>
          <p className="mt-3 text-sm text-foreground/70">
            Estamos disponibles por WhatsApp para resolver tus dudas y ayudarte
            a planear el show perfecto.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" variant="whatsapp">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                Escribir al WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/cotizar">Ir al cotizador</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
