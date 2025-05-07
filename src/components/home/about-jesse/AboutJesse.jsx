import PageContainer from "@/components/PageContainer/PageContainer"
import Image from "next/image"

const AboutJesse = () => {
    return (
        <PageContainer>
                <h2 className="text-3xl font-bold text-title_color mb-4">About Jesse</h2>

                <div className="flex flex-col md:flex-row items-center gap-5 h-[400px] overflow-y-auto">
                    {/* Left Column - First Description */}
                    <div className="md:w-1/3">
                        <p className="text-title_color text-lg leading-relaxed h-[350px] scrl-hide overflow-auto">
                            Jesse is your personal digital assistant, always ready to help you make the most of your stay with Beach
                            Bums Inn & Suites. From recommending the best local restaurants and beach spots to helping you check
                            availability or book experiences, Jesse is here 24/7 to ensure everything runs smoothly.
                            Jesse is your personal digital assistant, always ready to help you make the most of your stay with Beach
                            Bums Inn & Suites. From recommending the best local restaurants and beach spots to helping you check.
                            Jesse is your personal digital assistant, always ready to help you make the most of your stay with Beach
                            Bums Inn & Suites. From recommending the best local restaurants and beach spots to helping you check
                            availability or book experiences, Jesse is here 24/7 to ensure everything runs smoothly.
                            Jesse is your personal digital assistant, always ready to help you make the most of your stay with Beach
                            Bums Inn & Suites. From recommending the best local restaurants and beach spots to helping you check.
                        </p>
                    </div>

                    {/* Middle Column - Jesse Image */}
                    <div className="md:w-1/3 flex justify-center">
                        <div className="relative w-full max-w-sm aspect-square">
                            <Image
                                src="/images/jesse.png"
                                alt="Jesse - Your Beach Bums digital assistant"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Column - Second Description */}
                    <div className="md:w-1/3">
                        <p className="text-title_color text-lg leading-relaxed h-[350px] scrl-hide overflow-auto">
                            Whether you need early check-in assistance, directions to the nearest surf shop, or ideas for a romantic
                            night out in Ft. Lauderdale, Jesse has you covered with instant answers and friendly guidance. Think of
                            Jesse as your always-on vacation buddy, dedicated to making your trip effortless and unforgettable.
                            Jesse is your personal digital assistant, always ready to help you make the most of your stay with Beach
                            Bums Inn & Suites. From recommending the best local restaurants and beach spots to helping you check.
                            Whether you need early check-in assistance, directions to the nearest surf shop, or ideas for a romantic
                            night out in Ft. Lauderdale, Jesse has you covered with instant answers and friendly guidance. Think of
                            Jesse as your always-on vacation buddy, dedicated to making your trip effortless and unforgettable.
                            Jesse is your personal digital assistant, always ready to help you make the most of your stay with Beach
                            Bums Inn & Suites. From recommending the best local restaurants and beach spots to helping you check.
                        </p>
                    </div>
                </div>
        </PageContainer>
    )
}

export default AboutJesse
