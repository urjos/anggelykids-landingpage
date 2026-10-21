import Link from "next/link";
import { ArrowRight, Facebook } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  FACEBOOK_REVIEWS_URL,
  FEATURED_REVIEWS,
  REVIEWS,
} from "@/constants/reviews";
import { ReviewCard } from "./review-card";

export function ReviewsTeaser() {
  if (FEATURED_REVIEWS.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-angely-purple-50/50 to-white py-14 sm:py-16">
      {/* Orbes decorativos suaves */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-angely-pink-100/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-angely-teal-300/25 blur-3xl"
      />

      <div className="container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-extrabold text-angely-purple-900 sm:text-4xl">
            Lo que dicen las familias
          </h2>
          <p className="mt-3 text-sm text-foreground/70 sm:text-base">
            {REVIEWS.length} recomendaciones reales en nuestra página de
            Facebook. Estas son algunas de ellas.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} variant="compact" />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg" className="font-bold">
            <Link href="/resenas">
              Leer las {REVIEWS.length} reseñas
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-angely-purple-300 bg-white/70 font-bold hover:bg-angely-purple-100/50"
          >
            <a
              href={FACEBOOK_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-5 w-5" aria-hidden="true" />
              Ver en Facebook
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
