import PageContainer from '@/components/PageContainer/PageContainer';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <>
            <div className=''>
                <Image
                    src='/images/hero.png'
                    width={3640}
                    height={2040}
                    alt=''
                    className='md:w-full md:h-[calc(100vh-96px)]'
                />
            </div>
        </>
    );
};

export default Hero;