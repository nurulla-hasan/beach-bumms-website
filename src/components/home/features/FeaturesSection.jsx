"use client";
import PageContainer from "@/components/PageContainer/PageContainer";
import { features } from "@/data/data";
import Image from "next/image";

const FeaturesSection = () => {
  return (
    <PageContainer>
      <section className="py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-[#003366] mb-12">
          Top 7 reasons of what makes us different
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10 text-left">
          {features.map((item, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="min-w-[50px]">
                <Image src={item.icon} alt={item.title} width={50} height={50} />
              </div>
              <div>
                <h3 className="text-md font-semibold text-[#003366]">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-primary text-white px-6 py-2 text-sm font-semibold rounded hover:bg-[#007bbd] transition cursor-pointer">
            LEARN MORE
          </button>
        </div>
      </section>
    </PageContainer>

  );
};

export default FeaturesSection;
