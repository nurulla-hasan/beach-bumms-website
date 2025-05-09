import PageContainer from "@/components/PageContainer/PageContainer"
import Image from "next/image"

const AboutJesse = () => {
    return (
        <PageContainer>
                <h2 className="text-3xl font-bold text-title_color mb-4">About Jesse</h2>

                <div className="flex flex-col md:flex-row items-center gap-5 md:h-[400px] overflow-y-auto">
                    {/* Left Column - First Description */}
                    <div className="md:w-1/3 h-full">
                        <p className="text-title_color text-lg leading-relaxed md:h-[350px] h-[170px] scrl-hide overflow-y-auto">
                            Jesse is your personal digital assistant, always ready to help you make the most of your stay with Beach
                            Bums Inn & Suites. From recommending the best local restaurants and beach spots to helping you check
                            availability or book experiences, Jesse is here 24/7 to ensure everything runs smoothly.
                        </p>
                    </div>

                    {/* Middle Column - Jesse Image */}
                    <div className="md:w-1/3 flex justify-center h-full">
                        <div>
                            <Image
                                src="/images/jesse.png"
                                width={500}
                                height={500}
                                alt="Jesse - Your Beach Bums digital assistant"
                                className="h-full"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Column - Second Description */}
                    <div className="md:w-1/3 h-full">
                        <p className="text-title_color text-lg leading-relaxed md:h-[350px] h-[170px] scrl-hide overflow-y-auto">
                            Whether you need early check-in assistance, directions to the nearest surf shop, or ideas for a romantic
                            night out in Ft. Lauderdale, Jesse has you covered with instant answers and friendly guidance. Think of
                            Jesse as your always-on vacation buddy, dedicated to making your trip effortless and unforgettable.
                        </p>
                    </div>
                </div>
        </PageContainer>
    )
}

export default AboutJesse
