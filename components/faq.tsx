import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  {
    question: "¿Cómo reservo mi fecha?",
    answer:
      "Escríbenos por WhatsApp al 957 189 685 con la fecha, el distrito y el paquete de tu interés. Confirmamos disponibilidad y te indicamos el proceso de reserva con un adelanto.",
  },
  {
    question: "¿La movilidad está incluida en el precio?",
    answer:
      "No, ningún paquete incluye movilidad. El costo de traslado se cotiza aparte según el distrito del evento.",
  },
  {
    question: "¿En qué zonas de Lima trabajan?",
    answer:
      "Cubrimos Lima Metropolitana. Cuéntanos tu distrito al cotizar y te confirmamos cobertura y costo de movilidad.",
  },
  {
    question: "¿Necesito adaptar el espacio para el show?",
    answer:
      "Nuestro equipo se adapta a espacios interiores y exteriores. Para los paquetes sensoriales recomendamos un área despejada de al menos 3x3 metros; nosotros llevamos piso y materiales para armar la dinámica.",
  },
  {
    question: "¿Puedo personalizar un paquete?",
    answer:
      "Sí, muchos elementos (personajes, bandejas sensoriales, horas extra) se pueden ajustar. Cuéntanos qué necesitas al cotizar y armamos una propuesta a la medida.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-extrabold text-angely-purple-900 sm:text-4xl">
            Preguntas frecuentes
          </h2>
          <p className="mt-3 text-foreground/70">
            Todo lo que necesitas saber antes de reservar tu show.
          </p>
        </div>

        <Accordion type="single" collapsible className="mx-auto mt-10 max-w-2xl space-y-3">
          {FAQS.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
