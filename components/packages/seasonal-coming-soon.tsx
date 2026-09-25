import React from "react";
import {
  Sparkles,
  Gift,
  Calendar,
  Sun,
  Ghost,
  Bell,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { buildWhatsAppUrl, cn } from "@/lib/utils";

export interface SeasonalFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface SeasonDetails {
  badge: string;
  title: string;
  subtitle?: string;
  description: string;
  highlights: SeasonalFeature[];
  ctaText: string;
  whatsappMessage: string;
  badgeClass?: string;
  accentBgClass?: string;
}

const SEASON_PRESETS: Record<string, SeasonDetails> = {
  navideños: {
    badge: "Temporada Navideña",
    title: "¡Próximamente Paquetes Navideños!",
    subtitle: "La magia de la Navidad está por llegar a Anggelykids",
    description:
      "Estamos preparando shows temáticos inolvidables con Papá Noel, duendecillos, villancicos y dinámicas llenas de ilusión para celebrar con tu familia, nido, colegio o empresa.",
    highlights: [
      {
        icon: Gift,
        title: "Personajes Mágicos",
        description: "Papá Noel, duendecillos y vestuarios de ensueño en vivo.",
      },
      {
        icon: Sparkles,
        title: "Dinámicas y Villancicos",
        description:
          "Juegos participativos, canta juegos y hora loca navideña.",
      },
      {
        icon: Calendar,
        title: "Reserva Anticipada",
        description: "Cupos limitados para eventos en noviembre y diciembre.",
      },
    ],
    ctaText: "Consultar reservas de Navidad por WhatsApp",
    whatsappMessage:
      "Hola Anggelykids! 👋 Quisiera información anticipada y consultar disponibilidad para los paquetes navideños 🎄✨",
    badgeClass:
      "bg-emerald-50 text-emerald-700 border-emerald-200/80 shadow-sm",
    accentBgClass:
      "from-emerald-50/40 via-angely-pink-50/30 to-angely-purple-50/30",
  },
  navidad: {
    badge: "🎄 Temporada Navideña",
    title: "¡Próximamente Paquetes Navideños!",
    subtitle: "La magia de la Navidad está por llegar a Anggelykids",
    description:
      "Estamos preparando shows temáticos inolvidables con Papá Noel, duendecillos, villancicos y dinámicas llenas de ilusión para celebrar con tu familia, nido, colegio o empresa.",
    highlights: [
      {
        icon: Gift,
        title: "Personajes Mágicos",
        description: "Papá Noel, duendecillos y vestuarios de ensueño en vivo.",
      },
      {
        icon: Sparkles,
        title: "Dinámicas y Villancicos",
        description:
          "Juegos participativos, canta juegos y hora loca navideña.",
      },
      {
        icon: Calendar,
        title: "Reserva Anticipada",
        description: "Cupos limitados para eventos en noviembre y diciembre.",
      },
    ],
    ctaText: "Consultar reservas de Navidad por WhatsApp",
    whatsappMessage:
      "Hola Anggelykids! 👋 Quisiera información anticipada y consultar disponibilidad para los paquetes navideños 🎄✨",
    badgeClass:
      "bg-emerald-50 text-emerald-700 border-emerald-200/80 shadow-sm",
    accentBgClass:
      "from-emerald-50/40 via-angely-pink-50/30 to-angely-purple-50/30",
  },
  verano: {
    badge: "☀️ Temporada de Verano",
    title: "¡Próximamente Paquetes de Verano!",
    subtitle: "Diversión refrescante y llena de energía",
    description:
      "Prepárate para shows al aire libre con juegos de agua, burbujas gigantes y dinámicas recreativas para que los pequeños disfruten de unas vacaciones inolvidables.",
    highlights: [
      {
        icon: Sun,
        title: "Dinámicas Acuáticas",
        description: "Circuitos refrescantes y seguros para días soleados.",
      },
      {
        icon: Sparkles,
        title: "Burbujas Gigantes",
        description:
          "Espectáculo sensorial de burbujas y encapuchados mágicos.",
      },
      {
        icon: Calendar,
        title: "Vacaciones Útiles",
        description: "Ideal para talleres, nidos y cumpleaños de verano.",
      },
    ],
    ctaText: "Consultar sobre paquetes de verano",
    whatsappMessage:
      "Hola Anggelykids! 👋 Quisiera más detalles sobre las propuestas de verano ☀️💦",
    badgeClass:
      "bg-angely-yellow-300/40 text-amber-900 border-angely-yellow-400/60 shadow-sm",
    accentBgClass:
      "from-amber-50/50 via-angely-yellow-300/20 to-angely-purple-50/30",
  },
  halloween: {
    badge: "🎃 Especial Halloween",
    title: "¡Próximamente Paquetes de Halloween!",
    subtitle: "Magia y diversión dulce y espeluznante",
    description:
      "Una celebración llena de creatividad, disfraces, coreografías divertidas y mini hora loca temática con el toque alegre y tierno de Anggelykids.",
    highlights: [
      {
        icon: Ghost,
        title: "Pasarela y Concursos",
        description: "Premio al mejor disfraz y dinámicas temáticas.",
      },
      {
        icon: Sparkles,
        title: "Mini Hora Loca",
        description: "Música, accesorios festivos y bailes divertidos.",
      },
      {
        icon: Calendar,
        title: "Fechas de Octubre",
        description: "Separa la fecha de tu fiesta con tiempo.",
      },
    ],
    ctaText: "Consultar sobre paquetes de Halloween",
    whatsappMessage:
      "Hola Anggelykids! 👋 Quisiera consultar sobre los paquetes temáticos de Halloween 🎃👻",
    badgeClass: "bg-purple-100 text-purple-900 border-purple-200 shadow-sm",
    accentBgClass: "from-purple-100/40 via-angely-pink-50/30 to-amber-50/20",
  },
  default: {
    badge: "✨ Próximamente",
    title: "¡Nuevas Sorpresas en Camino!",
    subtitle: "Estamos preparando nuevas propuestas temáticas",
    description:
      "Estamos ultimando cada detalle de este apartado para ofrecerte shows mágicos, vestuarios impecables y el mejor entretenimiento para tus hijos.",
    highlights: [
      {
        icon: Sparkles,
        title: "Shows Temáticos",
        description:
          "Animación personalizada según los gustos de tus pequeños.",
      },
      {
        icon: Gift,
        title: "Materiales y Sorpresas",
        description: "Accesorios, juegos y dinámicas adaptadas por edad.",
      },
      {
        icon: Bell,
        title: "Sé el Primero",
        description: "Pide que te avisemos en cuanto esté disponible.",
      },
    ],
    ctaText: "Consultar fechas disponibles por WhatsApp",
    whatsappMessage:
      "Hola Anggelykids! 👋 Quisiera consultar sobre las próximas fechas y novedades 🎉",
    badgeClass:
      "bg-angely-pink-100 text-angely-pink-700 border-angely-pink-200 shadow-sm",
    accentBgClass:
      "from-angely-purple-50/40 via-angely-pink-50/30 to-angely-yellow-300/20",
  },
};

export interface SeasonalComingSoonProps {
  /**
   * Identificador de temporada (ej. "navideños", "navidad", "verano", "halloween").
   * Si no coincide con ninguno, se usa la configuración genérica por defecto.
   */
  season?: string;
  /**
   * Texto de la insignia superior. Sobrescribe el valor por defecto de la temporada.
   */
  badge?: string;
  /**
   * Título principal. Sobrescribe el valor por defecto.
   */
  title?: string;
  /**
   * Subtítulo explicativo. Sobrescribe el valor por defecto.
   */
  subtitle?: string;
  /**
   * Descripción detallada del anuncio de temporada.
   */
  description?: string;
  /**
   * Lista de características o aspectos destacados a mostrar en tarjetas.
   */
  highlights?: SeasonalFeature[];
  /**
   * Texto del botón de acción de WhatsApp.
   */
  ctaText?: string;
  /**
   * Mensaje prellenado enviado a WhatsApp.
   */
  whatsappMessage?: string;
  /**
   * Clases CSS adicionales para el contenedor.
   */
  className?: string;
}

export function SeasonalComingSoon({
  season = "navideños",
  badge,
  title,
  subtitle,
  description,
  highlights,
  ctaText,
  whatsappMessage,
  className,
}: SeasonalComingSoonProps) {
  const normalizedSeason = season.toLowerCase().trim();
  const preset = SEASON_PRESETS[normalizedSeason] || SEASON_PRESETS.default;

  const displayBadge = badge ?? preset.badge;
  const displayTitle = title ?? preset.title;
  const displaySubtitle = subtitle ?? preset.subtitle;
  const displayDescription = description ?? preset.description;
  const displayHighlights = highlights ?? preset.highlights;
  const displayCtaText = ctaText ?? preset.ctaText;
  const displayWhatsappMessage = whatsappMessage ?? preset.whatsappMessage;

  const whatsappUrl = buildWhatsAppUrl(displayWhatsappMessage);

  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-4xl overflow-hidden rounded-3xl border-2 border-angely-purple-200/60 bg-white/95 p-6 sm:p-10 lg:p-12 shadow-playful backdrop-blur-sm text-center",
        className,
      )}
    >
      {/* Fondo con degradado ambiental temático */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br opacity-80",
          preset.accentBgClass ||
            "from-angely-purple-50 via-white to-angely-pink-50",
        )}
      />

      {/* Orbes de luz decorativos */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-angely-yellow-300/30 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-angely-pink-300/30 blur-2xl" />

      {/* Insignia / Badge de temporada */}
      <div className="mb-4 flex items-center justify-center">
        <Badge
          className={cn(
            "gap-1.5 px-4 py-1.5 text-xs sm:text-sm font-extrabold uppercase tracking-wide",
            preset.badgeClass,
          )}
        >
          <Sparkles className="h-3.5 w-3.5 shrink-0" />
          {displayBadge}
        </Badge>
      </div>

      {/* Título y subtítulo */}
      <div className="mx-auto max-w-2xl space-y-2">
        <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-angely-purple-900 tracking-tight">
          {displayTitle}
        </h3>
        {displaySubtitle && (
          <p className="font-semibold text-sm sm:text-base text-angely-pink-600">
            {displaySubtitle}
          </p>
        )}
        <p className="pt-1 text-sm sm:text-base text-foreground/75 leading-relaxed">
          {displayDescription}
        </p>
      </div>

      {/* Cuadrícula de destacados o adelanto de la temporada */}
      {displayHighlights.length > 0 && (
        <div className="my-8 grid grid-cols-1 gap-3.5 sm:grid-cols-3 text-left">
          {displayHighlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-start rounded-2xl border border-angely-purple-100 bg-white/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-angely-pink-300 hover:shadow-md"
              >
                <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-xl bg-angely-purple-100 text-angely-purple-700 transition-colors group-hover:bg-angely-pink-100 group-hover:text-angely-pink-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className="font-heading text-sm sm:text-base font-bold text-angely-purple-900">
                  {item.title}
                </h4>
                <p className="mt-1 text-xs text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      )}

      {/* Llamado a la acción (WhatsApp) */}
      <div className="flex flex-col items-center justify-center gap-3 pt-2">
        <Button
          asChild
          variant="whatsapp"
          size="lg"
          className="text-sm sm:text-base font-bold shadow-lg hover:shadow-xl transition-all"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {displayCtaText}
          </a>
        </Button>
      </div>
    </div>
  );
}
