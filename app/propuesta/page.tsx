import type { Metadata } from "next";

import { ValueProps } from "@/components/proposal/value-props";
import { ProposalCta } from "@/components/proposal/proposal-cta";

export const metadata: Metadata = {
  title: "Por qué elegirnos | Anggelykids Shows y Eventos",
  description:
    "Conoce nuestra propuesta de valor: animación didáctica, puntualidad garantizada, caracterización fiel y estimulación sensorial para fiestas infantiles en Lima.",
};

export default function PropuestaPage() {
  return (
    <main>
      <ValueProps />
      <ProposalCta />
    </main>
  );
}
