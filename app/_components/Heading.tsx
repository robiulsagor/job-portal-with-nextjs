import Link from "next/link"
import React from "react";

interface HeadingProps {
    text1: string;
    text2: string;
    center?: boolean;
    link?: string
}

const Heading: React.FC<HeadingProps> = ({ text1, text2, center, link }) => {
    return (
        <div className="flex items-end justify-between mb-10">
            <div className={`${center ? "mx-auto text-center" : ""}`}>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-800">
                    {text1}
                </h1>
                {text2 && <p className="text-slate-500 text-xs sm:text-sm md:text-base mt-1.5">{text2} </p>}
            </div>
            {link && <Link href={link} className="hidden md:block btn btn-primary text-primary-500 font-medium underline hover:no-underline">View All</Link>
            }
        </div>
    )
}

export default Heading