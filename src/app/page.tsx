import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Pricing from "@/components/Pricing";
import WhyChooseMe from "@/components/WhyChooseMe";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import Chatbot from "@/components/Chatbot";
import ParticleBackground from "@/components/ParticleBackground";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Experience />
        <Process />
        <Projects />
        <Pricing />
        <WhyChooseMe />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
      <Chatbot />
    </>
  );
}
