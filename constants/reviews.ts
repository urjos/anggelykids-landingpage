/**
 * Recomendaciones de Facebook (Anggelykids).
 *
 * Facebook reemplazó las reseñas de 1–5 estrellas por "Recomendaciones"
 * (sí/no + texto) en 2018, por eso la UI no muestra estrellas: muestra la
 * etiqueta "Recomienda" y el texto como protagonista.
 *
 * Fuente: `reviews-facebook.txt` (volcado manual de la pestaña Reseñas de la
 * página). Para agregar una recomendación, añadir un objeto a `REVIEWS`.
 * Marcar `featured: true` en las que se quieran destacar en el home.
 */

import { imagesReviews, type ReviewImage } from "@/constants/images";

export type ReviewSource = "facebook" | "whatsapp";

export interface Review {
  id: string;
  /** Primer nombre + inicial, por privacidad (ej. "Denisse M."). */
  author: string;
  /** Fecha ISO (YYYY-MM-DD) de la recomendación en Facebook. */
  date: string;
  /** Texto literal del cliente. */
  text: string;
  source: ReviewSource;
  /** Permalink de la recomendación, si existe. */
  url?: string;
  /** Foto opcional de la fiesta; si falta, la tarjeta no muestra imagen. */
  image?: ReviewImage;
  /** Marca la recomendación como destacada para el teaser del home. */
  featured?: boolean;
  /** Por defecto se asume que recomienda. */
  recommended?: boolean;
}

export const FACEBOOK_PAGE_URL =
  "https://www.facebook.com/p/AnggelyKids-Shows-Eventos-100070584128490/";

export const FACEBOOK_REVIEWS_URL =
  "https://www.facebook.com/profile.php?id=100070584128490&sk=reviews";

export const REVIEWS: Review[] = [
  {
    id: "denisse-m",
    author: "Denisse M.",
    date: "2026-03-21",
    text: "Su show fue muy bonito, el vestuario de la animadora fue hermoso y todos los juegos super divertidos. Además los jóvenes de apoyo estuvieron atentos en todo momento. Excelente animación. Los super recomiendo.",
    source: "facebook",
    url: "https://www.facebook.com/share/p/1C9cDGKykt/",
    featured: true,
  },
  {
    id: "shirley-q",
    author: "Shirley Q.",
    date: "2026-02-14",
    text: "Buenos días, agradecerle a Anggely por tremendo show brindado en el cumpleaños de mi hijo! Estuvo muy bonito, todos disfrutaron mucho. La atención brindada por todo el elenco es de mucha empatía. Simplemente… se disfrutó! 😊",
    source: "facebook",
    url: "https://www.facebook.com/share/p/14uWDXH3521/",
    featured: true,
  },
  {
    id: "jhosy-s",
    author: "Jhosy S.",
    date: "2025-07-10",
    text: "Show muy bonito y de acordé a la edad de los niños, divertidísimo.",
    source: "facebook",
    url: "https://www.facebook.com/share/p/1D4m9PCSSF/",
    image: imagesReviews.jhosyS,
  },
  {
    id: "carolina-v",
    author: "Carolina V.",
    date: "2024-11-23",
    text: "Excelente show. Super recomendado! para pequeños y grandes. ⭐️",
    source: "facebook",
    url: "https://www.facebook.com/share/p/19Wm568n15/",
  },
  {
    id: "geraldine-r",
    author: "Geraldine R.",
    date: "2024-11-03",
    text: "Muy puntuales, el show muy bonito super didáctico con los niños, super recomendado ☺️☺️☺️ Las caritas pintadas fue lo máximo, todos los niños estuvieron contentos 🫶",
    source: "facebook",
    url: "https://www.facebook.com/share/p/1J7rfKETrC/",
    image: imagesReviews.geraldineR,
    featured: true,
  },
  {
    id: "gloria-a",
    author: "Gloria A.",
    date: "2024-09-20",
    text: "Me encanto el show, recomendado.",
    source: "facebook",
    url: "https://www.facebook.com/share/p/1KFEWUSPyc/",
  },
  {
    id: "esmila-m",
    author: "Esmila M.",
    date: "2024-08-05",
    text: "Super puntuales, divertidos, respetuosos, lo recomiendo x 1000 🎊🎉🤗",
    source: "facebook",
    url: "https://www.facebook.com/share/p/1MBazWAmcX/",
  },
  {
    id: "aleli-m",
    author: "Aleli M.",
    date: "2024-08-04",
    text: "Todo muy bonito 😍 quedé encantada con el show, mi bebito lo disfrutó muchísimo 🥳",
    source: "facebook",
    url: "https://www.facebook.com/share/p/19tiLMoVFP/",
  },
  {
    id: "luna-m",
    author: "Luna M.",
    date: "2024-07-24",
    text: "Excelente show, muy divertido 👏",
    source: "facebook",
    url: "https://www.facebook.com/share/p/1E1rWg5ZCb/",
    image: imagesReviews.lunaM,
  },
  {
    id: "thais-v",
    author: "Thais V.",
    date: "2024-07-14",
    text: "Super recomendado, juegos muy didáctico y de acorde a la edad, puntuales y sobre todo mucho carisma 🥳",
    source: "facebook",
    url: "https://www.facebook.com/share/p/18NCqdfbSY/",
  },
  {
    id: "sele-v",
    author: "Sele V.",
    date: "2024-05-29",
    text: "100% Recomendable. Un buen show 🥰 y muy buena organización 💖",
    source: "facebook",
    url: "https://www.facebook.com/share/p/1QM6tkNmhH/",
  },
  {
    id: "gladys-c",
    author: "Gladys C.",
    date: "2024-05-23",
    text: "Recomiendo su show 100%: divertido, su puntualidad y carisma con los peques y los papis excelente.......",
    source: "facebook",
    url: "https://www.facebook.com/share/p/1DZVe7wEst/",
  },
  {
    id: "gladys-e",
    author: "Gladys E.",
    date: "2024-05-21",
    text: "Un maravilloso show super dinámico y juegos muy entretenidos para los niños, la animadora muy carismática y con mucho potencial... MUY SATISFECHA 🥰",
    source: "facebook",
    url: "https://www.facebook.com/share/p/1CC7Z16y6i/",
    image: imagesReviews.gladysE,
  },
  {
    id: "dajaida-b",
    author: "Dajaida B.",
    date: "2017-11-27",
    text: "Genial, super divertido, puntual, me encanto, recomendado 100 por 100.",
    source: "facebook",
    url: "https://www.facebook.com/share/p/19gFzur75f/",
  },
];

export const FEATURED_REVIEWS = REVIEWS.filter((review) => review.featured);

export const RECOMMENDED_PERCENTAGE = Math.round(
  (REVIEWS.filter((review) => review.recommended !== false).length /
    REVIEWS.length) *
    100,
);
