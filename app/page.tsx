import BrandCarousels from "./_components/BrandCarousels";
import CategorySection from "./_components/Category/CategorySection";
import CompanySection from "./_components/Company/CompanySection";
import FooterSection from "./_components/Footer/FooterSection";
import Hero from "./_components/Hero/Hero";
import NewBlogSection from "./_components/NewsBlog/NewBlogSection";
import RecentJobs from "./_components/RecentJobs/RecentJobs";
import Testimonials from "./_components/Testimonials/Testimonials";

export default function Home() {

  return (
    <div>
      <Hero />
      <BrandCarousels />
      <RecentJobs />
      <CategorySection />
      <CompanySection />
      <Testimonials/>
      <NewBlogSection />
      <FooterSection />
    </div>
  );
}
