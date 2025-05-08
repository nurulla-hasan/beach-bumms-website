"use client";

import Image from "next/image";
import PageContainer from "../PageContainer/PageContainer";

const WhatWeDoSection = () => {
  return (
    <PageContainer>
      <div className="xl:space-y-10 md:space-y-6 space-y-4">
        <h1 className="2xl:text-5xl md:text-4xl text-2xl font-bold text-about_title">What We Do</h1>
        <Image
          src="/images/what-we-do.png"
          alt="Team"
          width={1200}
          height={600}
          className="w-full rounded-xl"
        />
        <p className="text-gray-700 md:text-2xl text-sm leading-relaxed">
          When you stay at Beach Bumms Inn and Suites, the stunning views and relaxing vibes are just the beginning. The surrounding area is full of fun, adventure, and beauty just waiting to be explored. Whether you're a thrill-seeker or a laid-back lounger, here are five must-do activities to make your stay truly memorable:
        </p>
      </div>
    </PageContainer>
  );
};

export default WhatWeDoSection;
