import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PackageCard } from "@/components/package-card";
import { CATEGORY_LABELS, getPackagesByCategory, type PackageCategory } from "@/lib/packages-data";

const CATEGORIES: PackageCategory[] = ["clasicos", "huntrix", "sensorial"];

export function PackagesTabs() {
  return (
    <section id="paquetes" className="bg-angely-purple-50/50 py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-extrabold text-angely-purple-900 sm:text-4xl">
            Nuestros paquetes
          </h2>
          <p className="mt-3 text-foreground/70">
            Elige la propuesta que mejor se adapte a la edad, temática y presupuesto de tu
            celebración. Todos los precios están en Soles (S/).
          </p>
        </div>

        <Tabs defaultValue="clasicos" className="mt-12 flex flex-col items-center">
          <TabsList>
            {CATEGORIES.map((cat) => (
              <TabsTrigger key={cat} value={cat}>
                {CATEGORY_LABELS[cat]}
              </TabsTrigger>
            ))}
          </TabsList>

          {CATEGORIES.map((cat) => (
            <TabsContent key={cat} value={cat} className="w-full">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {getPackagesByCategory(cat).map((pkg) => (
                  <PackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
