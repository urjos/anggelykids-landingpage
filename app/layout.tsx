import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fredoka, Nunito } from "next/font/google";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFloatButton } from "@/components/whatsapp-float-button";

import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Anggelykids Shows y Eventos | Shows infantiles y estimulación sensorial en Lima",
  description:
    "Shows temáticos, animación didáctica y estimulación sensorial para fiestas infantiles en Lima. Cotiza tu paquete por WhatsApp al 957 189 685.",
  openGraph: {
    title: "Anggelykids Shows y Eventos",
    description:
      "Shows temáticos, animación didáctica y estimulación sensorial para fiestas infantiles en Lima.",
    locale: "es_PE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${fredoka.variable} ${nunito.variable} font-body antialiased flex min-h-screen flex-col`}>
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <WhatsAppFloatButton />
      </body>
    </html>
  );
}
