"use client"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { MapPin, Search } from "lucide-react"
import { categories, jobDatePosted, jobExperienceLevel, jobTags, jobType } from "@/lib/data"
import FilterType from "./FilterType"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"


const JobFilterContainer = () => {
    const [showAll, setShowAll] = useState(false)

    return (
        <div className="border w-full md:w-[315px] p-4 rounded-xl bg-brand-light">
            {/* search by title */}
            <div className="flex-1">
                <h2 className="text-lg font-semibold text-slate-800">Search by job title</h2>
                <div className="flex items-center mt-2 border rounded-lg py-1.5 px-2.5 bg-white">
                    <Search size={17} className="text-slate-500" />
                    <Input placeholder="Job title" className="border-none focus-visible:ring-0 text-sm shadow-none" />
                </div>
            </div>

            {/* filter by location */}
            <div className="mt-5 flex-1">
                <h2 className="text-lg font-semibold text-slate-800">Location</h2>
                <div className="flex items-center mt-2 border rounded-lg py-0.5 px-2.5 bg-white">
                    <MapPin size={17} className="text-slate-500" />

                    <Select >
                        <SelectTrigger className="flex-1 border-none cursor-pointer shadow-none ">
                            <SelectValue placeholder="Choose City" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Preferred Location</SelectLabel>
                                <SelectItem value="dhaka">Dhaka</SelectItem>
                                <SelectItem value="khulna">Khulna</SelectItem>
                                <SelectItem value="chittagang">Chittagang</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* filter by category */}
            <FilterType title="Category" type="category" value={categories}
            />

            <AnimatePresence>

                {
                    showAll && (
                        <motion.div key="modal" exit={{ opacity: 0, transition: { duration: 0.4 } }} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.4 } }} className="mt-5">

                            {/* filter by job type */}
                            < FilterType title="Job Type" type="jobType" value={jobType} />
                            {/* filter by job experience level */}
                            <FilterType title="Experience Level" type="jobExperienceLevel" value={jobExperienceLevel}
                            />

                            {/* filter by job posted by date */}
                            <FilterType title="Date Posted" type="jobDatePosted" value={jobDatePosted}
                            />

                            {/* filter by job salary range */}
                            <div className="mt-5">
                                <h2 className="text-xl font-semibold text-slate-800">Salary </h2>

                                <input type="range" name="" id="salary" className="w-full bg-brand text-brand cursor-pointer" />

                                <div className="mt-2 flex justify-between items-center">
                                    <p className="font-medium text-slate-800">
                                        Salary: $0-$9999
                                    </p>

                                    <Button size={"sm"} className="bg-brand">
                                        Apply
                                    </Button>
                                </div>
                            </div>

                            {/* filter by job tags */}
                            <div className="mt-5">
                                <h2 className="text-xl font-semibold text-slate-800">Tags </h2>

                                <div className="mt-3 flex items-center gap-2 flex-wrap">
                                    {
                                        jobTags.map(tag => (
                                            <p key={tag.id} className="bg-brand/15 py-1.5 px-3 rounded-xl text-sm text-brand cursor-pointer">{tag.value} </p>
                                        ))
                                    }
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>

            <Button onClick={() => setShowAll(!showAll)}
                className="w-full mt-4 hover:bg-brand/90 transition duration-200">
                {
                    showAll ? "Show Less" : "Show All"
                }
            </Button>
        </div>
    )
}

export default JobFilterContainer