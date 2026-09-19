import type { Metadata } from "next";
import { QuickQuoteForm } from "@/components/quick-quote-form";

export const metadata: Metadata = {
  title: "Cotizador Rápido | Anggelykids Shows y Eventos",
  description:
    "Cotiza tu show infantil en segundos. Elige tu temática, fecha y distrito para recibir una propuesta personalizada vía WhatsApp.",
};

export default function CotizarPage() {
  return (
    <main>
      <QuickQuoteForm />
    </main>
  );
}
