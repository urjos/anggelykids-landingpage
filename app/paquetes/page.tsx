import type { Metadata } from "next";
import { PackagesTabs } from "@/components/packages-tabs";

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
