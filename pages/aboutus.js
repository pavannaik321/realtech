
import Header from "@/components/Header";
import AboutHero from "@/components/AboutHero";
import MissionSection from "@/components/MissionSection";
import VisionSection from "@/components/VisionSection";
import TimelineSection from "@/components/TimelineSection";
import AboutStatsSection from "@/components/AboutStatsSection";
import CoreValuesSection from "@/components/CoreValuesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import InnovativeEdgeSection from "@/components/InnovativeEdgeSection";
import Footer from "@/components/Footer";

export default function AboutUsPage() {
  return (
    <>
       <Header />

      <AboutHero />
      <MissionSection />
      <VisionSection />
      <TimelineSection />
      <AboutStatsSection />
      <CoreValuesSection />
      <WhyChooseUsSection />
      <InnovativeEdgeSection />
      <Footer />
    </>
  );
} 
