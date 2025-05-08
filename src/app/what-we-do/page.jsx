import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import BeachBonfireNights from '@/components/what-we-do/BeachBonfireNights';
import MorningYogaOnTheSand from '@/components/what-we-do/MorningYogaOnTheSand';
import WhatWeDoSection from '@/components/what-we-do/WhatWeDoSection';
import React from 'react';

const WhatWeDo = () => {
    return (
        <>
            <div>
                <Breadcrumb />
                <WhatWeDoSection />
                <BeachBonfireNights />
                <MorningYogaOnTheSand />
            </div>
        </>
    );
};

export default WhatWeDo;