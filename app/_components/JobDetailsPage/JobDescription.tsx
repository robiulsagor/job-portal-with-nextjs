import { Check } from "lucide-react";
import React from "react";

interface JobDescriptionProps {
    description: string;
    responsibilities: string[];
    skills: string[];
    tags: string[];
}

const JobDescription: React.FC<JobDescriptionProps> = ({ description, responsibilities, skills, tags }) => {
    return (
        <div className="flex-1 flex flex-col gap-14 text-slate-700">
            <div>
                <h3 className="text-2xl font-semibold mb-6">Job Description</h3>
                <p className="leading-8 text-justify text-sm">{description}</p>
            </div>

            <div>
                <h3 className="text-2xl font-semibold mb-6">Key Responsibilities</h3>
                <ul className="flex flex-col gap-4">
                    {
                        responsibilities.map((res, index) => (
                            <li key={index} className="flex items-center gap-3 text-sm">
                                <Check size={20} className="text-cyan-600" /> <span> {res}</span>
                            </li>
                        ))
                    }

                </ul>
            </div>

            <div>
                <h3 className="text-2xl font-semibold mb-6">Professional Skills</h3>
                <ul className="flex flex-col gap-4">
                    {
                        skills.map((res, index) => (
                            <li key={index} className="flex items-center gap-3 text-sm">
                                <Check size={20} className="text-cyan-600" /> <span> {res}</span>
                            </li>
                        ))
                    }

                </ul>
            </div>

            <div>
                <h3 className="text-2xl font-semibold text-slate-700 mb-6">Tags:</h3>
                <ul className="flex gap-4 flex-wrap text-sm">
                    {
                        tags.map((res, index) => (
                            <li key={index} className="bg-brand/10 text-brand py-1.5 px-4 rounded-xl text-sm ">
                                {res}
                            </li>
                        ))
                    }

                </ul>
            </div>
        </div>
    )
}

export default JobDescription