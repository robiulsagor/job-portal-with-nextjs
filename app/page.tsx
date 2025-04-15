import BrandCarousels from "./_components/Homepage/BrandCarousels";
import CategorySection from "./_components/Homepage/Category/CategorySection";
import CompanySection from "./_components/Homepage/Company/CompanySection";
import Faq from "./_components/Homepage/Faq/Faq";
import Hero from "./_components/Homepage/Hero/Hero";
import NewBlogSection from "./_components/Homepage/NewsBlog/NewBlogSection";
import RecentJobs from "./_components/Homepage/RecentJobs/RecentJobs";
import Testimonials from "./_components/Homepage/Testimonials/Testimonials";

export default function Home() {

  return (
    <div>
      <Hero />
      <BrandCarousels />
      <RecentJobs />
      <CategorySection />
      <CompanySection />
      <Testimonials />
      <NewBlogSection />
      <Faq />
    </div>
  );
}
