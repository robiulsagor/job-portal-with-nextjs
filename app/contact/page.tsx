import { Input } from "@/components/ui/input"
import PageHeader from "../_components/Common/PageHeader"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Clock2Icon, MailIcon, MapPin, PhoneCall } from "lucide-react"
import Image from "next/image"

const Page = () => {
    return (
        <div>
            <PageHeader
                header="Contact Us"
            />

            <div className="wrapper">
                <div className="flex gap-4 items-center flex-col md:flex-row">
                    <div className="flex-1">
                        <h2 className="text-4xl md:text-5xl leading-10 md:leading-16 font-semibold text-slate-800 capitalize  ">
                            you will grow. You will succeed. we promise that
                        </h2>
                        <p className="mt-5 text-slate-700 text-sm">
                            We believe in your potential. We believe that you will grow. You will become the best version of yourself.
                        </p>


                        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-y-7">
                            <div className="w-1/2 flex flex-col gap-1">
                                <PhoneCall size={24} className="text-brand" />
                                <h4 className="text-lg text-slate-800 font-semibold">Call for inquiry</h4>
                                <span className="text-sm text-slate-700">
                                    +880 1758 319968
                                </span>
                            </div>
                            <div className=" flex flex-col gap-1">
                                <MailIcon size={24} className="text-brand" />
                                <h4 className="text-lg text-slate-800 font-semibold">Send us email</h4>
                                <span className="text-sm text-slate-700">
                                    sagor@gmail.com
                                </span>
                            </div>
                            <div className=" flex flex-col gap-1">
                                <Clock2Icon size={24} className="text-brand" />
                                <h4 className="text-lg text-slate-800 font-semibold">Opening hours</h4>
                                <span className="text-sm text-slate-700">
                                    Sat - Thu: 09AM - 06PM
                                </span>
                            </div>
                            <div className=" flex flex-col gap-1">
                                <MapPin size={24} className="text-brand" />
                                <h4 className="text-lg text-slate-800 font-semibold">Office</h4>
                                <span className="text-sm text-slate-700">
                                    Bagerhat, Khulna, Bangladesh
                                </span>
                            </div>
                        </div>
                    </div>


                    {/* contact form */}
                    <div className="w-full md:w-[40%] bg-brand/10 rounded-lg px-6 py-10">
                        <div className="text-center mb-4">
                            <h2 className="text-3xl font-semibold  text-slate-800">Contact Info</h2>
                            <p className="text-slate-700 text-sm">If yoy have any query, please contact us:</p>
                        </div>

                        <form className="mt-10 flex flex-col gap-5">
                            <div className="flex gap-3 items-center flex-col lg:flex-row ">
                                <div className="flex-1  w-full">
                                    <label htmlFor="fname" className="text-sm font-medium mb-1 block">First Name</label>
                                    <Input id="fname" name="fname" placeholder="Your name" className="bg-white py-2.5 "
                                    />
                                </div>
                                <div className="flex-1 w-full">
                                    <label htmlFor="lname" className="text-sm font-medium mb-1 block">Last Name</label>
                                    <Input id="lname" name="lname" placeholder="Your last name" className="bg-white py-2.5 "
                                    />
                                </div>
                            </div>

                            <div className="" >
                                <label htmlFor="email" className="text-sm font-medium mb-1 block">Email</label>
                                <Input id="email" name="email" placeholder="Your email" className="bg-white py-2.5 w-full"
                                />
                            </div>

                            <div className="flex-1">
                                <label htmlFor="message" className="text-sm font-medium mb-1 block">Your message</label>
                                <Textarea id="message" name="message" placeholder="Message" className="bg-white py-2.5"
                                />
                            </div>

                            <Button type="submit" className="w-full md:w-1/2">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>

                <div className="mt-10 ">
                    <Image src='/map-large.png' alt='map' width={500} height={500} className="w-full h-[300px] object-cover object-center rounded-lg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Page