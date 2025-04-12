import InfoCard from "./InfoCard";
import SearchForm from "./SearchForm";
import HeroOverlay from "./HeroOverlay";
import { infoCard } from "@/lib/data";

const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-[url('/hero.jpg')] bg-cover bg-center relative">
      <HeroOverlay />

      <div className="w-full h-full flex flex-col items-center justify-center text-center relative z-10 px-4 gap-6 md:gap-10 pt-32 pb-10 md:pt-36 md:pb-12" >
        <div className="text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold capitalize">
            find your dream job today!
          </h1>
          <p className="mt-4 text-sm md:text-base max-w-xl mx-auto text-gray-200">
            Connecting Talent with Opportunity: Your Gateway to Career Success
          </p>
        </div>

        {/* Search form */}
        <SearchForm />

        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 lg:gap-16 text-white w-[80%] md:w-full max-w-3xl mx-auto">
          {
            infoCard.map((card, index) => (
              <InfoCard
                key={index}
                icon={card.icon}
                label={card.label}
                number={card.number}
              />
            ))
          }
        </div>

      </div>
    </div>
  )
}


export default Hero