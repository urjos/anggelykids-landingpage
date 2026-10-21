import { Facebook, ThumbsUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FACEBOOK_REVIEWS_URL,
  RECOMMENDED_PERCENTAGE,
  REVIEWS,
} from "@/constants/reviews";
import { ReviewCard } from "./review-card";

export interface ReviewsSectionProps {
  /** La página /resenas usa h1; el teaser del home usa h2. */
  headingLevel?: "h1" | "h2";
}

export function ReviewsSection({ headingLevel = "h2" }: ReviewsSectionProps) {
  const Heading = headingLevel;

  return (
    <section id="resenas" className="py-10 sm:py-16">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Heading className="font-heading text-4xl font-extrabold text-angely-purple-900 sm:text-5xl">
            Familias que ya vivieron la experiencia Anggelykids
          </Heading>

          <p className="mt-3 text-sm text-foreground/70 sm:text-base">
            Cada recomendación la dejó una familia real en nuestra página de
            Facebook, después de su fiesta. Sin filtros ni edición.
          </p>
        </div>

        {/* Resumen de confianza */}
        <div className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-4 rounded-[28px] border-[3px] border-angely-purple-100 bg-white px-6 py-5 shadow-playful">
          <div className="text-center">
            <p className="font-heading text-3xl font-extrabold text-angely-purple-700">
              {REVIEWS.length}
            </p>
            <p className="text-xs font-bold uppercase tracking-wide text-foreground/60">
              Recomendaciones
            </p>
          </div>

          <div
            aria-hidden="true"
            className="hidden h-10 w-px bg-angely-purple-100 sm:block"
          />

          <div className="text-center">
            <p className="font-heading text-3xl font-extrabold text-emerald-600">
              {RECOMMENDED_PERCENTAGE}%
            </p>
            <p className="text-xs font-bold uppercase tracking-wide text-foreground/60">
              Lo recomienda
            </p>
          </div>

          <div
            aria-hidden="true"
            className="hidden h-10 w-px bg-angely-purple-100 sm:block"
          />

          <a
            href={FACEBOOK_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-2 rounded-full px-3 py-2 text-sm font-bold text-[#1877F2] transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Facebook className="h-4 w-4" aria-hidden="true" />
            Página oficial
          </a>
        </div>

        {/* Muro de recomendaciones */}
        <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {REVIEWS.map((review) => (
            <div key={review.id} className="mb-6 break-inside-avoid">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full border-2 border-angely-purple-300 bg-white/70 font-bold hover:bg-angely-purple-100/50 sm:w-auto"
          >
            <a
              href={FACEBOOK_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-5 w-5" aria-hidden="true" />
              Ver todas las recomendaciones en Facebook
            </a>
          </Button>
          <p className="text-xs text-foreground/50">
            Se abren en una pestaña nueva, en nuestra página oficial de
            Facebook.
          </p>
        </div>
      </div>
    </section>
  );
}
