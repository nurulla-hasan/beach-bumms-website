
const Hero = () => {
    return (
        <div className='max-w-7xl mx-auto px-2'>
            <div className='w-full h-[calc(100vh-96px)] rounded-4xl overflow-hidden'>
                <iframe
                    className='w-full h-full'
                    src="https://www.youtube.com/embed/J2grFKR2188"
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