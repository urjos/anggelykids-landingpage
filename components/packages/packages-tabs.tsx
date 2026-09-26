"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select } from "@/components/ui/select";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { SeasonalComingSoon } from "@/components/packages/seasonal-coming-soon";
import {
  CATEGORY_LABELS,
  getPackagesByCategory,
  type PackageCategory,
} from "@/constants/packages-data";
import { CATEGORIES } from "@/constants/categories";
import { PackageCard } from "./package-card";

export function PackagesTabs() {
  const [activeCategory, setActiveCategory] =
    useState<PackageCategory>("clasicos");

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

        <Tabs
          value={activeCategory}
          onValueChange={(val) => setActiveCategory(val as PackageCategory)}
          className="flex flex-col items-center w-full"
        >
          {/* Selector desplegable en pantallas pequeñas */}
          <div className="w-full max-w-xs sm:hidden">
            <Select
              value={activeCategory}
              onChange={(e) =>
                setActiveCategory(e.target.value as PackageCategory)
              }
              className="font-bold text-angely-purple-900 border-2 border-primary/20 bg-white shadow-sm"
              aria-label="Seleccionar categoría de paquetes"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {CATEGORY_LABELS[cat]}
                </option>
              ))}
            </Select>
          </div>

          {/* Pestañas en pantallas medianas y grandes */}
          <TabsList className="hidden sm:inline-flex">
            {CATEGORIES.map((cat) => (
              <TabsTrigger key={cat} value={cat}>
                {CATEGORY_LABELS[cat]}
              </TabsTrigger>
            ))}
          </TabsList>

          {CATEGORIES.map((cat) => {
            const packages = getPackagesByCategory(cat);
            const isComingSoon = packages.length === 0;

            return (
              <TabsContent key={cat} value={cat} className="w-full">
                {isComingSoon ? (
                  <SeasonalComingSoon season={cat} />
                ) : (
                  <div className="relative mx-auto max-w-[355px] sm:max-w-2xl lg:max-w-4xl px-11 sm:px-12 lg:px-14">
                    <Carousel
                      opts={{
                        align: "start",
                        loop: false,
                      }}
                      className="w-full"
                    >
                      <CarouselContent className="-ml-4 py-4">
                        {packages.map((pkg) => (
                          <CarouselItem
                            key={pkg.id}
                            className="pl-4 basis-full"
                          >
                            <PackageCard pkg={pkg} className="w-full" />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="-left-6 sm:-left-10 lg:-left-12 h-8 w-8 sm:h-10 sm:w-10" />
                      <CarouselNext className="-right-6 sm:-right-10 lg:-right-12 h-8 w-8 sm:h-10 sm:w-10" />
                    </Carousel>
                  </div>
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
