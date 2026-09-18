import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ValueProps } from "@/components/value-props";
import { PackagesTabs } from "@/components/packages-tabs";
import { QuickQuoteForm } from "@/components/quick-quote-form";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { WhatsAppFloatButton } from "@/components/whatsapp-float-button";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ValueProps />
      <PackagesTabs />
      <QuickQuoteForm />
      <Faq />
      <Footer />
      <WhatsAppFloatButton />
    </main>
  );
}
