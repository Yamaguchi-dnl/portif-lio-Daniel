import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsBar from "./components/StatsBar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import CTASection from "./components/CTASection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ProgressBar from "./components/ProgressBar";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import PageIntro from "./components/PageIntro";

export default function Home() {
  return (
    <SmoothScroll>
      <PageIntro />
      <ProgressBar />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Portfolio />
        <Services />
        <Testimonials />
        <About />
        <CTASection />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CustomCursor />
    </SmoothScroll>
  );
}
