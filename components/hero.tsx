"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { buildWhatsAppUrl } from "@/lib/utils";

const heroSlides = [
  {
    src: "/images/caritas-pintadas.jpg",
    title: "Caritas Pintadas Artísticas",
  },
  {
    src: "/images/sensorial.jpg",
    title: "Estimulación Sensorial Didáctica",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const whatsappUrl = buildWhatsAppUrl(
    "Hola Anggelykids! 👋 Quiero cotizar un show para mi fiesta infantil.",
  );

  return (
    <section
      id="inicio"
      className="gradient-hero relative overflow-hidden pb-16 pt-12 lg:pb-24 lg:pt-20"
    >
      {/* Orbes de luz y color con animación pulsante */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-angely-yellow-300/60 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-angely-teal-300/50 blur-3xl animate-pulse [animation-duration:5s]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-angely-pink-300/50 blur-3xl animate-pulse [animation-duration:7s]" />

      <div className="container relative z-10 flex flex-col items-start gap-8">
        <div className="max-w-3xl">
          <Badge variant="secondary" className="mb-4">
            Shows temáticos y sensoriales en Lima
          </Badge>

          <h1 className="font-heading text-4xl font-extrabold leading-[1.08] text-angely-purple-900 sm:text-5xl lg:text-6xl">
            Fiestas infantiles que se{" "}
            <span className="text-angely-pink-600">bailan</span>,{" "}
            <span className="text-angely-purple-600">brillan</span> y se{" "}
            <span className="text-angely-teal-400">sienten</span>
          </h1>

          <p className="mt-5 max-w-xl text-base sm:text-lg text-foreground/70">
            Animación didáctica, personajes con vestuario idéntico al original y
            experiencias sensoriales pensadas para cada edad. Tú disfruta la
            fiesta, nosotros ponemos la magia.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="whatsapp">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Cotizar por WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/paquetes">Ver catálogo de paquetes</Link>
            </Button>
          </div>
        </div>

        {/* Carrusel integrado ocupando todo el ancho */}
        <div className="w-full mt-4 sm:mt-6">
          <div className="relative w-full overflow-hidden rounded-3xl shadow-playful backdrop-blur-sm">
            <div className="relative h-60 sm:h-72 lg:h-80 w-full overflow-hidden">
              {heroSlides.map((slide, index) => (
                <div
                  key={slide.src}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-105 pointer-events-none"
                  } transition-all duration-700`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    className="object-cover object-center"
                    sizes="100vw"
                  />
                  {/* Fusión suave simulando integrarse con el fondo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-angely-purple-900/60 via-transparent to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
