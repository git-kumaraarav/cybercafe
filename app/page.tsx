import { ContactFooterSection } from "./components/home/ContactFooterSection";
import { HeroSection } from "./components/home/HeroSection";
import { Navbar } from "./components/home/Navbar";
import { ReviewsSection } from "./components/home/ReviewsSection";
import { ServicesSection } from "./components/home/ServicesSection";
import { WhyChooseUsSection } from "./components/home/WhyChooseUsSection";

export default function Home() {
  return (
    <main className="relative w-full bg-black font-sans antialiased selection:bg-blue-500/30">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ReviewsSection />
      <ContactFooterSection />
    </main>
  );
}
