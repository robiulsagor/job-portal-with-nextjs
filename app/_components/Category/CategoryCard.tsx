import { LucideIcon } from "lucide-react"
import React from "react";

interface CategoryCardProps {
    icon: LucideIcon;
    category: string;
    jobsCount: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ icon: Icon, category, jobsCount }) => {
    return (
        <div className="w-full max-w-[280px] bg-white rounded-2xl shadow-md p-8 py-12 transition-shadow hover:shadow-lg">
            <div className="w-full flex flex-col gap-8 items-center justify-center">
                <Icon size={32} className="text-brand" />
                <h2 className="font-semibold text-xl">{category}</h2>
                <p className="text-brand ">{jobsCount} jobs</p>
            </div>
        </div>
    )
}

export default CategoryCard