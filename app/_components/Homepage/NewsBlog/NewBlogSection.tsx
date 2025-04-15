import { blogPosts } from "@/lib/data"
import Heading from "../../Common/Heading"
import NewsCard from "./NewsCard"

const NewBlogSection = () => {
    return (
        <div>
            <div className="wrapper bg-cyan-800">
                <Heading
                    text1="News and Blog"
                    text2="Stay updated with the latest news and blog posts"
                    center={false}
                    link='/blog'
                />

                {/* news card */}
                <div className="flex items-start justify-between flex-wrap gap-x-8 gap-y-14 mt-8">
                    {
                        blogPosts.map((post) => (
                            <NewsCard key={post.id} post={post} />
                        ))
                    }

                </div>

            </div>
        </div>
    )
}

export default NewBlogSection