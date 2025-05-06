import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <>
            <div className='mt-4'>
                <Image
                    src='/images/hero.png'
                    width={500}
                    height={500}
                    alt=''
                    className='md:w-full md:h-[700px]'
                />
            </div>
        </>
    );
};

export default Hero;