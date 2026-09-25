"use client";

import { useState, type FormEvent } from "react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/ui/form-error";
import { PACKAGES } from "@/constants/packages-data";
import { buildWhatsAppUrl, cn } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon";

function formatPhoneNumber(value: string) {
  let digits = value.replace(/\D/g, "");
  if (digits.startsWith("51") && digits.length > 9) {
    digits = digits.slice(2);
  }
  digits = digits.slice(0, 9);

  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)} ${digits.slice(3)}`;
  return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
}

export function QuickQuoteForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [date, setDate] = useState("");
  const [district, setDistrict] = useState("");
  const [minAge, setMinAge] = useState(3);
  const [maxAge, setMaxAge] = useState(7);
  const [childrenCount, setChildrenCount] = useState("15 a 25 niños");
  const [packageId, setPackageId] = useState(PACKAGES[0].id);

  const phoneDigits = phone.replace(/\D/g, "");
  const phoneError =
    phoneTouched && phoneDigits.length < 9
      ? "Ingresa un número válido de al menos 9 dígitos."
      : "";

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setPhoneTouched(true);

    if (phoneDigits.length < 9) {
      return;
    }

    const selectedPackage = PACKAGES.find((p) => p.id === packageId);

    const ageRangeText =
      minAge === maxAge
        ? `${minAge} ${minAge === 1 ? "año" : "años"}`
        : `${minAge} a ${maxAge} años`;

    const message = [
      "Hola Anggelykids! 👋 Quiero solicitar una cotización:",
      `• Nombre: ${name || "-"}`,
      `• Teléfono: ${phone || "-"}`,
      `• Fecha del evento: ${date || "-"}`,
      `• Distrito: ${district || "-"}`,
      `• Rango de edad: ${ageRangeText}`,
      `• Cantidad de niños: ${childrenCount || "-"}`,
      `• Paquete de interés: ${selectedPackage ? `${selectedPackage.name} (${selectedPackage.priceLabel})` : "-"}`,
    ].join("\n");

    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="cotizar" className="py-12 sm:py-16 md:py-20 pb-20 sm:pb-24">
      <div className="container px-3.5 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-2xl sm:rounded-3xl p-0.5 sm:p-1 shadow-lg">
          <div className="rounded-[calc(1rem-2px)] sm:rounded-[calc(1.5rem-4px)] bg-white p-4 sm:p-8 md:p-10">
            <div className="mb-6 sm:mb-8 text-center">
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-angely-purple-900">
                Cotizador rápido
              </h2>
              <p className="mt-2 text-xs sm:text-sm md:text-base text-foreground/70">
                Completa tus datos y te enviamos la cotización directo a
                WhatsApp.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid gap-3.5 sm:gap-5 sm:grid-cols-2"
            >
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-xs sm:text-sm">
                  Nombre
                </Label>
                <Input
                  id="name"
                  placeholder="Tu nombre completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-xs sm:text-sm">
                  Teléfono
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="9XX XXX XXX"
                  value={phone}
                  onChange={(e) => {
                    const formatted = formatPhoneNumber(e.target.value);
                    setPhone(formatted);
                    if (
                      phoneTouched &&
                      formatted.replace(/\D/g, "").length >= 9
                    ) {
                      setPhoneTouched(true);
                    }
                  }}
                  onBlur={() => setPhoneTouched(true)}
                  className={
                    phoneError
                      ? "border-rose-400 focus-visible:ring-rose-400"
                      : ""
                  }
                  required
                />
                <FormError message={phoneError} />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="date" className="text-xs sm:text-sm">
                  Fecha del evento
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="district" className="text-xs sm:text-sm">
                  Distrito
                </Label>
                <Input
                  id="district"
                  placeholder="Ej. Surco, San Miguel..."
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  required
                />
              </div>

              {/* Rango de edad (0 a 15 años) */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="min-age" className="text-xs sm:text-sm">
                    Rango de edad
                  </Label>
                  <span className="text-[11px] font-bold text-angely-pink-600 bg-angely-pink-50 border border-angely-pink-200/60 px-2 py-0.5 rounded-full">
                    {minAge === maxAge
                      ? `${minAge} ${minAge === 1 ? "año" : "años"}`
                      : `${minAge} a ${maxAge} años`}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <span className="text-[11px] text-foreground/60 font-medium block">
                      Mínimo
                    </span>
                    <Select
                      id="min-age"
                      value={minAge.toString()}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        setMinAge(val);
                        if (val > maxAge) setMaxAge(val);
                      }}
                      aria-label="Edad mínima"
                    >
                      {Array.from({ length: 16 }, (_, i) => (
                        <option key={i} value={i}>
                          {i === 0 ? "0 años (Bebés)" : `${i} ${i === 1 ? "año" : "años"}`}
                        </option>
                      ))}
                    </Select>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] text-foreground/60 font-medium block">
                      Máximo
                    </span>
                    <Select
                      id="max-age"
                      value={maxAge.toString()}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        setMaxAge(val);
                        if (val < minAge) setMinAge(val);
                      }}
                      aria-label="Edad máxima"
                    >
                      {Array.from({ length: 16 }, (_, i) => (
                        <option key={i} value={i}>
                          {i === 0 ? "0 años (Bebés)" : `${i} ${i === 1 ? "año" : "años"}`}
                        </option>
                      ))}
                    </Select>
                  </div>
                </div>

                {/* Acceso rápido a rangos frecuentes */}
                <div className="flex flex-wrap items-center gap-1 pt-1">
                  <span className="text-[10px] text-foreground/50 mr-0.5">Rápido:</span>
                  {[
                    { label: "1 a 3", min: 1, max: 3 },
                    { label: "4 a 7", min: 4, max: 7 },
                    { label: "8 a 12", min: 8, max: 12 },
                    { label: "0 a 15", min: 0, max: 15 },
                  ].map((p) => {
                    const isSelected = minAge === p.min && maxAge === p.max;
                    return (
                      <button
                        key={p.label}
                        type="button"
                        onClick={() => {
                          setMinAge(p.min);
                          setMaxAge(p.max);
                        }}
                        className={cn(
                          "text-[10px] px-2 py-0.5 rounded-full border transition-all",
                          isSelected
                            ? "bg-angely-purple-700 text-white border-angely-purple-700 font-bold shadow-xs"
                            : "bg-angely-purple-50/60 text-angely-purple-900 border-angely-purple-200/70 hover:bg-angely-purple-100"
                        )}
                      >
                        {p.label} años
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Cantidad de niños */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="children-count" className="text-xs sm:text-sm">
                    Cantidad de niños
                  </Label>
                  <span className="text-[11px] font-bold text-angely-purple-700 bg-angely-purple-50 border border-angely-purple-200/60 px-2 py-0.5 rounded-full">
                    {childrenCount}
                  </span>
                </div>

                <Select
                  id="children-count"
                  value={childrenCount}
                  onChange={(e) => setChildrenCount(e.target.value)}
                >
                  <option value="Menos de 10 niños">Menos de 10 niños</option>
                  <option value="10 a 15 niños">10 a 15 niños</option>
                  <option value="15 a 25 niños">15 a 25 niños (Recomendado)</option>
                  <option value="25 a 35 niños">25 a 35 niños</option>
                  <option value="35 a 50 niños">35 a 50 niños</option>
                  <option value="Más de 50 niños">Más de 50 niños</option>
                </Select>

                {/* Acceso rápido a opciones comunes */}
                <div className="flex flex-wrap items-center gap-1 pt-1">
                  <span className="text-[10px] text-foreground/50 mr-0.5">Rápido:</span>
                  {["10 a 15", "15 a 25", "25 a 35", "+50"].map((label) => {
                    const fullVal =
                      label === "+50" ? "Más de 50 niños" : `${label} niños`;
                    const isSelected = childrenCount === fullVal;
                    return (
                      <button
                        key={label}
                        type="button"
                        onClick={() => setChildrenCount(fullVal)}
                        className={cn(
                          "text-[10px] px-2 py-0.5 rounded-full border transition-all",
                          isSelected
                            ? "bg-angely-purple-700 text-white border-angely-purple-700 font-bold shadow-xs"
                            : "bg-angely-purple-50/60 text-angely-purple-900 border-angely-purple-200/70 hover:bg-angely-purple-100"
                        )}
                      >
                        {label} niños
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <Label htmlFor="package" className="text-xs sm:text-sm">
                  Paquete de interés
                </Label>
                <Select
                  id="package"
                  value={packageId}
                  onChange={(e) => setPackageId(e.target.value)}
                >
                  {PACKAGES.map((pkg) => (
                    <option key={pkg.id} value={pkg.id}>
                      {pkg.name} — {pkg.priceLabel}
                    </option>
                  ))}
                </Select>
              </div>

              <Button
                type="submit"
                variant="whatsapp"
                size="lg"
                className="w-full sm:col-span-2 h-auto min-h-[48px] sm:min-h-[54px] py-3.5 px-4 sm:px-6 text-sm sm:text-base font-bold whitespace-normal text-center shadow-lg active:scale-[0.98] mt-2"
              >
                <WhatsAppIcon size={24} className="h-6 w-6" />
                <span>Enviar cotización</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
