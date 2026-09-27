import {
  CalendarCheck,
  CreditCard,
  MapPin,
  Clock,
  ShieldAlert,
  Sparkles,
  Info,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { POLICIES } from "@/constants/policies";
import { VALUE_PROPS } from "@/constants/value-props";
import { Card, CardContent } from "../ui/card";

export function BusinessPolicies() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="text-center">
        <h3 className="font-heading text-2xl font-extrabold text-angely-purple-900 sm:text-3xl">
          Políticas y condiciones del servicio
        </h3>
        <p className="mt-3 text-sm sm:text-base text-foreground/70 max-w-2xl mx-auto">
          Para garantizar la máxima puntualidad, calidad y el despliegue
          profesional que tu fiesta merece, trabajamos bajo pautas claras y
          transparentes:
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:gap-6 sm:grid-cols-2">
        {POLICIES.map((item) => (
          <Card
            key={item.title}
            className="border shadow-sm transition-transform hover:-translate-y-1 mx-auto max-w-lg"
          >
            <CardContent className="flex gap-3 p-4">
              <div className={`flex items-center`}>
                <item.icon className="size-9" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-angely-purple-900">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/70">{item.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Nota institucional */}
      <div className="mt-6 rounded-2xl border-2 border-angely-purple-200/70 bg-angely-purple-50/80 p-4 sm:p-5 flex items-start gap-3">
        <Info className="h-5 w-5 shrink-0 text-angely-purple-700 mt-0.5" />
        <p className="text-xs sm:text-sm text-angely-purple-900/80 leading-relaxed">
          <strong className="text-angely-purple-900 font-extrabold">
            Atención para colegios y empresas:
          </strong>{" "}
          Si requieres coordinar requerimientos específicos de facturación,
          horarios institucionales o eventos masivos, indícanoslo al momento de
          cotizar para adaptar la propuesta técnica.
        </p>
      </div>
    </div>
  );
}
