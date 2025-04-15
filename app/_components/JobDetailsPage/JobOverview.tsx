import { jobOverview } from "@/lib/data"
import Image from "next/image"
import React from "react";

interface JobOverviewProps {
    title: string;
    jobType: string;
    category: string;
    experience: string;
    degree: string;
    salary: string;
    location: string;
}

const JobOverview: React.FC<JobOverviewProps> = ({ title, jobType, category, experience, degree, salary,
    location }) => {
    return (
        <div className="border w-full  bg-brand-light rounded-lg p-5">
            <div className="flex flex-col gap-4 mb-5">
                <h2 className="font-semibold text-slate-800 text-lg">Job Overview</h2>

                {
                    jobOverview.map((item) => (
                        <div key={item.id} className="mt-3 flex items-start gap-3.5 ">
                            <item.icon size={28} className="text-brand pt-1" />
                            <div className="flex flex-col gap-0.5">
                                <h3 className="font-medium !p-0 !m-0 text-slate-800">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 text-sm">
                                    {
                                        item.value == "title" ? title : item.value == "jobType" ? jobType : item.value == "category" ? category : item.value == "experience" ? experience : item.value == 'degree' ? degree : item.value == 'salary' ? salary : item.value === "location" ? location : "Unknown"
                                    }
                                </p>
                            </div>
                        </div>
                    ))
                }

                <div className="mt-2">
                    <Image src='/map.png' width={300} height={300} className="" alt="map image" />
                </div>


            </div>


        </div>
    )
}

export default JobOverview