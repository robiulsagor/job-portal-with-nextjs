
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import JobListContainer from "../Common/JobListContainer"
import { recentJobs } from "@/lib/data"

const AllJobsContainer = () => {
    return (
        <div className="w-full md:flex-1">
            <div className="flex items-center justify-between px-4 mb-4">
                <p className="text-slate-500 text-xs md:text-sm">Showing 1-10 of 2 results</p>

                <Select>
                    <SelectTrigger className="w-fit text-xs md:w-[180px]">
                        <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Sort Options</SelectLabel>
                            <SelectItem value="latest">Latest</SelectItem>
                            <SelectItem value="oldest">Oldest</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <JobListContainer jobList={recentJobs} />
        </div>
    )
}

export default AllJobsContainer