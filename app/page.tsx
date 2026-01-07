import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { Gallery } from "@/components/sections/gallery";
import { Includes } from "@/components/sections/includes";
import { Offer } from "@/components/sections/offer";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { WhatsAppFloating } from "@/components/whatsapp-floating";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Gallery />
      <Includes />
      <Offer />
      <About />
      <Testimonials />
      <FAQ />
      <Contact />
      <WhatsAppFloating />
    </main>
  );
}
