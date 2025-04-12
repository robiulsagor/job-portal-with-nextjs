import FeatureCard from "./FeatureCard"
import { features } from "@/lib/data"
import CompanyTop from "./CompanyTop"

const CompanySection = () => {
    return (
        <div className="wrapper py-14">
            <CompanyTop />

            {/* feature cards here */}
            <div className="mt-14 flex flex-col flex-wrap md:flex-row  items-center justify-between gap-8">
                {
                    features.map((feature) => (
                        <FeatureCard key={feature.id} feature={feature} />
                    ))
                }
            </div>
        </div>
    )
}

export default CompanySection