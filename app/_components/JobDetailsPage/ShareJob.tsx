import { Facebook, Instagram, Twitter } from "lucide-react"

const ShareJob = () => {
    return (
        <div className="flex items-center gap-8">
            <span className="text-xl font-semibold">Share Job: </span>
            <div className="flex gap-7">
                <div className="bg-brand/20 p-2 rounded-full cursor-pointer ">
                    <Facebook size={22} className="" />
                </div>
                <div className="bg-brand/20 p-2 rounded-full cursor-pointer ">
                    <Twitter size={22} className="" />
                </div>
                <div className="bg-brand/20 p-2 rounded-full cursor-pointer ">
                    <Instagram size={22} className="" />
                </div>
            </div>
        </div>
    )
}

export default ShareJob