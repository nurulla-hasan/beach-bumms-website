"use client";
import PageContainer from '@/components/PageContainer/PageContainer';
import { commandments } from '@/data/data';

const CommandmentsSection = () => {
    return (
        <PageContainer>
            <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-8">
                Jesse’s 10 Commandments
            </h2>
            <ul className="space-y-4">
                {commandments.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 p-3 bg-[#effbff] rounded">
                        {item.icon}
                        <p className="text-xs md:text-sm text-gray-800 leading-relaxed">
                            {item.text}
                        </p>
                    </li>
                ))}
            </ul>
        </PageContainer>
    );
};

export default CommandmentsSection;
