import ContactUsSection from "@/components/sections/home/contact-us";
import {
  HeroSection,
  AboutUs,
  Services,
  Acheivements,
  TestimonialsSection,
} from "@/components/sections/index";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Services />
      <Acheivements />
      <TestimonialsSection />
      <ContactUsSection />
    </>
  );
}
