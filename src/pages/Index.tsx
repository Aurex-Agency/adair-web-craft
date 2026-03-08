import AnnouncementBar from "@/components/AnnouncementBar";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PainPointsSection from "@/components/PainPointsSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import WhatIBuildSection from "@/components/WhatIBuildSection";
import ScarcitySection from "@/components/ScarcitySection";
import WhyTrustSection from "@/components/WhyTrustSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ScrollGradientBackground from "@/components/ScrollGradientBackground";

const Index = () => {
  return (
    <div className="noise-bg min-h-screen relative">
      <ScrollGradientBackground />
      <div className="relative z-10">
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
    </div>
  );
};

export default Index;
