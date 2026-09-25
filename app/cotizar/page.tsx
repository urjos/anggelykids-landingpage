import { QuickQuoteForm } from "@/components/quoter/quick-quote-form";
import type { Metadata } from "next";

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
