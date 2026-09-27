import { Sparkles, Gift, Calendar, Sun, Ghost, Bell } from "lucide-react";
import { SeasonalFeature } from "@/components/packages/seasonal-coming-soon";

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

export const SEASON_PRESETS: Record<string, SeasonDetails> = {
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
    ctaText: "Consultar reservas de Navidad",
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
