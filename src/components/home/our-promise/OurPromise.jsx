"use client";
import PageContainer from '@/components/PageContainer/PageContainer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Mousewheel } from 'swiper/modules';
import { promises } from "@/data/data";



const OurPromise = () => {
    return (

        <PageContainer>
            <h2 className="text-4xl font-bold mb-4 text-title_color">Our Promise</h2>
            <p className="text-gray-500 mb-12 max-w-2xl">
                Here's what you can expect when you travel with Beach Bumms.
            </p>

            <div className="h-40 border border-gray-300 rounded-2xl overflow-hidden">
                <Swiper
                    direction="vertical"
                    pagination={{ clickable: true }}
                    mousewheel={true}
                    modules={[Pagination, Mousewheel]}
                    className="h-full"
                >
                    {promises.map((promise, index) => (
                        <SwiperSlide key={index}>
                            <div
                                key={index}
                                className="flex gap-4 items-center justify-center h-full px-4 bg-[#f3fbff]"
                            >
                                <div className='flex items-center gap-4'>
                                    <div className="mb-4">{promise.icon}</div>
                                    <div>
                                        <h3 className="md:text-3xl text-lg font-semibold text-[#003366]">{promise.title}</h3>
                                        <p className="md:text-lg text-xs text-gray-600">{promise.description}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="mt-12 text-center">
                <button className="bg-primary text-white px-6 py-2 text-sm font-semibold rounded hover:bg-hover_color transition cursor-pointer">
                    LEARN MORE
                </button>
            </div>
        </PageContainer >
    );
}

export default OurPromise

