import { howItWorks } from "@/lib/data"
import Heading from "../Common/Heading"

const HowItWorks = () => {
    return (
        <>
            <Heading
                text1="How It Works"
                text2="In this section, we will show you how our service will help you get jobs"
                center={true} />

            <div className="mt-6 flex flex-wrap items-center justify-around gap-y-4">
                {
                    howItWorks.map(item => (
                        <div key={item.id} className="flex items-center justify-center flex-col gap-2 text-center w-[280px] h-[280px] bg-cyan-800/10 shadow-md hover:shadow-lg transition rounded-lg">
                            <item.icon size={28} className="text-brand" />
                            <p className="text-xl font-semibold text-slate-800">{item.title} </p>
                            <p className="text-slate-500 text-sm">{item.text} </p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default HowItWorks