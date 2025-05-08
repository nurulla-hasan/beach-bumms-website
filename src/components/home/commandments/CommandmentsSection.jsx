"use client";

import PageContainer from "@/components/PageContainer/PageContainer";
import { commandments } from "@/data/data";
import { motion, AnimatePresence } from "framer-motion";
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
            <div className="z-50" ref={ref}>
                <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-8">
                    Jesse’s 10 Commandments
                </h2>
                <ul className="space-y-4">
                    <AnimatePresence>
                        {commandments.slice(0, visibleItems).map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, y: 500 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.9, ease: "easeOut" }}
                                className="flex items-start gap-3 p-3 bg-[#effbff] rounded"
                            >
                                {item.icon}
                                <p className="text-xs md:text-sm text-gray-800 leading-relaxed">
                                    {item.text}
                                </p>
                            </motion.li>
                        ))}
                    </AnimatePresence>
                </ul>
            </div>
        </PageContainer>
    );
};

export default CommandmentsSection;
