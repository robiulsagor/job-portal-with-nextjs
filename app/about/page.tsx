import Image from "next/image"
import PageHeader from "../_components/Common/PageHeader"
import HowItWorks from "../_components/AboutPage/HowItWorks"
import Link from "next/link"
import NewBlogSection from "../_components/Homepage/NewsBlog/NewBlogSection"

const Page = () => {
    return (
        <div>
            <PageHeader
                header="About Us"
            />
            <div className="wrapper">

                <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-2 mb-8 md:mt-4 md:mb-14 text-center md:text-left">
                    <h2 className="flex-1 text-4xl">Et nunc ut tempus duis nisl sed massa</h2>
                    <p className="flex-1 text-sm">Nunc sed a nisl purus. Nibh dis faucibus proin lacus tristique. Sit congue non vitae odio sit erat in. Felis eu ultrices a sed massa. Commodo fringilla sed tempor risus laoreet ultricies ipsum. Habitasse morbi faucibus in iaculis lectus. Nisi enim feugiat enim volutpat. Sem quis viverra viverra odio mauris nunc. </p>
                </div>

                <div className="mb-10">
                    <Image src='/about.jpg' width={600} height={400} className="w-full h-[400px] object-cover object-top rounded-lg" alt="about us" />
                </div>

                {/* How it works */}
                <HowItWorks />

                <div className="mt-10 rounded-xl overflow-hidden">
                    <div className="w-full h-[300px] md:h-[500px] relative">
                        <Image src='/pic.jpg' width={600} height={500} className="w-full h-full object-cover" alt="img" />
                        <div className="bg-slate-900/60 backdrop-blur-lg absolute top-0 left-0 w-full h-full  flex items-center justify-center">
                            <h2 className="text-2xl md:text-5xl leading-15 font-semibold text-white text-center">Good Life Begins With <br /> A Good Company </h2>
                        </div>
                    </div>

                    <div className="bg-slate-900 text-white flex items-center justify-around py-10 px-5 gap-10 flex-wrap">

                        {
                            Array.from({ length: 3 }).map((_, index) => (
                                <div key={index} className="flex gap-5 items-start w-[300px]">
                                    <p className="bg-brand px-2 w-10 h-10 rounded-lg text-white flex items-center justify-center ">
                                        {index + 1}
                                    </p>
                                    <div>
                                        <h3 className="font-semibold mb-0.5 md:mb-1.5 md:text-xl">Elit gravida lorem amet porta risus vitae at</h3>
                                        <Link href='#' className="text-brand text-sm">Learn More</Link>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>

                <div>
                    <NewBlogSection />
                </div>
            </div>
        </div>
    )
}

export default Page