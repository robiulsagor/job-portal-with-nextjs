import React from "react";
import JobCard from "../Homepage/RecentJobs/JobCard"

interface JobListProps {
    id: number;
    postedAt: string;
    companyLogo: string;
    jobTitle: string;
    companyName: string;
    jobCategory: string;
    employmentType: string;
    salary: string;
    location: string
}

const JobListContainer = ({ jobList }: { jobList: JobListProps[] }) => {
    return (
        <div className="flex flex-col gap-5">
            {
                jobList.map((job) => (
                    <JobCard key={job.id} job={job} />
                ))
            }
        </div>
    )
}

export default JobListContainer