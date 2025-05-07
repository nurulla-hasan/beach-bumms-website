import PageContainer from '@/components/PageContainer/PageContainer';
import { aboutCards } from '@/data/data';

const AboutUs = () => {
    return (
        <PageContainer>
            <section className="bg-white py-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-12">About Us</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {aboutCards.map((card, index) => (
                        <div key={index} className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
                            <p className="text-sm text-gray-700">{card.description}</p>
                            <button className="mt-2 px-4 py-2 bg-primary hover:bg-sky-700 text-white text-sm font-semibold rounded cursor-pointer">
                                LEARN MORE
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </PageContainer>
    );
};

export default AboutUs;
