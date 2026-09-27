import cloud1 from "@/public/images/resources/cloud.png";
import caritasPintadas from "@/public/images/shows/sensoriales/caritas-pintadas.jpg";
import sensorial from "@/public/images/shows/sensoriales/sensorial.jpg";
import sensorial2 from "@/public/images/shows/sensoriales/752022665_1069148842114577_2203727304296308138_n.jpg";
import sensorial3 from "@/public/images/shows/sensoriales/751938345_1069148715447923_5480943994134357207_n.jpg";
import sensorial4 from "@/public/images/shows/sensoriales/752488614_1069148768781251_3423067352671257950_n.jpg";
import basico from "@/public/images/shows/infantiles/basico.jpg";
import basico2 from "@/public/images/shows/infantiles/basico-2.jpg";
import mifiesta from "@/public/images/shows/infantiles/mi-fiesta.jpg";
import mifiesta2 from "@/public/images/shows/infantiles/mi-fiesta-2.jpg";
import fiestaPremium from "@/public/images/shows/infantiles/fiesta-premium.jpg";
import fiestaPremium2 from "@/public/images/shows/infantiles/fiesta-premium-2.jpg";
import superFiesta from "@/public/images/shows/infantiles/super-fiesta.jpg";
import superFiesta2 from "@/public/images/shows/infantiles/super-fiesta-2.jpg";
import megaFiesta from "@/public/images/shows/infantiles/mega-fiesta.jpg";
import megaFiesta2 from "@/public/images/shows/infantiles/mega-fiesta-2.jpg";
import megaFiestaPremium from "@/public/images/shows/infantiles/mega-fiesta-premium.jpg";
import megaFiestaPremium2 from "@/public/images/shows/infantiles/mega-fiesta-premium-2.jpg";

export const images = {
  cloud1,
  caritasPintadas,
  sensorial,
  sensorial2,
  sensorial3,
  sensorial4,
  basico,
  basico2,
  mifiesta,
  mifiesta2,
  superFiesta,
  superFiesta2,
  megaFiesta,
  megaFiesta2,
  fiestaPremium,
  fiestaPremium2,
  megaFiestaPremium,
  megaFiestaPremium2,
} as const;

export type ImageKey = keyof typeof images;
