import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { FAQS } from "@/constants/faqs";
import { BusinessPolicies } from "./business-policies";

export function Faq() {
  return (
    <section id="faq" className="py-16 sm:py-20">
      <div className="container">
        {/* Preguntas frecuentes */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-extrabold text-angely-purple-900 sm:text-4xl">
            Preguntas frecuentes
          </h2>
          <p className="mt-3 text-foreground/70">
            Todo lo que necesitas saber antes de reservar tu show.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mx-auto mt-10 max-w-2xl space-y-3"
        >
          {FAQS.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Apartado de políticas del negocio */}
        <div className="mt-16 sm:mt-24 border-t border-angely-purple-100/70 pt-16 sm:pt-20">
          <BusinessPolicies />
        </div>
      </div>
    </section>
  );
}
