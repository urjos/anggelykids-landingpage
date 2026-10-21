import Image from "next/image";
import { Facebook, Quote, ThumbsUp } from "lucide-react";

import { cn, formatReviewDate } from "@/lib/utils";
import type { ReviewSource, Review } from "@/constants/reviews";

const AVATAR_STYLES = [
  "bg-angely-purple-100 text-angely-purple-700",
  "bg-angely-pink-100 text-angely-pink-700",
  "bg-angely-yellow-300 text-angely-purple-900",
  "bg-angely-teal-300 text-angely-purple-900",
];

const SOURCE_LABELS: Record<ReviewSource, string> = {
  facebook: "Facebook",
  whatsapp: "WhatsApp",
};

export interface ReviewCardProps {
  review: Review;
  /** `compact` recorta el texto para el teaser del home. */
  variant?: "grid" | "compact";
  className?: string;
}

export function ReviewCard({
  review,
  variant = "grid",
  className,
}: ReviewCardProps) {
  const initials = review.author
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const avatarStyle =
    AVATAR_STYLES[review.author.charCodeAt(0) % AVATAR_STYLES.length];

  return (
    <article
      className={cn(
        "relative flex flex-col gap-4 overflow-hidden rounded-[28px] border-[3px] border-angely-purple-100 bg-white p-5 sm:p-6 shadow-playful motion-safe:transition-transform motion-safe:duration-200 motion-safe:hover:-translate-y-1",
        className,
      )}
    >
      {/* Comilla decorativa */}
      <Quote
        aria-hidden="true"
        className="pointer-events-none absolute -top-2 right-3 h-16 w-16 rotate-180 text-angely-purple-50"
      />

      <div className="relative flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
          <ThumbsUp className="h-3.5 w-3.5" aria-hidden="true" />
          Recomienda
        </span>

        {review.url && (
          <a
            href={review.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver la recomendación de ${review.author} en Facebook`}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-[#1877F2] transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Facebook className="h-4 w-4" aria-hidden="true" />
          </a>
        )}
      </div>

      {review.image && (
        <div
          className={cn(
            "relative w-full overflow-hidden rounded-2xl border-2 border-angely-purple-100 bg-angely-purple-50",
            variant === "compact" ? "aspect-[16/10]" : "aspect-[4/3]",
          )}
        >
          <Image
            src={review.image}
            alt={`Foto de la fiesta de ${review.author}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      )}

      <blockquote className="relative flex-1">
        <p
          className={cn(
            "text-sm leading-relaxed text-foreground/80",
            variant === "compact" && "line-clamp-5",
          )}
        >
          {review.text}
        </p>
      </blockquote>

      <footer className="flex items-center gap-3 border-t border-angely-purple-100/80 pt-4">
        <div className="min-w-0">
          <cite className="block truncate font-heading text-sm font-bold not-italic text-angely-purple-900">
            {review.author}
          </cite>
          <span className="text-xs text-foreground/60">
            {formatReviewDate(review.date)} · {SOURCE_LABELS[review.source]}
          </span>
        </div>
      </footer>
    </article>
  );
}
