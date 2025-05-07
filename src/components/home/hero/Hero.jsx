import PageContainer from '@/components/PageContainer/PageContainer';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <PageContainer>
            <div className='pt-6'>
                <Image
                    src='/images/hero.png'
                    width={500}
                    height={500}
                    alt=''
                    className='md:w-full md:h-[700px] rounded-2xl'
                />
            </div>
        </PageContainer>
    );
};

export default Hero;