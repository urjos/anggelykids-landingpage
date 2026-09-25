import cloud1 from "@/public/images/resources/cloud.png";
import caritasPintadas from "@/public/images/shows/sensoriales/caritas-pintadas.jpg";
import sensorial from "@/public/images/shows/sensoriales/sensorial.jpg";
import sensorial2 from "@/public/images/shows/sensoriales/752022665_1069148842114577_2203727304296308138_n.jpg";
import sensorial3 from "@/public/images/shows/sensoriales/751938345_1069148715447923_5480943994134357207_n.jpg";
import sensorial4 from "@/public/images/shows/sensoriales/752488614_1069148768781251_3423067352671257950_n.jpg";

export const images = {
  cloud1,
  caritasPintadas,
  sensorial,
  sensorial2,
  sensorial3,
  sensorial4,
} as const;

export type ImageKey = keyof typeof images;
