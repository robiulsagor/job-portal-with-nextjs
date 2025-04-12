import { Quote, StarIcon } from "lucide-react"
import Image from "next/image"

const TestimonialCard = () => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-8">
            <div className="flex items-center gap-2 mb-4">
                <StarIcon stroke="#FFC107" fill="#FFC107" />
                <StarIcon stroke="#FFC107" fill="#FFC107" />
                <StarIcon stroke="#FFC107" fill="#FFC107" />
                <StarIcon stroke="#FFC107" fill="#FFC107" />
                <StarIcon stroke="#FFC107" fill="#FFC107" />
            </div>

            <h2 className="font-semibold text-xl text-slate-700">Amazing Service</h2>
            <p className="text-sm text-slate-800 mt-5 text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore enim ex nesciunt accusamus doloribus voluptatibus exercitationem molestias officiis.</p>

            <Quote size={28} className="rotate-180 -skew-4 text-brand ml-auto mt-4" />

            <div className="flex items-center gap-4 mt-1">
                <div className="w-12 h-12 rounded-full">
                    <Image src='/men.jpg' alt='client' width={100} height={100} className="w-full h-full rounded-full object-cover" />
                </div>
                <div className="flex flex-col">
                    <h3 className="font-semibold ">John Doe</h3>
                    <span className="text-slate-500 text-sm capitalize">happy client</span>
                </div>
            </div>


        </div>
    )
}

export default TestimonialCard