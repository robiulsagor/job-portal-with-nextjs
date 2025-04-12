import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NewsCardProps {
    type: string;
    thumbnail: string;
    title: string;
    body: string;
}

const NewsCard = ({ post }: { post: NewsCardProps }) => {
    return (
        <div className="flex-1 min-w-[300px] bg-white shadow-sm rounded-xl p-4 hover:shadow-xl hover:-translate-y-1 transition duration-300 ease-in-out">
            <div className=" relative">
                <Image src={post.thumbnail} alt="news" width={400} height={200} className="w-full h-72 object-cover  rounded-xl" />
                <span className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-brand text-white text-xs capitalize">{post.type} </span>
            </div>
            <div className="flex flex-col gap-2 py-4">
                <span className="text-sm text-slate-500">20<sup>th</sup> March, 2025</span>
                <h3 className="text-xl font-medium">{post.title} </h3>

                <Link href='#' className="group text-brand  flex items-center gap-1 w-fit underline hover:no-underline"><span>Read More</span> <ArrowRight className="group-hover:translate-x-2 transition duration-250" size={17} /> </Link>
            </div>
        </div>
    )
}

export default NewsCard