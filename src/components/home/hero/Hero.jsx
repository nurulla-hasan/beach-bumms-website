
const Hero = () => {
    return (
        <div className='md:max-w-7xl 3xl:max-w-[1400px] mx-auto md:px-4 md:pb-16'>
            <div className='w-full 3xl:h-[800px] md:h-[670px] h-[268px] md:rounded-4xl overflow-hidden mt-4 md:mt-0'>
                <iframe
                    className='w-full h-full'
                    src="https://www.youtube.com/embed/uSqV6YiLtAc?si=sjUY7cT9qquosBPG"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default Hero;