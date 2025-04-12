import { ChevronDown } from "lucide-react"

const SelectInput = ({ options, handleChange }: { options: { id: number, label: string, type: string }[], handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void }) => {

    return (
        <div className="relative flex-1 p-2 ">
            <select name={options[0]?.type} className="absolute inset-0 w-full h-full  opacity-0 cursor-pointer" onChange={handleChange}>
                {options.map((option, index) => (
                    <option key={index} value={option.label}>
                        {option.label}
                    </option>
                ))
                }

            </select>

            <div className="select-label">
                <span>Select {options[0]?.type} </span>
                <ChevronDown className="text-gray-500" size={18} />
            </div>

        </div>
    )
}

export default SelectInput