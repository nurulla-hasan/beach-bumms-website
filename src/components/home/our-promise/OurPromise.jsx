"use client";
import PageContainer from '@/components/PageContainer/PageContainer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Mousewheel, Autoplay } from 'swiper/modules';
import { promises } from "@/data/data";
import { FaArrowRightLong } from 'react-icons/fa6';



const OurPromise = () => {
    return (

        <PageContainer>
            <h2 className="text-4xl font-bold mb-4 text-title_color">Our Promise</h2>
            <p className="text-gray-500 mb-12 max-w-2xl">
                Here's what you can expect when you travel with Beach Bumms.
            </p>

            <div className="h-40 border border-gray-300 rounded-2xl overflow-hidden">
                <Swiper
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    direction="vertical"
                    pagination={{ clickable: true }}
                    mousewheel={true}
                    modules={[Pagination, Mousewheel, Autoplay]}
                    className="h-full"
                >
                    {promises.map((promise, index) => (
                        <SwiperSlide key={index}>
                            <div className="flex gap-4 items-center justify-center h-full px-4 bg-[#f3fbff]">
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

            <div className="mt-12 flex justify-center">
                <div className='relative text-xs font-medium bg-primary hover:bg-hover_color w-28 hover:w-34 mt-2 py-2 px-4 rounded text-white cursor-pointer group transition-all duration-300'>
                    <span className="transition-all duration-300">LEARN MORE</span>
                    <FaArrowRightLong size={16} color='#ffffff' className="absolute top-2 right-3 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                    />
                </div>
            </div>
        </PageContainer >
    );
}

export default OurPromise

