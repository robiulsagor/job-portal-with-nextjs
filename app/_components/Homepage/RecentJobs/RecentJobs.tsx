import { recentJobs } from "@/lib/data"
import Heading from "../../Common/Heading"
import JobListContainer from "../../Common/JobListContainer"

const RecentJobs = () => {
    return (
        <div className="wrapper ">
            <Heading
                text1="Recent Jobs Available"
                text2="Some of the recent jobs available for you" center={false}
                link='/jobs' />

            <JobListContainer page="recent" jobList={recentJobs} />
        </div>
    )
}

export default RecentJobs