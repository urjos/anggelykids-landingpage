import Image, { type StaticImageData } from "next/image";
import { Clock, Gift, Sparkles, Car } from "lucide-react";

import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { cn, buildWhatsAppUrl, quotePackageMessage } from "@/lib/utils";
import type { PartyPackage } from "@/constants/packages-data";
import {
  imagesHuntrix,
  imagesHuntrixResources,
  imagesSensoriales,
} from "@/constants/images";

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

  // ---------- HUNTRIX CARD: FAITHFUL TO THE OFFICIAL FLYER DESIGN ----------
  if (pkg.category === "huntrix") {
    const huntrixImage = image1 ?? pkg.image1 ?? imagesHuntrix.huntrixBasico;

    return (
      <div
        className={cn(
          "relative flex flex-col overflow-hidden rounded-[32px] sm:rounded-[42px] border-2 transition-all duration-300 shadow-xl",
          pkg.featured
            ? "border-purple-400 shadow-purple-500/25 ring-2 ring-purple-400/40"
            : "border-purple-200/70 shadow-purple-200/20",
          className,
        )}
        style={{
          background:
            "linear-gradient(180deg, #F8F2FF 0%, #FFF3FA 35%, #F5EEFF 70%, #F1E5FF 100%)",
        }}
      >
        {/* Subtle magical glow / aura */}
        <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_50%_15%,rgba(244,114,182,0.18)_0%,transparent_50%),radial-gradient(circle_at_80%_40%,rgba(168,85,247,0.15)_0%,transparent_45%)]" />

        {/* Featured Ribbon if active */}
        {pkg.featured && (
          <div className="relative z-30 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 py-1.5 text-center text-xs font-black uppercase tracking-wider text-white shadow-sm">
            Paquete Más Elegido
          </div>
        )}

        {/* TOP DECORATIONS: Disco Balls */}
        {/* Top-Left Disco Ball */}
        <div className="absolute -top-7 -left-12 sm:-top-10 sm:-left-10 w-28 h-28 sm:w-44 sm:h-44 md:w-52 md:h-52 pointer-events-none select-none z-10">
          <Image
            src={imagesHuntrixResources.discoBallDecoration}
            alt="Disco ball"
            fill
            className="object-contain -rotate-12 drop-shadow-[0_8px_20px_rgba(147,51,234,0.3)]"
          />
        </div>

        {/* Top-Right Disco Ball */}
        <div className="absolute -top-7 -right-12 sm:-top-10 sm:-right-10 w-28 h-28 sm:w-44 sm:h-44 md:w-52 md:h-52 pointer-events-none select-none z-10">
          <Image
            src={imagesHuntrixResources.discoBallDecoration}
            alt="Disco ball"
            fill
            className="object-contain rotate-12 drop-shadow-[0_8px_20px_rgba(147,51,234,0.3)]"
          />
        </div>

        {/* Decorative Floating Sparks from imagesHuntrixResources */}
        <div className="absolute top-28 right-4 sm:right-10 w-8 h-8 sm:w-12 sm:h-12 pointer-events-none select-none z-10 opacity-75 animate-pulse">
          <Image
            src={imagesHuntrixResources.sparks}
            alt="Sparks"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute top-[48%] left-3 sm:left-6 w-7 h-7 sm:w-10 sm:h-10 pointer-events-none select-none z-10 opacity-70">
          <Image
            src={imagesHuntrixResources.sparks}
            alt="Sparks"
            fill
            className="object-contain -rotate-12"
          />
        </div>

        {/* Floating 3D Music Notes (matching flyer aesthetic) */}
        {/* Note top left */}
        <div className="absolute top-20 sm:top-24 left-10 sm:left-24 w-6 h-6 sm:w-8 sm:h-8 pointer-events-none select-none z-10 opacity-85 rotate-[-15deg]">
          <svg
            viewBox="0 0 32 32"
            fill="none"
            className="w-full h-full drop-shadow-[0_2px_6px_rgba(168,85,247,0.4)]"
          >
            <defs>
              <linearGradient
                id="notePinkPurp1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#E879F9" />
                <stop offset="60%" stopColor="#C084FC" />
                <stop offset="100%" stopColor="#818CF8" />
              </linearGradient>
            </defs>
            <path
              d="M12 24a3 3 0 11-6 0 3 3 0 016 0zm14-4a3 3 0 11-6 0 3 3 0 016 0z"
              fill="url(#notePinkPurp1)"
            />
            <path
              d="M12 24V9l14-4v15M12 9l14-4"
              stroke="url(#notePinkPurp1)"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Note middle */}
        <div className="absolute top-[42%] right-[42%] hidden sm:block size-10 pointer-events-none select-none z-10 opacity-80 rotate-[12deg]">
          <svg
            viewBox="0 0 32 32"
            fill="none"
            className="w-full h-full drop-shadow-[0_2px_6px_rgba(168,85,247,0.4)]"
          >
            <path
              d="M12 24a3 3 0 11-6 0 3 3 0 016 0zm14-4a3 3 0 11-6 0 3 3 0 016 0z"
              fill="url(#notePinkPurp1)"
            />
            <path
              d="M12 24V9l14-4v15M12 9l14-4"
              stroke="url(#notePinkPurp1)"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Note bottom left */}
        <div className="absolute bottom-[28%] left-8 sm:left-14 size-10 pointer-events-none select-none z-10 opacity-80 rotate-[-10deg]">
          <svg
            viewBox="0 0 32 32"
            fill="none"
            className="w-full h-full drop-shadow-[0_2px_6px_rgba(168,85,247,0.4)]"
          >
            <path
              d="M12 24a3 3 0 11-6 0 3 3 0 016 0zm14-4a3 3 0 11-6 0 3 3 0 016 0z"
              fill="url(#notePinkPurp1)"
            />
            <path
              d="M12 24V9l14-4v15M12 9l14-4"
              stroke="url(#notePinkPurp1)"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Note top right */}
        <div className="absolute top-24 sm:top-28 right-14 sm:right-28 w-5 h-5 sm:w-7 sm:h-7 pointer-events-none select-none z-10 opacity-85 rotate-[20deg]">
          <svg
            viewBox="0 0 32 32"
            fill="none"
            className="w-full h-full drop-shadow-[0_2px_6px_rgba(168,85,247,0.4)]"
          >
            <ellipse cx="10" cy="22" rx="4" ry="3" fill="url(#notePinkPurp1)" />
            <path
              d="M14 22V7c0 0 4-1 6 2"
              stroke="url(#notePinkPurp1)"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* CENTER TOP: HUNTRIX TITLE & TIER BADGE */}
        <div className="relative z-20 flex flex-col items-center pt-5 sm:pt-7 px-4">
          <div className="relative w-44 sm:w-60 md:w-72 h-14 sm:h-18 md:h-20 drop-shadow-[0_4px_16px_rgba(168,85,247,0.35)] transition-transform hover:scale-105 duration-300">
            <Image
              src={imagesHuntrixResources.title}
              alt="HUNTRIX"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="mt-1">
            <span className="inline-block px-3 py-0.5 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#7C3AED] bg-white/80 border border-purple-200 shadow-sm">
              {pkg.name}
            </span>
          </div>
        </div>

        {/* MAIN BODY: 2-COLUMN LAYOUT */}
        <div className="relative z-20 p-4 sm:p-6 md:p-8 pt-4 pb-2 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* LEFT COLUMN: Includes & Obsequio */}
            <div className="md:col-span-7 flex flex-col space-y-4">
              {/* Includes List */}
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-[13.5px] text-[#24103B] font-semibold">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="font-bold text-[#7E22CE] text-sm leading-none mt-0.5 select-none shrink-0">
                      •
                    </span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              {/* OBSEQUIO Section */}
              {pkg.gifts && pkg.gifts.length > 0 && (
                <div className="pt-2 sm:pt-3">
                  <h4
                    className="font-heading font-black italic text-base sm:text-lg text-[#9333EA] tracking-wide mb-1.5 flex items-center gap-1.5 select-none"
                    style={{
                      textShadow:
                        "1px 1px 0px rgba(255,255,255,0.8), 0 2px 4px rgba(147,51,234,0.15)",
                    }}
                  >
                    <span>OBSEQUIO:</span>
                  </h4>
                  <ul className="space-y-1 text-xs sm:text-[13.5px] text-[#24103B] font-semibold">
                    {pkg.gifts.map((gift) => (
                      <li key={gift} className="flex items-start gap-2">
                        <span className="font-bold text-[#9333EA] text-sm leading-none mt-0.5 select-none shrink-0">
                          •
                        </span>
                        <span className="leading-snug">{gift}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Courtesy Section if available */}
              {pkg.courtesy && pkg.courtesy.length > 0 && (
                <div className="pt-1">
                  <h4 className="font-heading font-black italic text-xs sm:text-sm text-emerald-600 tracking-wide mb-1 flex items-center gap-1">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Cortesía incluida:</span>
                  </h4>
                  <ul className="space-y-0.5 text-xs text-foreground/80 font-medium">
                    {pkg.courtesy.map((c) => (
                      <li key={c} className="flex items-start gap-1.5">
                        <span className="text-emerald-500 font-bold">•</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: Circular Photo Frame + Overlapping White Price Ribbon Banner */}
            <div className="md:col-span-5 flex flex-col items-center justify-start pt-2 md:pt-4">
              <div className="relative flex flex-col items-center w-full max-w-[280px]">
                {/* CIRCULAR PHOTO FRAME (Apartado para colocar la imagen) */}
                <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-full p-1.5 sm:p-2 bg-gradient-to-tr from-purple-700 via-purple-500 to-fuchsia-500 shadow-[0_12px_32px_rgba(147,51,234,0.35)] transition-transform hover:scale-[1.03] duration-500">
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white bg-purple-100">
                    {huntrixImage ? (
                      <Image
                        src={huntrixImage}
                        alt={`${pkg.name} fotografía`}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-purple-400 p-4 text-center">
                        <Sparkles className="h-8 w-8 mb-1 opacity-60" />
                        <span className="text-xs font-bold">
                          Colocar imagen aquí
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* OVERLAPPING WHITE PRICE RIBBON (Matching flyer: Notch on left, bold pink price) */}
                <div
                  className="relative -mt-8 sm:-mt-10 md:-mt-12 -mr-6 sm:-mr-10 z-20 self-end bg-white py-2 sm:py-2.5 pl-8 sm:pl-10 pr-6 sm:pr-8 shadow-[0_8px_25px_rgba(0,0,0,0.14)] border-r-4 border-pink-400/40"
                  style={{
                    clipPath:
                      "polygon(22px 0%, 100% 0%, 100% 100%, 22px 100%, 0% 50%)",
                  }}
                >
                  <div className="flex items-baseline gap-1 select-none">
                    <span className="font-heading font-black text-2xl sm:text-3xl text-[#E11D9A] tracking-tight">
                      s/
                    </span>
                    <span
                      className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#FF1493] tracking-tight leading-none"
                      style={{
                        textShadow:
                          "2px 2px 0px #fff, -2px -2px 0px #fff, 2px -2px 0px #fff, -2px 2px 0px #fff, 0px 4px 10px rgba(225, 29, 154, 0.35)",
                      }}
                    >
                      {pkg.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM AREA: Huntrix Girls + Details (Duration, Mobility, Phone) + Anggely Kids Logo + WhatsApp CTA */}
        <div className="relative mt-auto pt-6 sm:pt-8 pb-4 sm:pb-5 px-4 sm:px-8">
          {/* Huntrix 3 Girls Background Image */}
          <div className="relative w-full max-w-md sm:max-w-lg mx-auto h-40 sm:h-52 md:h-64 pointer-events-none select-none z-10 -mt-10 sm:-mt-14 md:-mt-18">
            <Image
              src={imagesHuntrixResources.girlsBackground}
              alt="Personajes Huntrix"
              fill
              className="object-contain object-bottom drop-shadow-[0_10px_20px_rgba(0,0,0,0.18)]"
            />
          </div>

          {/* Footer Bar: Details & CTA */}
          <div className="relative z-20 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-purple-200/60 bg-white/50 backdrop-blur-sm rounded-2xl p-3 sm:p-4">
            {/* Info details (Duration, Mobility, Phone) */}
            <div className="flex flex-col space-y-1 text-xs sm:text-sm font-bold text-[#3B155B] w-full sm:w-auto text-left">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#8B5CF6] shrink-0" />
                <span>Duración: {pkg.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-[11px] sm:text-xs text-foreground/60">
                <Car className="h-3.5 w-3.5 text-[#8B5CF6] shrink-0" />
                <span>No incluye movilidad</span>
              </div>
            </div>

            {/* CTA & Logo */}
            <div className="flex items-center justify-center sm:justify-end gap-3 sm:gap-4 w-full sm:w-auto">
              <Button
                asChild
                variant="whatsapp"
                className="text-xs sm:text-sm font-extrabold shadow-md px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="h-4 w-4 mr-1.5" />
                  Cotizar paquete
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---------- FLYER-INSPIRED DESIGN (FOR ALL OTHER PACKAGES) ----------
  const primary = primaryColor ?? pkg.primaryColor ?? "#FF74E9";
  const secondary = secondaryColor ?? pkg.secondaryColor ?? "#FFDE5D";
  const img1 = image1 ?? pkg.image1 ?? imagesSensoriales.sensorial;
  const img2 = image2 ?? pkg.image2 ?? imagesSensoriales.sensorial2;

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
          Más elegido
        </div>
      )}

      {/* Decorative Wave & Bubbles at Top-Right */}
      <div className="absolute top-0 right-0 pointer-events-none z-0 select-none overflow-hidden w-28 sm:w-48 md:w-72 h-20 sm:h-36 md:h-52">
        <svg
          viewBox="0 0 320 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMaxYMin meet"
          className="w-full h-full"
          aria-hidden="true"
        >
          {/* Secondary color wave */}
          <path
            d="M60 0 C120 40 180 20 220 50 C260 80 250 140 320 160 L320 0 Z"
            fill={secondary}
          />
          {/* Floating decorative bubbles in primary color - only shown on desktop to prevent collision with title */}
          <g className="hidden md:inline">
            <circle cx="105" cy="70" r="15" fill={primary} fillOpacity="0.9" />
            <circle cx="65" cy="45" r="11" fill={primary} fillOpacity="0.85" />
            <circle cx="145" cy="30" r="8" fill={primary} fillOpacity="0.8" />
            <circle cx="175" cy="85" r="6" fill={primary} fillOpacity="0.75" />
          </g>
        </svg>
      </div>

      {/* Decorative Wave & Accent at Bottom */}
      <div className="absolute -bottom-1 left-0 right-0 pointer-events-none z-0 select-none overflow-hidden h-60">
        <svg
          viewBox="0 0 600 120"
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
      <div className="relative z-10 p-4 sm:p-6 md:p-8 flex flex-col flex-1">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start flex-1">
          {/* LEFT COLUMN: Title, Includes, Obsequios, Meta */}
          <div className="md:col-span-7 flex flex-col space-y-4">
            {/* Title */}
            <div>
              <h3
                className="font-heading text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight"
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
                  className="font-heading font-black text-3xl sm:text-4xl tracking-tight"
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
                  className="relative w-28 h-28 sm:w-40 sm:h-40 rounded-full overflow-hidden border-[5px] shadow-lg bg-slate-100 shrink-0"
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
                  className="relative w-28 h-28 sm:w-40 sm:h-40 rounded-full overflow-hidden border-[5px] shadow-xl bg-slate-100 shrink-0 z-10"
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
