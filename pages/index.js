// pages/index.js
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyItMatters from "@/components/WhyItMatters";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhyItStarted from "@/components/WhyItStarted";
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
      <Hero />
      <About />
      <WhyItStarted/>
      <Services />
      <WhyItMatters />
      <WhyChooseUs />
      <Pricing />
      <Contact />
      <Footer />
      {/* realtech */}
    </div>
  );
}
