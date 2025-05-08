import Image from "next/image";
import PageContainer from "../PageContainer/PageContainer";

const MorningYogaOnTheSand = () => {
    return (
        <PageContainer>
            <div className="xl:space-y-10 md:space-y-6 space-y-4">
                <div className="space-y-3">
                    <h2 className="3xl:text-4xl md:text-3xl text-2xl font-bold text-about_title">Beach Bonfire Nights</h2>
                    <p className="text-gray-700 md:text-2xl text-sm leading-relaxed">
                        Join us for our weekly beach bonfire events. Roast marshmallows, listen to local music, and mingle with fellow guests under the stars.
                    </p>
                </div>
                <Image
                    src="/images/about2.png"
                    alt="Beach Bonfire"
                    width={1000}
                    height={600}
                    className="rounded-xl mx-auto"
                />
                <p className="text-gray-700 md:text-2xl text-sm leading-relaxed">
                    No matter what you’re into, Beach Bumms isn’t just a place to stay—it’s a place to explore, connect, and create lasting memories.
                </p>
            </div>
        </PageContainer>
    );
};

export default MorningYogaOnTheSand;
