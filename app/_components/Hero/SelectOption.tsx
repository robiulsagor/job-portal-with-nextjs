import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import React from "react"

interface Option {
    id: number,
    label: string,
    type: string
}

const SelectOption = ({ options, handleChange }: { options: Option[], handleChange: (option: Option, type: string) => void }) => {
    const handleSelectChange = (value: string) => {
        const selectedOption = options.find(option => option.label === value);
        if (selectedOption) {
            handleChange(selectedOption, options[0].type);
        }
        console.log(value);
    }

    return (
        <Select name="abcd" onValueChange={handleSelectChange} >
            <SelectTrigger size="sm" className="flex-1 h-full py-4 md:py-8 border-s-0 border-t-0 border-b-0 border-r-0 md:border-r cursor-pointer rounded-none w-full">
                <SelectValue placeholder={`Select ${options[0].type}`} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel className="capitalize">{options[0].type} </SelectLabel>
                    {options.map((option, index) => (
                        <SelectItem key={index} value={option.label}>
                            {option.label}
                        </SelectItem>
                    ))}

                </SelectGroup>
            </SelectContent>
        </Select>
    )
}

export default SelectOption