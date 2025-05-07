import AboutUs from "@/components/home/about-us/AboutUs";
import BlogSection from "@/components/home/blog-section/BlogSection";
import FeaturesSection from "@/components/home/features/FeaturesSection";
import Hero from "@/components/home/hero/Hero";
import Testimonials from "@/components/home/testimonials/Testimonials ";
import Welcome from "@/components/home/welcome-page/Welcome";
// import PageContainer from "@/components/PageContainer/PageContainer";


export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <AboutUs />
      <FeaturesSection />
      <BlogSection />
      <Testimonials/>
    </>
  );
}
