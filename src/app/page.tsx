import { assets } from "@/lib/content";
import { publicImageExists } from "@/lib/images";
import { Header } from "@/shared/components/Header";
import { Footer } from "@/shared/components/Footer";
import { Hero } from "@/features/hero/Hero";
import { Menu } from "@/features/menu/Menu";
import { About } from "@/features/about/About";
import { Gallery } from "@/features/gallery/Gallery";
import { HoursLocation } from "@/features/hours-location/HoursLocation";
import { ContactForm } from "@/features/contact/ContactForm";

export default function Home() {
  const hasLogo = publicImageExists(assets.logo);
  const hasHeroImage = publicImageExists(assets.hero);

  return (
    <>
      <Header hasLogo={hasLogo} />
      <main className="flex-1">
        <Hero hasHeroImage={hasHeroImage} />
        <Menu />
        <About />
        <Gallery />
        <HoursLocation />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
