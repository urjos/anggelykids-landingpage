import { PackagesTabs } from "@/components/packages/packages-tabs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paquetes y Precios | Anggelykids Shows y Eventos",
  description:
    "Explora nuestros paquetes de shows infantiles: Clásicos, Huntrix y Estimulación Sensorial. Elige la mejor opción para la fiesta de tu hijo en Lima.",
};

export default function PaquetesPage() {
  return (
    <main>
      <PackagesTabs />
    </main>
  );
}
