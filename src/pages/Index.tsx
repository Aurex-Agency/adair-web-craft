import AnnouncementBar from "@/components/AnnouncementBar";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import WhatIBuildSection from "@/components/WhatIBuildSection";
import ScarcitySection from "@/components/ScarcitySection";
import WhyTrustSection from "@/components/WhyTrustSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="bg-bg-primary min-h-screen">
      <AnnouncementBar />
      <Navigation />
      <HeroSection />
      <PainPointsSection />
      <WhatIBuildSection />
      <ScarcitySection />
      <WhyTrustSection />
      <HowItWorksSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
