import PageHeader from "@/app/_components/Common/PageHeader"
import JobCard from "@/app/_components/Common/JobCard"
import { jobsData } from "@/lib/data"
import JobDescription from "@/app/_components/JobDetailsPage/JobDescription"
import JobOverview from "@/app/_components/JobDetailsPage/JobOverview"
import { notFound } from "next/navigation"
import ShareJob from "@/app/_components/JobDetailsPage/ShareJob"
import SendMessage from "@/app/_components/JobDetailsPage/SendMessage"
import RelatedJobs from "@/app/_components/JobDetailsPage/RelatedJobs"

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params
    const job = jobsData.find(job => job.id == Number(id))

    if (!job) return notFound();

    return (
        <div>
            <PageHeader header="Job Details" />

            <div className="wrapper !pt-6">

                <div>
                    <JobCard job={job} page="details" />

                    <div className="mt-5 flex gap-6 lg:gap-14 items-start flex-wrap">
                        {/* left */}
                        <div className="flex-1 flex flex-col gap-14 text-slate-700">
                            <JobDescription description={job.description} responsibilities={job.keyResponsibilities}
                                skills={job.professionalSkills}
                                tags={job.tags} />

                            {/* share job on social media */}
                            <ShareJob />
                            <RelatedJobs />
                        </div>

                        {/* right */}
                        <div className="flex flex-col gap-6 w-full md:w-[30%] lg:w-[25%]">
                            <JobOverview title={job.jobTitle} category={job.jobCategory} degree="master's" experience="4 years" jobType="Full Time" location={job.location} salary={job.salary}
                            />
                            <SendMessage />
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Page