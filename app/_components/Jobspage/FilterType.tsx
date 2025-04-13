import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface FilterTypeProps {
    id: number;
    title: string;
    value: string;
    icon?: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    jobsCount: number
}

const FilterType = ({ title, type, value }: { title: string, type: string, value: FilterTypeProps[] }) => {
    return (
        <div className="mt-5">
            <h2 className="text-xl font-semibold text-slate-800">{title} </h2>

            {
                value.map((data) => (
                    <div key={data.id} className="flex items-center justify-between mt-1.5 select-none">
                        <div className="items-top flex space-x-2">
                            <input type="checkbox" name={type} id={data.value} />
                            <label htmlFor={data.value} className="cursor-pointer text-slate-700 hover:text-slate-500 transition duration-150">{data.title} </label>
                        </div>
                        <span className="bg-white px-1.5 py-0.5 text-sm rounded-md">{data.jobsCount} </span>
                    </div>
                ))
            }
        </div>
    )
}

export default FilterType