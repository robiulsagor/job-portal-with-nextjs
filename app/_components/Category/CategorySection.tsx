import { categories } from "@/lib/data"
import Heading from "../Heading"
import CategoryCard from "./CategoryCard"

const CategorySection = () => {
    return (
        <div className="bg-brand/10">
            <div className="wrapper">
                <Heading text1="Browse by Category" text2="Find the right job for you" center={true} />

                <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
                    {
                        categories.map((category) => (
                            <CategoryCard key={category.id} icon={category.icon} category={category.title} jobsCount={category.jobsCount} />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default CategorySection