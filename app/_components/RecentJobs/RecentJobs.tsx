import JobCard from "./JobCard"
import Heading from "../Heading"
import { recentJobs } from "@/lib/data"

const RecentJobs = () => {
    return (
        <div className="wrapper ">
            <Heading
                text1="Recent Jobs Available"
                text2="Some of the recent jobs available for you" center={false}
                link='/jobs' />

            <div className="flex flex-col gap-5">
                {
                    recentJobs.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))
                }

            </div>
        </div>
    )
}

export default RecentJobs