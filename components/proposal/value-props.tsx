import { Card, CardContent } from "@/components/ui/card";
import { VALUE_PROPS } from "@/constants/value-props";
import { LightOrbs } from "../ui/light-orbs";

export function ValueProps() {
  return (
    <section id="propuesta" className="py-20">
      <LightOrbs />
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-extrabold text-angely-purple-900 sm:text-4xl">
            ¿Por qué elegir Anggelykids?
          </h2>
          <p className="mt-3 text-foreground/70">
            Más de una década haciendo que cada cumpleaños sea inolvidable, con
            cuidado en cada detalle.
          </p>
          <div className="flex-row">
            <div className="relative mx-auto p-40 w-full max-w-md">
              <div className="absolute inset-6 flex items-center justify-center rounded-xl bg-gradient-to-br from-angely-pink-100 via-angely-purple-100 to-angely-teal-300/40">
                <div className="text-center">
                  <p className="font-heading text-7xl font-extrabold text-angely-purple-700">
                    +400
                  </p>
                  <p className="mt-2 text-sm font-bold uppercase tracking-wide text-angely-purple-700/70">
                    Fiestas felices realizadas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {VALUE_PROPS.map((item) => (
            <Card
              key={item.title}
              className="border shadow-sm transition-transform hover:-translate-y-1 mx-auto max-w-lg"
            >
              <CardContent className="flex gap-3 p-4">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl`}
                >
                  <item.icon className="size-9" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-angely-purple-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
