import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import BeachBonfireNights from '@/components/what-we-are/BeachBonfireNights';
import MorningYogaOnTheSand from '@/components/what-we-are/MorningYogaOnTheSand';
import WhatWeAreSection from '@/components/what-we-are/WhatWeAreSection';

const WhatWeAre = () => {
    return (
        <>
            <div>
                <Breadcrumb/>
                <WhatWeAreSection />
                <BeachBonfireNights/>
                <MorningYogaOnTheSand/>
            </div>
        </>
    );
};

export default WhatWeAre;