'use client'

import { Search } from "lucide-react"
import SelectOption from "./SelectOption"
import { useState } from "react"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const data = {
    locations: [
        { id: 1, label: "Dhaka", type: 'location' },
        { id: 2, label: "Chittagong", type: 'location' },
        { id: 3, label: "Sylhet", type: 'location' },
        { id: 4, label: "Khulna", type: 'location' },
        { id: 5, label: "Rajshahi", type: 'location' },
        { id: 6, label: "Barisal", type: 'location' },
        { id: 7, label: "Rangpur", type: 'location' },
        { id: 8, label: "Comilla", type: 'location' }
    ],
    categories: [
        { id: 1, label: "IT", type: 'category' },
        { id: 2, label: "Electricity", type: 'category' },
        { id: 3, label: "Garments", type: 'category' },
        { id: 4, label: "Construction", type: 'category' },
        { id: 5, label: "Banking", type: 'category' },
        { id: 6, label: "Marketing", type: 'category' },
        { id: 7, label: "Sales", type: 'category' },
        { id: 8, label: "HR", type: 'category' },
        { id: 9, label: "Design", type: 'category' }
    ]
};

const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [location, setLocation] = useState('')
    const [category, setCategory] = useState('')

    const handleSelectChange = (option: { id: number; label: string; type: string }, type: string) => {
        if (type === 'location') {
            setLocation(option.label)
        }
        if (type === 'category') {
            setCategory(option.label)
        }
    }

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(searchTerm, location, category);
    }

    return (
        <form className="bg-white flex flex-col md:flex-row w-full max-w-3xl text-sm rounded-xl px-4 md:px-0 pb-4 md:py-0 "
            onSubmit={handleSearch}>
            <Input type="text" name="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Job title or company" className="flex-1 border-none px-3 py-4 rounded-s-xl outline-none text-sm focus-visible:ring-0 " />

            {Object.values(data).map((options, index) => (
                <SelectOption key={index} options={options} handleChange={handleSelectChange} />
            ))}

            <Button variant="default" className="bg-primary text-white flex-1 flex items-center justify-center gap-2 hover:bg-brand/80 transition duration-300 ease-in-out md:rounded-s-none rounded-s-md rounded-e-md md:rounded-e-xl cursor-pointer h-full py-2 md:py-6">
                <Search className="w-4 h-4 mr-2" />
                <span> Search</span>
            </Button>
        </form>
    )
}

export default SearchForm