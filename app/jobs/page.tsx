import PageHeader from "../_components/Common/PageHeader"
import AllJobsContainer from "../_components/JobsPage/AllJobsContainer"
import JobFilterContainer from "../_components/JobsPage/JobFilterContainer"

const Jobs = () => {
    return (
        <div>
            <PageHeader header="Jobs" />

            <div className="wrapper !pt-6">
                <div className="flex items-start  gap-5 flex-wrap">
                    <JobFilterContainer />
                    <AllJobsContainer />
                </div>
            </div>
        </div>
    )
}

export default Jobs