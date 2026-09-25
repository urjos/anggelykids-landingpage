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

export function BusinessPolicies() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="text-center">
        <Badge variant="secondary" className="mb-3">
          Transparencia y Garantía
        </Badge>
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
        {POLICIES.map((policy) => {
          const Icon = policy.icon;
          return (
            <div
              key={policy.title}
              className="flex flex-col justify-between rounded-3xl border-2 border-angely-purple-100/80 bg-white p-5 sm:p-6 shadow-sm hover:border-angely-purple-300 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl border-2 ${policy.accentColor}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-angely-purple-700 bg-angely-purple-50 px-2.5 py-1 rounded-full border border-angely-purple-100">
                    {policy.badge}
                  </span>
                </div>
                <h4 className="font-heading text-lg font-extrabold text-angely-purple-900">
                  {policy.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-foreground/75 leading-relaxed">
                  {policy.description}
                </p>
              </div>
            </div>
          );
        })}

        {/* Tarjeta destacada de respaldo */}
        <div className="flex flex-col justify-center rounded-3xl border-2 border-dashed border-angely-purple-300 bg-gradient-to-br from-angely-purple-50 via-angely-pink-50/50 to-white p-5 sm:p-6 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-angely-pink-500 text-white shadow-xs">
              <Sparkles className="h-4 w-4" />
            </div>
            <h4 className="font-heading text-base font-extrabold text-angely-purple-900">
              Más de 20 años de experiencia
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
            Nuestro equipo entre animadoras, personajes y sonidistas cuenta con
            amplia trayectoria en Lima y provincias. ¡Tú solo encárgate de
            disfrutar el día!
          </p>
        </div>
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
