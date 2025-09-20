import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import MissionSection from "@/components/mission-section";
import SolutionsSection from "@/components/solutions-section";
import CalendlySection from "@/components/calendly-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <MissionSection />
      <SolutionsSection />
      <CalendlySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
