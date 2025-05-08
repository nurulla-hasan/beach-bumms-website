import PageContainer from "@/components/PageContainer/PageContainer"
import Image from "next/image"
import { FaCalendarAlt, FaUser, FaTag,} from "react-icons/fa"

const BlogDetails = () => {
    return (
        <>
            <PageContainer>

                {/* Blog Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-about_title mb-6">
                    Top 5 Must-Do Activities Around Beach Bumms
                </h1>

                {/* Blog Meta */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6 ml-2">
                    <div className="flex items-center">
                        <FaCalendarAlt className="mr-2" />
                        <span>May 8, 2025</span>
                    </div>
                    <div className="flex items-center">
                        <FaUser className="mr-2" />
                        <span>By Admin</span>
                    </div>
                    <div className="flex items-center">
                        <FaTag className="mr-2" />
                        <span>Activities, Beach, Vacation</span>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="rounded-lg overflow-hidden mb-8">
                    <Image src="/images/top5.png" alt="Beach Bumms Resort" width={1200} height={600} className="w-full h-auto" />
                </div>

                {/* Introduction */}
                <div className="prose max-w-none mb-10">
                    <p className="text-lg">
                        When you stay at Beach Bumms Inn and Suites, the stunning views and relaxing vibes are just the beginning.
                        The surrounding area is full of fun, adventure, and beauty just waiting to be explored. Whether you're a
                        thrill-seeker or a laid-back lounger, here are five must-do activities to make your stay truly memorable:
                    </p>

                    {/* Quote */}
                    <div className="flex flex-col justify-center items-center">
                        <blockquote className="border-l-4 border-primary pl-4 italic my-8">
                            "You can't control life's waves, but you can learn to ride them—and there's no better place to start than
                            right here."
                            <footer className="text-sm mt-2">— Inspired by Jon Kabat-Zinn</footer>
                        </blockquote>
                    </div>
                </div>

                {/* Activity 1 */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-about_title mb-4">1. Sunset Cruise Along the Coast</h2>
                    <p className="text-gray-700 mb-6">
                        Nothing compares to watching the sun dip into the ocean while cruising along the shoreline. With a drink in
                        hand and the salty breeze on your face, it's the ultimate way to end your day.
                    </p>
                    <div className="rounded-lg overflow-hidden mb-4">
                        <Image src="/images/sunset.png" alt="Sunset Cruise" width={1000} height={500} className="mx-auto h-auto" />
                    </div>
                    <p className="text-gray-700">
                        Our partner cruise company offers daily sunset tours that depart just a short walk from our property. The
                        two-hour excursion includes complimentary refreshments and often features dolphin sightings. Book at the
                        front desk to receive our special guest discount.
                    </p>
                </div>

                {/* Activity 2 */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-about_title mb-4">2. Beach Bonfire Nights</h2>
                    <p className="text-gray-700 mb-6">
                        Join us for our weekly beach bonfire events. Roast marshmallows, listen to local music, and mingle with
                        fellow guests under the stars.
                    </p>
                    <div className="rounded-lg overflow-hidden mb-4">
                        <Image src="/images/beach.png" alt="Beach Bonfire" width={1000} height={500} className="mx-auto h-auto" />
                    </div>
                    <p className="text-gray-700">
                        Every Thursday evening, our staff sets up a cozy bonfire area complete with comfortable seating, s'mores
                        kits, and acoustic music. It's the perfect opportunity to share stories and make new friends while enjoying
                        the warm glow of the fire against the backdrop of crashing waves.
                    </p>
                </div>

                {/* Activity 3 */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-about_title mb-4">3. Morning Yoga on the Sand</h2>
                    <p className="text-gray-700 mb-6">
                        Start your day with a calming beachfront yoga session. It's open to all skill levels and sets the tone for a
                        peaceful, positive day.
                    </p>
                    <div className="rounded-lg overflow-hidden mb-4">
                        <Image src="/images/morning.png" alt="Morning Yoga" width={1000} height={500} className="mx-auto h-auto" />
                    </div>
                    <p className="text-gray-700">
                        Our certified yoga instructor leads sessions every morning at sunrise. Mats are provided, and the gentle
                        sound of waves creates the perfect natural soundtrack for your practice. Even beginners find the experience
                        accessible and rejuvenating.
                    </p>
                </div>
            </PageContainer>
        </>
    );
};

export default BlogDetails;