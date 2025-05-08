"use client";
import PageContainer from "@/components/PageContainer/PageContainer";
import { commandments } from "@/data/data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const CommandmentsSection = () => {
    const [visibleItems, setVisibleItems] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView && visibleItems < commandments.length) {
            const interval = setInterval(() => {
                setVisibleItems((prev) => {
                    if (prev < commandments.length) return prev + 1;
                    clearInterval(interval);
                    return prev;
                });
            }, 300); // delay between items
            return () => clearInterval(interval);
        }
    }, [inView, visibleItems]);

    return (
        <PageContainer>
            <div className="z-[-50] min-h-[1000px]" ref={ref}>
                <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-8">
                    Jesse’s 10 Commandments
                </h2>
                <ul className="space-y-4">
                        {commandments.slice(0, visibleItems).map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, y: 500 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                viewport={{ once: false }}
                                className="flex items-start gap-6 p-3 bg-[#effbff] rounded-lg"
                            >
                                <span>{item.icon}</span>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-sm md:text-xl font-semibold text-[#003366]">{item.title}</h3>
                                    <p className=" text-xs md:text-sm text-gray-800">{item.text}</p>
                                </div>
                            </motion.li>
                        ))}
                </ul>
            </div>
        </PageContainer>
    );
};

export default CommandmentsSection;
