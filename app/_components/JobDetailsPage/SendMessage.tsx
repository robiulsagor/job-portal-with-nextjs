'use client'

import { SubmitHandler, useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { z } from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
// import { Mail, MessageSquare, PhoneCall, User, UserIcon } from "lucide-react"
import { sendMsgData } from "@/lib/data"

// const formSchema = z.object({
//     fullname: z.string().min(2, { message: "Full Name must be at least 2 characters." }),
//     email: z.string().email({ message: "Invalid email address." }),
//     phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
//     message: z.string().min(10, { message: "Message must be at least 10 characters." }),
// })

interface MessageProps {
    fullname: string
    email: string
    phone: string
    message: string
}


const SendMessage = () => {
    const { register, handleSubmit } = useForm<MessageProps>()

    const onSubmit: SubmitHandler<MessageProps> = (data) => {
        console.log("Form submitted successfully")
        console.log(data);

    }

    return (
        <div className="border w-full bg-brand-light rounded-lg p-5">
            <div className="flex flex-col gap-4 mb-5">
                <h2 className="font-semibold text-slate-800 text-lg">Send Us Message</h2>

                <form onSubmit={handleSubmit(onSubmit)}>

                    {
                        sendMsgData.map(item => (
                            <div key={item.id} className={`flex mb-4 bg-white px-3 py-1.5 pe-0 rounded-lg ${item.name == 'message' ? 'items-start' : 'items-center'}`}>
                                <item.icon size={22} className={`text-slate-500 ${item.name === 'message' && 'mt-2'}`} />
                                {
                                    item.name === "message" ?
                                        <Textarea placeholder={item.name} className="text-sm border-none focus-visible:ring-0 focus-visible:border-none shadow-none" {...register(item.name)}
                                            required /> :
                                        <Input type={item.type} placeholder={item.name} className="text-sm border-none focus-visible:ring-0 focus-visible:border-none shadow-none" {...register(item.name as "fullname" | "email" | "phone" | "message")}
                                            required />
                                }
                                {/* <Input type={item.type} placeholder={item.name} className="text-sm border-none focus-visible:ring-0 focus-visible:border-none shadow-none" /> */}
                            </div>
                        ))
                    }

                    {/* <div className="flex gap-1 items-center mb-4 bg-white px-3 py-1.5 rounded-lg">
                        <User size={22} className="text-slate-500" />
                        <Input type="text" placeholder="Full Name" className="text-sm border-none focus-visible:ring-0 focus-visible:border-none shadow-none" />
                    </div>

                    <div className="flex gap-1 items-center mb-4 bg-white px-3 py-1.5 rounded-lg">
                        <Mail size={22} className="text-slate-500" />
                        <Input type="email" placeholder="Email" className="text-sm border-none focus-visible:ring-0 focus-visible:border-none shadow-none" />
                    </div>

                    <div className="flex gap-1 items-center mb-4 bg-white px-3 py-1.5 rounded-lg">
                        <PhoneCall size={22} className="text-slate-500" />
                        <Input type="text" placeholder="Phone" className="text-sm border-none focus-visible:ring-0 focus-visible:border-none shadow-none" />
                    </div>

                    <div className="flex gap-1 items-start mb-4 bg-white px-3 py-1.5 rounded-lg">
                        <MessageSquare size={22} className="text-slate-500 bg-green-400 mt-2" />
                        <Textarea placeholder="Message" className="text-sm border-none focus-visible:ring-0 focus-visible:border-none shadow-none" />
                    </div> */}

                    <Button type="submit" className="w-full bg-brand text-white hover:bg-brand/90 transition-all duration-200 ease-in-out rounded-lg py-2.5">
                        Send Message
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default SendMessage
