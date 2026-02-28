import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Membership from "@/components/sections/Membership";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Trainers from "@/components/sections/Trainers";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";
import Loader from "@/components/ui/Loader";
import Marquee from "@/components/ui/Marquee";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main className="bg-black">
        <Hero />
        <Marquee />
        <WhyChooseUs />
        <Membership />
        <Testimonials />
        <About />
        <Marquee />
        <Trainers />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
