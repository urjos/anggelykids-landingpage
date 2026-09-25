import cloud1 from "@/public/images/resources/cloud.png";

export const images = {
  cloud1,
} as const;

export type ImageKey = keyof typeof images;
