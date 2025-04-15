import { jobsData } from "@/lib/data"
import Heading from "../Common/Heading"
import JobCard from "../Common/JobCard"

const RelatedJobs = () => {
    return (
        <div>
            <Heading
                text1="Related Jobs"
                text2="Some jobs related to this job"
            />

            <div>
                {
                    jobsData.slice(0, 5).map(job => (
                        <JobCard key={job.id} job={job} />
                    ))
                }
            </div>
        </div>
    )
}

export default RelatedJobs