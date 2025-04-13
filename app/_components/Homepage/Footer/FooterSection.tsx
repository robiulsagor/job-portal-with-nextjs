import { Button } from "@/components/ui/button"
import { BriefcaseBusiness } from "lucide-react"
import Link from "next/link"

const FooterSection = () => {
    return (
        <div className="bg-slate-900 text-slate-300">
            <div className="wrapper">

                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-x-4 gap-y-8 py-10 text-center md:text-left">
                    <div className="max-w-[380px] mx-auto ">
                        <div className="flex items-center justify-center md:justify-start space-x-3" >
                            <BriefcaseBusiness /> <h2 className="text-xl font-semibold">DreamJob</h2>
                        </div>

                        <p className="mt-4 text-xs text-slate-300 leading-6  text-justify md:text-left">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto aspernatur dolorum obcaecati iusto excepturi reiciendis, laborum ut delectus, nemo sunt blanditiis nesciunt saepe possimus. Labore sapiente iste architecto.
                        </p>
                    </div>
                    <div className="w-fit">
                        <h2 className="font-semibold text-lg">Company</h2>

                        <ul className="mt-3 flex flex-col gap-1.5 text-sm font-light">
                            <li>
                                <Link href="/">About Us</Link>
                            </li>
                            <li>
                                <Link href="/">Our Team</Link>
                            </li>
                            <li>
                                <Link href="/">Partners</Link>
                            </li>
                            <li>
                                <Link href="/">For Candidates</Link>
                            </li>
                            <li>
                                <Link href="/">For Employees</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-fit">
                        <h2 className="font-semibold text-lg">Job Categories</h2>

                        <ul className="mt-3 flex flex-col gap-1.5 text-sm font-light">
                            <li>
                                <Link href="/">Telecomunications</Link>
                            </li>
                            <li>
                                <Link href="/">Hotels & Tourism</Link>
                            </li>
                            <li>
                                <Link href="/">Construction</Link>
                            </li>
                            <li>
                                <Link href="/">Education</Link>
                            </li>
                            <li>
                                <Link href="/">Financial Services</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="max-w-[300px] mx-auto p-5 rounded-md">
                        <h2 className="font-semibold text-lg">Newsletter</h2>

                        <div className="mt-3 flex flex-col gap-3 text-xs font-light">
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, hic.</span>
                            <form className="flex flex-col gap-3">
                                <input type="text" name="" id="" className="border rounded-md py-2.5 px-2.5 w-full max-w-[300px] mx-auto" />
                                <Button type="submit">Submit</Button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* copywrite */}
                <div className="flex items-center justify-between mt-10 ">
                    <span className="text-xs font-light">
                        &copy; {new Date().getFullYear()} DreamJob. All rights reserved.
                    </span>

                    <div className="flex gap-3 text-sm font-light ">
                        <Link href="/" className="underline hover:no-underline">Privacy Policy</Link>
                        <Link href="/" className="underline hover:no-underline">Terms of Service</Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterSection