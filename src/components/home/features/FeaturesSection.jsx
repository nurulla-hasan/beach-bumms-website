"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Mousewheel } from 'swiper/modules';
import PageContainer from "@/components/PageContainer/PageContainer";
import { features } from "@/data/data";
import Image from "next/image";

const FeaturesSection = () => {
  return (
    <PageContainer>
      <h2 className="text-2xl md:text-3xl font-bold text-title_color mb-12">
        Top 7 reasons of what makes us different
      </h2>

      <div className="h-40 border border-gray-300 rounded-2xl overflow-hidden">
        <Swiper
          direction="vertical"
          pagination={{ clickable: true }}
          mousewheel={true}
          modules={[Pagination, Mousewheel]}
          className="h-full"
        >
          {features.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex gap-4 items-center justify-center h-full px-4 bg-[#f3fbff]">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="shrink-0"
                />
                <div>
                  <h3 className="md:text-xl text-lg font-semibold text-[#003366]">{item.title}</h3>
                  <p className="md:text-md text-xs text-gray-600 mt-1">{item.description}</p>
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
    </PageContainer>
  );
};

export default FeaturesSection;
