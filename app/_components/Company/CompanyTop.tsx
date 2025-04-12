import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const CompanyTop = () => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14 ">
            <div className="w-full md:w-[50%] lg:w-[40%] rounded-lg overflow-hidden border">
                <Image src="/company.jpg" alt="Company Image" width={600} height={500} className="w-full" />
            </div>
            <div className="flex-1 flex flex-col gap-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-800 font-semibold lg:leading-14">Good Life Begins With A Good Company</h2>
                <p className="text-slate-700 text-justify text-sm lg:text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit minima aperiam, error repudiandae doloremque delectus odit dignissimos voluptatibus corporis pariatur.</p>

                <div className="mt-2 lg:mt-8 flex items-center justify-center md:justify-start gap-4">
                    <Button className="lg:py-4">Search Job</Button>
                    <Link href="#" className="underline text-brand">Learn more</Link>
                </div>
            </div>
        </div>
    )
}

export default CompanyTop