import React from 'react';
import Stats from '../../components/Stats';
import { hero } from '../../components/data';

const Hero = () => {
    const { title, subtitle } = hero;
    return (
        <section className='bg-[url("/hero-bg.png")] bg-cover h-[850px] bg-no-repeat text-white bg-center'>
            <div className='container mx-auto flex flex-col items-center justify-center h-full sm:pb-10 lg:pb-20 gap-y-8 lg:gap-y-[4.5rem] relative'>
                <h1 className='text-2xl mx-auto font-semibold lg:text-[64px] lg:leading-tight lg:max-w-[1000px] text-center'>{title}</h1>
                <h2 className='text-center text-xl lg:text-[26px]'>{subtitle}</h2>
                <button className='btn bg-[rgba(255,255,255,0.4)] px-6 lg:px-10 py-2 border-solid border-2 rounded-lg text-l lg:text-2xl hover:scale-105 transition-all duration-200 hover:bg-[rgba(255,255,255,0.5)] backdrop-blur-md'>
                    Click Here!
                </button>
                <div className='absolute bottom-0'>
                    <Stats />
                </div>
            </div>
        </section>
    );
};

export default Hero;
