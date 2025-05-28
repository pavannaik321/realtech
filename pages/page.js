
import Header from "@/components/Header";
import ContactHero from "@/components/ContactHero";
import ContactFormSection from "@/components/ContactFormSection";
import ContactDetailsSection from "@/components/ContactDetailsSection";
import GlobalPresenceSection from "@/components/GlobalPresenceSection";
import CustomerSupportSection from "@/components/CustomerSupportSection";
import ContactStatsSection from "@/components/ContactStatsSection";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />  
      <ContactHero />
      {/* <ContactFormSection /> */}
      <ContactDetailsSection />
      <GlobalPresenceSection />
      <CustomerSupportSection />
      <ContactStatsSection />
      <Footer />
    </>
  );
}
