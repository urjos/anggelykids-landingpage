"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/ui/form-error";
import { PACKAGES } from "@/constants/packages-data";
import { buildWhatsAppUrl } from "@/lib/utils";
import Image from "next/image";

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

    const message = [
      "Hola Anggelykids! 👋 Quiero solicitar una cotización:",
      `• Nombre: ${name || "-"}`,
      `• Teléfono: ${phone || "-"}`,
      `• Fecha del evento: ${date || "-"}`,
      `• Distrito: ${district || "-"}`,
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
                <Image
                  src="/icons/whatsapp.png"
                  alt="WhatsApp"
                  width={30}
                  height={30}
                  className="object-contain brightness-0 invert"
                />
                <span>Enviar cotización</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
