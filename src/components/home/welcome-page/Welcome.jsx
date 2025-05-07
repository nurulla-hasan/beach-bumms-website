import PageContainer from '@/components/PageContainer/PageContainer';
import Image from 'next/image';
import React from 'react';

const Welcome = () => {
    return (
        <PageContainer>
            <div className='md:py-10'>
                <h1 className='md:text-8xl text-5xl text-center font-semibold mb-8'>
                    Welcome to
                </h1>
                <div className='flex flex-col justify-center items-center gap-5'>
                    <Image
                        src="/images/logo-title.svg"
                        width={500}
                        height={500}
                        alt=''
                        className='md:w-[650px] w-80'
                    />
                    <Image
                        src="/images/nav-logo.svg"
                        width={500}
                        height={500}
                        alt=''
                        className='md:w-[400px] w-52'
                    />
                </div>
            </div>
        </PageContainer>
    );
};

export default Welcome;