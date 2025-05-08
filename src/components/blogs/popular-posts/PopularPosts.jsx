import PageContainer from "@/components/PageContainer/PageContainer"
import Image from "next/image"
import Link from "next/link"
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa"

const blogPosts = [
    {
        id: 1,
        title: "Top 5 Must-Do Activities Around Beach Bumms",
        excerpt: "Discover the local adventures that make your stay unforgettable—from sunset cruises to hidden coves.",
        date: "February 20, 2024",
        image: "/images/popular1.png",
        slug: "/blog/top-5-activities",
    },
    {
        id: 2,
        title: "Why Beachfront Stays Boost Your Mental Health",
        excerpt: "Science-backed reasons to plan that beach escape and let the ocean work its magic.",
        date: "February 20, 2024",
        image: "/images/popular2.png",
        slug: "/blog/beachfront-mental-health",
    },
    {
        id: 3,
        title: "Romantic Getaways: Why Couples Love Beach Bumms",
        excerpt: "Love is in the air (and the sea breeze)—see why we're a top choice for couples.",
        date: "February 20, 2024",
        image: "/images/popular3.png",
        slug: "/blog/romantic-getaways",
    },
]

const PopularPosts = () => {
    return (
        <PageContainer>
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-title_color">Popular Post</h2>
                <Link href="/blogs" className="bg-primary text-white px-6 py-2 rounded hover:bg-hover_color transition-colors">
                    View All
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                    >
                        <div className="relative h-56">
                            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                        </div>
                        <div className="p-6 flex flex-col">
                            <div className="flex items-center text-gray-500 mb-3">
                                <FaCalendarAlt className="mr-2" />
                                <span className="text-sm">{post.date}</span>
                            </div>

                            <h3 className="text-xl font-bold text-title_color mb-3">{post.title}</h3>
                            <p title={post.excerpt} className="text-gray-600 mb-4 grow">{post.excerpt.slice(0, 70)}... <span className="text-xs text-primary cursor-pointer">see more</span></p>
                            <Link
                                href={post.slug}
                                className="inline-flex items-center text-primary hover:text-hover_color transition-colors"
                            >
                                <span className="mr-2">See more</span>
                                <FaArrowRight className="text-sm" />
                            </Link>
                        </div>
                    </div>

                ))}
            </div>
        </PageContainer>
    )
}

export default PopularPosts
