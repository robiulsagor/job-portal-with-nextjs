import PageHeader from "@/app/_components/Common/PageHeader"
import JobCard from "@/app/_components/Common/JobCard"
import { recentJobs } from "@/lib/data"
import JobDescription from "@/app/_components/JobDetailsPage/JobDescription"
import JobOverview from "@/app/_components/JobDetailsPage/JobOverview"

const Page = () => {
    return (
        <div>
            <PageHeader header="Job Details" />

            <div className="wrapper !pt-6">

                <div>
                    <JobCard job={recentJobs[0]} page="details" />

                    <div className="flex gap-3">
                        <JobDescription />
                        <JobOverview />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page