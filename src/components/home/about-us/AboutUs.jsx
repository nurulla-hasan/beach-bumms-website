import PageContainer from '@/components/PageContainer/PageContainer';
import { aboutCards } from '@/data/data';
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";

const AboutUs = () => {
    return (
        <PageContainer>
            <h2 className="text-3xl font-bold text-title_color mb-6 md:mb-12">About Us</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {aboutCards.map((card, index) => (
                    <div key={index} className="flex flex-col gap-2 md:gap-4">
                        <h3 className="text-xl font-semibold text-title_color">{card.title}</h3>
                        <p className="text-sm text-gray-700 grow">{card.description}</p>

                        <div className='relative text-xs font-medium bg-primary hover:bg-hover_color w-28 hover:w-34 mt-2 py-3 px-4 rounded text-white cursor-pointer group transition-all duration-300'>
                            <Link href={card.link} className="transition-all duration-300">LEARN MORE</Link>
                            <FaArrowRightLong size={16} color='#ffffff' className="absolute top-3 right-3 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </PageContainer>
    );
};

export default AboutUs;
