import BlogSection from "../../Components/Home/BlogSection";
import CategoryPage from "../../Components/Home/Categories";
import CTABanner from "../../Components/Home/CTABanner";
import FeaturedProducts from "../../Components/Home/FeaturedProducts";
import LandingPage from "../../Components/Home/LandingPage";
import TestimonialsSection from "../../Components/Home/TestimonialsSection";
import WhyChooseUs from "../../Components/Home/WhyChooseUs";

export default function Home() {
  return (
   <>
   <LandingPage />
   <CategoryPage />
   <FeaturedProducts />
   <WhyChooseUs />
   <TestimonialsSection />
   <BlogSection />
   <CTABanner />
   </>
  );
}
