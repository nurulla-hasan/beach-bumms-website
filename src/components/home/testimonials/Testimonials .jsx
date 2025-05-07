"use client";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import PageContainer from "@/components/PageContainer/PageContainer";

const testimonials = [
    {
        name: "Ali Tuhin",
        country: "Bangladesh",
        avatar: "/images/avatar.png",
        text: "The resort is very beautiful. I had been really enjoy with my family! The team is very professional and taking care of the customers. Will surely recommend to my friend to visit this resort!",
    },
    {
        avatar: "/images/avatar.png",
    },
    {
        avatar: "/images/avatar.png",
    },
    {
        avatar: "/images/avatar.png",
    },
    {
        avatar: "/images/avatar.png",
    },
];

const Testimonials = () => {
    return (
        <PageContainer>
                <section className="p-4 rounded-xl border border-gray-300">
                    <h2 className="text-2xl font-semibold text-[#003366] mb-6">Testimonials</h2>
                    <FaQuoteLeft className="text-primary w-10 h-10 mx-auto mb-6" />

                    <p className="max-w-2xl mx-auto text-gray-700 text-[15px] mb-10">
                        {testimonials[0].text}
                    </p>
                    <div className="text-sm text-gray-700 text-center mb-4">
                        <div className="font-semibold">{testimonials[0].name}</div>
                        <div>{testimonials[0].country}</div>
                    </div>
                    <div className="flex justify-center gap-4 mb-2">

                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className={`w-12 h-12 p-[2px] rounded-full overflow-hidden ${index === 0 ? "ring-2 ring-primary" : "border-transparent"
                                    }`}
                            >
                                <Image
                                    src={item.avatar}
                                    alt={`User ${index + 1}`}
                                    width={48}
                                    height={48}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        ))}
                    </div>


                </section>
        </PageContainer>
    );
};

export default Testimonials;
