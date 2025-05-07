import PageContainer from '@/components/PageContainer/PageContainer';
import { aboutCards } from '@/data/data';

const AboutUs = () => {
    return (
        <PageContainer>
                <h2 className="text-3xl font-bold text-title_color mb-12">About Us</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {aboutCards.map((card, index) => (
                        <div key={index} className="flex flex-col gap-4">
                            <h3 className="text-xl font-semibold text-title_color">{card.title}</h3>
                            <p className="text-sm text-gray-700 grow">{card.description}</p>
                            <button className="mt-2 w-1/3 py-2 bg-primary hover:bg-sky-700 text-white text-sm font-semibold rounded cursor-pointer">
                                LEARN MORE
                            </button>
                        </div>
                    ))}
                </div>
        </PageContainer>
    );
};

export default AboutUs;
