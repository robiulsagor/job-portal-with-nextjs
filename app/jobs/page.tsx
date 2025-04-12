import PageHeader from "../_components/Common/PageHeader"
import AllJobsContainer from "../_components/Jobspage/AllJobsContainer"
import JobFilterContainer from "../_components/Jobspage/JobFilterContainer"

const Jobs = () => {
    return (
        <div>
            <PageHeader text="Jobs" />

            <div className="wrapper !pt-6">
                <div className="flex items-start gap-5 flex-wrap">
                    <JobFilterContainer />
                    <AllJobsContainer />
                </div>
            </div>
        </div>
    )
}

export default Jobs