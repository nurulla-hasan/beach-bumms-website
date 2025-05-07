import AboutUs from "@/components/home/about-us/AboutUs";
import FeaturesSection from "@/components/home/features/FeaturesSection";
import Hero from "@/components/home/hero/Hero";
import Welcome from "@/components/home/welcome-page/Welcome";
import PageContainer from "@/components/PageContainer/PageContainer";


export default function Home() {
  return (
    <PageContainer>
      <Hero />
      <Welcome />
      <AboutUs/>
      <FeaturesSection/>
    </PageContainer>
  );
}
