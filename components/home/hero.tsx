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
      className="gradient-hero relative overflow-hidden min-h-[620px] sm:min-h-[680px] lg:min-h-[580px] flex flex-col justify-start lg:justify-center pt-5 sm:pt-8 pb-0 lg:py-20"
    >
      {/* Orbes de luz y color con animación pulsante */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-angely-yellow-300/60 blur-3xl animate-pulse" />
      <div className="pointer-events-none absolute right-0 top-10 h-80 w-80 rounded-full bg-angely-teal-300/50 blur-3xl animate-pulse [animation-duration:5s]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-angely-pink-300/50 blur-3xl animate-pulse [animation-duration:7s]" />

      {/* Carrusel como fondo: mitad vertical en móvil (inferior) y mitad horizontal en computadora (derecha) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 w-full lg:inset-y-0 lg:left-auto lg:right-0 lg:h-full lg:w-1/2 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_15%)] lg:[mask-image:linear-gradient(to_right,transparent_0%,black_25%)]">
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
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-angely-purple-900/40 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      <div className="container relative z-10 pt-1 sm:pt-4">
        <div className="max-w-2xl lg:max-w-xl">
          <Badge
            variant="secondary"
            className="mb-2 sm:mb-4 text-xs sm:text-sm"
          >
            Shows temáticos y sensoriales en Lima
          </Badge>

          <h1 className="font-heading text-3xl lg:text-5xl font-extrabold leading-tight text-angely-purple-900">
            Fiestas infantiles que se{" "}
            <span className="text-angely-pink-600">bailan</span>,{" "}
            <span className="text-angely-purple-600">brillan</span> y se{" "}
            <span className="text-angely-yellow-400">sienten</span>
          </h1>

          <p className="mt-2.5 sm:mt-4 max-w-xl text-xs sm:text-sm lg:text-base text-foreground/80 leading-relaxed">
            Animación didáctica, personajes con vestuario idéntico al original y
            experiencias sensoriales pensadas para cada edad. Tú disfruta la
            fiesta, nosotros ponemos la magia.
          </p>

          <div className="mt-3.5 sm:mt-6 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="default"
              variant="outline"
              className="w-full sm:w-auto bg-anggely-purple-400 backdrop-blur-xs  text-angely-purple-900 border-2 border-angely-purple-600 font-bold shadow-xs hover:text-angely-purple-950 sm:h-12 sm:px-6"
            >
              <Link href="/paquetes">Ver catálogo de paquetes</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
