"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PackageCard } from "@/components/package-card";
import {
  CATEGORY_LABELS,
  getPackagesByCategory,
  type PackageCategory,
} from "@/lib/packages-data";

const CATEGORIES: PackageCategory[] = ["clasicos", "huntrix", "sensorial"];

export function PackagesTabs() {
  return (
    <section id="paquetes" className="bg-angely-purple-50/50 py-10">
      <div className="container grid gap-5">
        <div className="mx-auto max-w-2xl text-center grid gap-3">
          <h2 className="font-heading text-3xl font-extrabold text-angely-purple-900 sm:text-4xl">
            Nuestros paquetes
          </h2>
          <p className="text-foreground/70">
            Elige la propuesta que mejor se adapte a la edad, temática y
            presupuesto de tu celebración.
          </p>
        </div>

        <Tabs defaultValue="clasicos" className="flex flex-col items-center">
          <TabsList>
            {CATEGORIES.map((cat) => (
              <TabsTrigger key={cat} value={cat}>
                {CATEGORY_LABELS[cat]}
              </TabsTrigger>
            ))}
          </TabsList>

          {CATEGORIES.map((cat) => (
            <TabsContent key={cat} value={cat} className="w-full">
              <div className="relative mx-auto max-w-[340px] sm:max-w-2xl lg:max-w-5xl px-11 sm:px-12 lg:px-14">
                <Carousel
                  opts={{
                    align: "start",
                    loop: false,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-4 py-4">
                    {getPackagesByCategory(cat).map((pkg) => (
                      <CarouselItem
                        key={pkg.id}
                        className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                      >
                        <PackageCard pkg={pkg} className="w-full" />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="-left-10 sm:-left-10 lg:-left-12 h-8 w-8 sm:h-10 sm:w-10" />
                  <CarouselNext className="-right-10 sm:-right-10 lg:-right-12 h-8 w-8 sm:h-10 sm:w-10" />
                </Carousel>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
