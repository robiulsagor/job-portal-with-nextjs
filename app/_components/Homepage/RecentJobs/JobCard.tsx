import { Button } from "@/components/ui/button"
import { formatDate } from "@/lib/myUtils";
import { BookmarkPlus, BriefcaseBusiness, Clock, MapPin, Wallet } from "lucide-react"
import Image from "next/image"
import React from "react";


interface JobCardProps {
    postedAt: string;
    companyLogo: string;
    jobTitle: string;
    companyName: string;
    jobCategory: string;
    employmentType: string;
    salary: string;
    location: string;
}

const JobCard = ({ job }: { job: JobCardProps }) => {
    const timeAgo = formatDate(job.postedAt) // Use the postedAt date to calculate the time ago

    return (
        <div className=" p-5 rounded-lg shadow-sm bg-white hover:shadow-md transition-all duration-300 ease-in-out">
            <div className="flex items-center justify-between mb-5">
                <span className="bg-brand/10 text-brand px-2 py-1 rounded-lg text-xs sm:text-sm">{timeAgo} </span>
                <BookmarkPlus color="#777" className="cursor-pointer" />
            </div>
            <div className="flex items-start gap-4 mb-5">
                <Image src="/company_logo1.png" alt="Company Logo" width={100} height={100} className="w-10" />
                <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-slate-700">{job.jobTitle}</h3>
                    <p className="text-sm mt-2 text-slate-600">{job.companyName} </p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row  justify-between gap-3">
                <div className="flex flex-col lg:flex-row gap-4 text-sm">
                    <div className="flex items-center gap-2">
                        <BriefcaseBusiness className="text-brand" />
                        <span className="text-slate-500">{job.jobCategory} </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="text-brand" />
                        <span className="text-slate-500">{job.employmentType}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Wallet className="text-brand" />
                        <span className="text-slate-500">{job.salary}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="text-brand" />
                        <span className="text-slate-500">{job.location} </span>
                    </div>
                </div>
                <Button variant="outline" size={'lg'} className="bg-brand text-white w-full max-w-md mx-auto md:w-fit md:mr-0 cursor-pointer">Job Details</Button>
            </div>
        </div>
    )
}

export default JobCard