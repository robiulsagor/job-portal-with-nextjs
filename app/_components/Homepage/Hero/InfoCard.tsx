import { LucideIcon } from "lucide-react"
import React from "react";

interface InfoCardProps {
    icon: LucideIcon;
    label: string;
    number: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon: Icon, label, number }) => {
    return (
        <div className=" flex items-center justify-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            <div className="bg-brand p-1.5 rounded-full flex items-center justify-center">
                <Icon className="h-6 w-6" />
            </div>
            <div>
                <h3 className="text-md md:text-lg font-semibold text-left ">{number} </h3>
                <span className="text-sm md:text-base">{label}</span>
            </div>
        </div>
    )
}

export default InfoCard