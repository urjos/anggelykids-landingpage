import { Check, Clock, Gift, Sparkles } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";
import { cn, buildWhatsAppUrl, quotePackageMessage } from "@/lib/utils";
import type { PartyPackage } from "@/constants/packages-data";

export function PackageCard({
  pkg,
  className,
}: {
  pkg: PartyPackage;
  className?: string;
}) {
  const whatsappUrl = buildWhatsAppUrl(
    quotePackageMessage(pkg.name, pkg.priceLabel),
  );

  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden transition-all duration-300",
        pkg.featured
          ? "border-2 border-angely-pink-500 shadow-playful-pink"
          : "border-border",
        className,
      )}
    >
      {pkg.featured && (
        <div className="bg-angely-pink-500 py-1.5 text-center text-xs font-extrabold uppercase tracking-wide text-white">
          Más elegido
        </div>
      )}

      <CardHeader className="p-4 sm:p-6 pb-2 sm:pb-2">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-angely-purple-900">
            {pkg.name}
          </h3>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-heading text-2xl sm:text-3xl font-extrabold text-angely-pink-600">
            {pkg.priceLabel}
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-foreground/60">
          <Clock className="h-4 w-4" />
          Duración: {pkg.duration}
        </div>
      </CardHeader>

      <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6 pt-0 pb-2">
        <ul className="space-y-1.5 sm:space-y-2">
          {pkg.includes.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-xs sm:text-sm text-foreground/80"
            >
              <Check className="mt-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-emerald-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {pkg.courtesy && pkg.courtesy.length > 0 && (
          <div>
            <Badge variant="success" className="mb-1.5 sm:mb-2 text-xs">
              <Sparkles className="h-3 w-3" />
              Cortesía incluida
            </Badge>
            <ul className="space-y-1">
              {pkg.courtesy.map((item) => (
                <li
                  key={item}
                  className="text-xs sm:text-sm font-semibold text-emerald-700"
                >
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="rounded-2xl bg-angely-purple-50 p-3.5 sm:p-4">
          <div className="mb-1.5 sm:mb-2 flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-angely-purple-700">
            <Gift className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Obsequio
          </div>
          <ul className="space-y-1">
            {pkg.gifts.map((item) => (
              <li
                key={item}
                className="text-xs sm:text-sm text-angely-purple-900/80"
              >
                • {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-[11px] sm:text-xs font-semibold text-foreground/50">
          No incluye movilidad
        </p>
      </CardContent>

      <CardFooter className="p-4 sm:p-6 pt-2 pb-5 sm:pb-6">
        <Button asChild variant="whatsapp" className="w-full text-sm">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon className="h-4 w-4" />
            Cotizar este paquete
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
