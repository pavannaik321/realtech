// pages/index.js
import CncMachines from "@/components/Cncmachines";
import ConsultationSection from "@/components/ConsultationSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import aboutus from "@/pages/aboutus";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import {useEffect} from 'react'


export default function Home() {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quad',
      duration: 1000,
    });
  }, [])
  return (
    <div>
      <aboutus />
      <Header />
      <Hero />
      <CncMachines />
      <ConsultationSection />
      <StatsSection />
      <Footer />
    </div>
  );
}
