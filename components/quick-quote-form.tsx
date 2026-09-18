"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { PACKAGES } from "@/lib/packages-data";
import { buildWhatsAppUrl } from "@/lib/utils";

export function QuickQuoteForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [district, setDistrict] = useState("");
  const [packageId, setPackageId] = useState(PACKAGES[0].id);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

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
    <section id="cotizar" className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-angely-purple-600 to-angely-pink-600 p-1 shadow-playful">
          <div className="rounded-[calc(1.5rem-4px)] bg-white p-8 sm:p-10">
            <div className="mb-8 text-center">
              <h2 className="font-heading text-3xl font-extrabold text-angely-purple-900">
                Cotizador rápido
              </h2>
              <p className="mt-2 text-foreground/70">
                Completa tus datos y te enviamos la cotización directo a WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  placeholder="Tu nombre completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="9XX XXX XXX"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Fecha del evento</Label>
                <Input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="district">Distrito</Label>
                <Input
                  id="district"
                  placeholder="Ej. Surco, San Miguel..."
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="package">Paquete de interés</Label>
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

              <Button type="submit" variant="whatsapp" size="lg" className="sm:col-span-2">
                <Send className="h-4 w-4" />
                Enviar cotización a WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
