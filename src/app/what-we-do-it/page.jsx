import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import BeachBonfireNights from '@/components/what-we-do-it/BeachBonfireNights';
import MorningYogaOnTheSand from '@/components/what-we-do-it/MorningYogaOnTheSand';
import WhatWeDoItSection from '@/components/what-we-do-it/WhatWeDoItSection';

const WhatWeDoIt = () => {
    return (
        <>
            <div>
                <Breadcrumb />
                <WhatWeDoItSection />
                <BeachBonfireNights />
                <MorningYogaOnTheSand />
            </div>
        </>
    );
};

export default WhatWeDoIt;