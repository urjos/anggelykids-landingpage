import Image, { type StaticImageData } from "next/image";
import { Check, Clock, Gift, Sparkles, Car } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { cn, buildWhatsAppUrl, quotePackageMessage } from "@/lib/utils";
import type { PartyPackage } from "@/constants/packages-data";
import { images } from "@/constants/images";

export interface PackageCardProps {
  pkg: PartyPackage;
  className?: string;
  primaryColor?: string;
  secondaryColor?: string;
  image1?: string | StaticImageData;
  image2?: string | StaticImageData;
}

export function PackageCard({
  pkg,
  className,
  primaryColor,
  secondaryColor,
  image1,
  image2,
}: PackageCardProps) {
  const whatsappUrl = buildWhatsAppUrl(
    quotePackageMessage(pkg.name, pkg.priceLabel),
  );

  // ---------- HUNTRIX EXCEPTION: RETAIN DEDICATED / ORIGINAL DESIGN ----------
  if (pkg.category === "huntrix") {
    return (
      <Card
        className={cn(
          "flex flex-col overflow-hidden transition-all duration-300",
          pkg.featured
            ? "border-2 border-angely-pink-500 shadow-playful-pink"
            : "border-border",
          className,
        )}
      >
        {pkg.featured && (
          <div className="bg-angely-pink-500 py-1.5 text-center text-xs font-extrabold uppercase tracking-wide text-white">
            Más elegido
          </div>
        )}

        <CardHeader className="p-4 sm:p-6 pb-2 sm:pb-2">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-angely-purple-900">
              {pkg.name}
            </h3>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-heading text-2xl sm:text-3xl font-extrabold text-angely-pink-600">
              {pkg.priceLabel}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-foreground/60">
            <Clock className="h-4 w-4" />
            Duración: {pkg.duration}
          </div>
        </CardHeader>

        <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0 pb-2">
          <ul className="space-y-1.5 sm:space-y-2">
            {pkg.includes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-xs sm:text-sm text-foreground/80"
              >
                <Check className="mt-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-emerald-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {pkg.courtesy && pkg.courtesy.length > 0 && (
            <div>
              <Badge variant="success" className="mb-1.5 sm:mb-2 text-xs">
                <Sparkles className="h-3 w-3" />
                Cortesía incluida
              </Badge>
              <ul className="space-y-1">
                {pkg.courtesy.map((item) => (
                  <li
                    key={item}
                    className="text-xs sm:text-sm font-semibold text-emerald-700"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="rounded-2xl bg-angely-purple-50 p-3.5 sm:p-4">
            <div className="mb-1.5 sm:mb-2 flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-angely-purple-700">
              <Gift className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Obsequio
            </div>
            <ul className="space-y-1">
              {pkg.gifts.map((item) => (
                <li
                  key={item}
                  className="text-xs sm:text-sm text-angely-purple-900/80"
                >
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-[11px] sm:text-xs font-semibold text-foreground/50">
            No incluye movilidad
          </p>
        </CardContent>

        <CardFooter className="p-4 sm:p-6 pt-2 pb-5 sm:pb-6">
          <Button asChild variant="whatsapp" className="w-full text-sm">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-4 w-4" />
              Cotizar este paquete
            </a>
          </Button>
        </CardFooter>
      </Card>
    );
  }

  // ---------- FLYER-INSPIRED DESIGN (FOR ALL OTHER PACKAGES) ----------
  const primary = primaryColor ?? pkg.primaryColor ?? "#FF74E9";
  const secondary = secondaryColor ?? pkg.secondaryColor ?? "#FFDE5D";
  const img1 = image1 ?? pkg.image1 ?? images.sensorial;
  const img2 = image2 ?? pkg.image2 ?? images.sensorial2;

  return (
    <div
      className={cn(
        "relative flex flex-col overflow-hidden rounded-[28px] sm:rounded-[36px] bg-white border-2 transition-all duration-300 shadow-md ",
        className,
      )}
      style={{
        borderColor: pkg.featured ? primary : "rgba(226, 232, 240, 0.8)",
      }}
    >
      {/* Featured Ribbon */}
      {pkg.featured && (
        <div
          className="relative z-20 py-1.5 text-center text-xs font-extrabold uppercase tracking-wider text-white shadow-sm"
          style={{ backgroundColor: primary }}
        >
          ⭐ Más elegido
        </div>
      )}

      {/* Decorative Wave & Bubbles at Top-Right */}
      <div className="absolute top-0 right-0 pointer-events-none z-0 select-none overflow-hidden w-44 sm:w-60 md:w-72 h-40 sm:h-52">
        <svg
          viewBox="0 0 320 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
          aria-hidden="true"
        >
          {/* Secondary color wave */}
          <path
            d="M60 0 C120 40 180 20 220 50 C260 80 250 140 320 160 L320 0 Z"
            fill={secondary}
          />
          {/* Floating decorative bubbles in primary color */}
          <circle cx="105" cy="70" r="15" fill={primary} fillOpacity="0.9" />
          <circle cx="65" cy="45" r="11" fill={primary} fillOpacity="0.85" />
          <circle cx="145" cy="30" r="8" fill={primary} fillOpacity="0.8" />
          <circle cx="175" cy="85" r="6" fill={primary} fillOpacity="0.75" />
        </svg>
      </div>

      {/* Decorative Wave & Accent at Bottom */}
      <div className="absolute -bottom-1 left-0 right-0 pointer-events-none z-0 select-none overflow-hidden h-20 sm:h-24 md:h-28">
        <svg
          viewBox="0 0 800 140"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-hidden="true"
        >
          {/* Secondary color accent curve */}
          <path
            d="M580 140 C630 80 710 70 800 100 L800 140 Z"
            fill={secondary}
          />
          {/* Primary color large bottom wave */}
          <path
            d="M0 80 C160 25 310 115 500 65 C620 30 710 80 800 70 L800 140 L0 140 Z"
            fill={primary}
            fillOpacity="0.95"
          />
        </svg>
      </div>

      {/* Card Body */}
      <div className="relative z-10 p-5 sm:p-7 md:p-8 flex flex-col flex-1">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start flex-1">
          {/* LEFT COLUMN: Title, Includes, Obsequios, Meta */}
          <div className="md:col-span-7 flex flex-col space-y-4">
            {/* Title */}
            <div>
              <h3
                className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight"
                style={{
                  color: primary,
                  textShadow:
                    "1px 1px 0px rgba(0,0,0,0.06), 0px 2px 4px rgba(0,0,0,0.04)",
                }}
              >
                {pkg.name}
              </h3>
            </div>

            {/* Mobile-only Price and Circles Display */}
            <div className="flex flex-col items-center gap-4 py-2 md:hidden">
              {/* Price Ribbon */}
              <div
                className="inline-flex items-center justify-center px-6 py-2 rounded-full shadow-md transform -rotate-2 select-none border-2 border-white/70"
                style={{
                  backgroundColor: secondary,
                  boxShadow: "0 6px 16px -2px rgba(0, 0, 0, 0.12)",
                }}
              >
                <span
                  className="font-heading font-black text-2xl sm:text-3xl tracking-tight"
                  style={{
                    color: primary,
                    textShadow:
                      "1px 1px 0px #fff, -1px -1px 0px #fff, 1px -1px 0px #fff, -1px 1px 0px #fff",
                  }}
                >
                  {pkg.priceLabel}
                </span>
              </div>

              {/* Two Circular Photo Frames */}
              <div className="flex items-center justify-center -space-x-4 pt-1">
                <div
                  className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-[5px] shadow-lg bg-slate-100 shrink-0"
                  style={{ borderColor: primary }}
                >
                  <Image
                    src={img1}
                    alt={`${pkg.name} imagen 1`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div
                  className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-[5px] shadow-xl bg-slate-100 shrink-0 z-10"
                  style={{ borderColor: primary }}
                >
                  <Image
                    src={img2}
                    alt={`${pkg.name} imagen 2`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Includes List */}
            <div className="space-y-1.5">
              <ul className="space-y-1.5 text-xs sm:text-sm text-foreground/85">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full shrink-0"
                      style={{ backgroundColor: primary }}
                    />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Obsequio Section */}
            {pkg.gifts && pkg.gifts.length > 0 && (
              <div className="pt-2">
                <div
                  className="font-heading font-black text-sm sm:text-base uppercase tracking-wider flex items-center gap-1.5 mb-1.5"
                  style={{ color: primary }}
                >
                  <Gift className="h-4 w-4" />
                  <span>OBSEQUIO:</span>
                </div>
                <ul className="space-y-1 text-xs sm:text-sm text-foreground/80">
                  {pkg.gifts.map((item, idx) => {
                    const isHighlight = idx === pkg.gifts.length - 1;
                    return (
                      <li key={item} className="flex items-start gap-1.5">
                        <span className="font-bold text-foreground/40">•</span>
                        <span
                          className={isHighlight ? "font-bold italic" : ""}
                          style={isHighlight ? { color: primary } : undefined}
                        >
                          {item}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* Duration and Mobility Details */}
            <div className="pt-2 space-y-1 text-xs sm:text-sm font-semibold text-foreground/70">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-foreground/50" />
                <span>Duración: {pkg.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/50 text-[11px] sm:text-xs">
                <Car className="h-3.5 w-3.5 shrink-0" />
                <span>No incluye movilidad</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-3">
              <Button
                asChild
                variant="whatsapp"
                className="w-full sm:w-auto text-sm font-bold shadow-md px-6 py-2.5"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="h-4 w-4" />
                  Cotizar este paquete
                </a>
              </Button>
            </div>
          </div>

          {/* RIGHT COLUMN (DESKTOP): Cortesía, Price Ribbon, Two Circular Frames */}
          <div className="hidden md:flex md:col-span-5 flex-col items-center justify-start space-y-5">
            {/* Courtesy Cloud */}
            {pkg.courtesy && pkg.courtesy.length > 0 && (
              <div
                className="relative rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 text-white shadow-md w-full max-w-xs transition-transform hover:scale-[1.02]"
                style={{ backgroundColor: primary }}
              >
                {/* Cloud top bubbles */}
                <div
                  className="absolute -top-2 left-6 w-5 h-5 rounded-full"
                  style={{ backgroundColor: primary }}
                />
                <div
                  className="absolute -top-3 left-10 w-6 h-6 rounded-full"
                  style={{ backgroundColor: primary }}
                />
                <div className="relative z-10">
                  <div className="font-heading font-black text-xs sm:text-sm italic flex items-center gap-1.5 mb-1 text-white">
                    <Sparkles className="h-4 w-4 shrink-0" />
                    <span>Cortesía:</span>
                  </div>
                  <ul className="text-xs sm:text-sm font-medium space-y-0.5 text-white/95">
                    {pkg.courtesy.map((item) => (
                      <li key={item} className="flex items-start gap-1">
                        <span>-</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Desktop Price Ribbon */}
            <div
              className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 rounded-full shadow-lg transform -rotate-3 select-none border-2 border-white/70"
              style={{
                backgroundColor: secondary,
                boxShadow: "0 8px 20px -3px rgba(0, 0, 0, 0.15)",
              }}
            >
              <span
                className="font-heading font-black text-3xl lg:text-4xl tracking-tight"
                style={{
                  color: primary,
                  textShadow:
                    "1px 1px 0px #fff, -1px -1px 0px #fff, 1px -1px 0px #fff, -1px 1px 0px #fff",
                }}
              >
                {pkg.priceLabel}
              </span>
            </div>

            {/* Two Circular Photo Frames */}
            <div className="relative flex flex-col items-center pt-2">
              {/* Circle 1 (Top) */}
              <div
                className="relative w-36 h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden border-[6px] shadow-lg bg-slate-100 z-10"
                style={{ borderColor: primary }}
              >
                <Image
                  src={img1}
                  alt={`${pkg.name} imagen 1`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Circle 2 (Bottom, Overlapping) */}
              <div
                className="relative w-36 h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden border-[6px] shadow-xl bg-slate-100 -mt-10 lg:-mt-12 ml-8 lg:ml-10 z-20"
                style={{ borderColor: primary }}
              >
                <Image
                  src={img2}
                  alt={`${pkg.name} imagen 2`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
