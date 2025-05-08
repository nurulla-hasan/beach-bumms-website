import AboutJesse from "@/components/home/about-jesse/AboutJesse";
import AboutUs from "@/components/home/about-us/AboutUs";
import BlogSection from "@/components/home/blog-section/BlogSection";
import CommandmentsSection from "@/components/home/commandments/CommandmentsSection";
import FeaturesSection from "@/components/home/features/FeaturesSection";
import Gallery from "@/components/home/gallery/Gallery";
import Hero from "@/components/home/hero/Hero";
import Hotels from "@/components/home/hotels/Hotels";
import HowItWorksSection from "@/components/home/how-it-works/HowItWorksSection";
import OurPromise from "@/components/home/our-promise/OurPromise";
import Testimonials from "@/components/home/testimonials/Testimonials ";
import VipCard from "@/components/home/vip-card/VipCard";
import Welcome from "@/components/home/welcome-page/Welcome";


export default function Home() {
  return (
    <>
      <Hero />
      {/* <Welcome /> */}
      <AboutUs />
      <CommandmentsSection/>
      {/* <OurPromise/> */}
      {/* <HowItWorksSection/> */}
      {/* <FeaturesSection /> */}
      <Hotels/>
      <VipCard/>
      <AboutJesse/>
      <BlogSection />
      <Testimonials/>
      <Gallery/>
    </>
  );
}
