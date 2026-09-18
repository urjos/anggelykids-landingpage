import { Check, Clock, Gift, Sparkles, MessageCircle } from "lucide-react";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl, quotePackageMessage } from "@/lib/utils";
import type { PartyPackage } from "@/lib/packages-data";

export function PackageCard({ pkg }: { pkg: PartyPackage }) {
  const whatsappUrl = buildWhatsAppUrl(quotePackageMessage(pkg.name, pkg.priceLabel));

  return (
    <Card
      className={`flex h-full flex-col overflow-hidden ${
        pkg.featured ? "border-2 border-angely-pink-500 shadow-playful-pink" : "border-border"
      }`}
    >
      {pkg.featured && (
        <div className="bg-angely-pink-500 py-1.5 text-center text-xs font-extrabold uppercase tracking-wide text-white">
          Más elegido
        </div>
      )}

      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-xl font-extrabold text-angely-purple-900">{pkg.name}</h3>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="font-heading text-3xl font-extrabold text-angely-pink-600">{pkg.priceLabel}</span>
        </div>
        <div className="flex items-center gap-1.5 text-sm font-semibold text-foreground/60">
          <Clock className="h-4 w-4" />
          Duración: {pkg.duration}
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-4 pt-0">
        <ul className="space-y-2">
          {pkg.includes.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {pkg.courtesy && pkg.courtesy.length > 0 && (
          <div>
            <Badge variant="success" className="mb-2">
              <Sparkles className="h-3 w-3" />
              Cortesía incluida
            </Badge>
            <ul className="space-y-1">
              {pkg.courtesy.map((item) => (
                <li key={item} className="text-sm font-semibold text-emerald-700">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="rounded-2xl bg-angely-purple-50 p-4">
          <div className="mb-2 flex items-center gap-1.5 text-sm font-extrabold text-angely-purple-700">
            <Gift className="h-4 w-4" />
            Obsequio
          </div>
          <ul className="space-y-1">
            {pkg.gifts.map((item) => (
              <li key={item} className="text-sm text-angely-purple-900/80">
                • {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-xs font-semibold text-foreground/50">No incluye movilidad</p>
      </CardContent>

      <CardFooter>
        <Button asChild variant="whatsapp" className="w-full">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" />
            Cotizar este paquete
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
