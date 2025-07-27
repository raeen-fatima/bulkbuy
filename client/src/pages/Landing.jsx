import AboutUs from "../components/Landing/AboutUs";
import Bot from "../components/Landing/Bot";
import CallToAction from "../components/Landing/CallToAction";
import FeaturesSection from "../components/Landing/FeaturesSection";
import Footer from "../components/Landing/Footer";
import HeroSection from "../components/Landing/HeroSection";
import HowItWorks from "../components/Landing/HowItWorks";
import TopBox from "../components/Landing/TopBox";


export default function Landing() {
  return (
    <>
    
      <HeroSection />
      <AboutUs />
      <HowItWorks />
      <TopBox />
      <CallToAction />
      <FeaturesSection />
      <Footer />
      <Bot />

    </>
  );
}
