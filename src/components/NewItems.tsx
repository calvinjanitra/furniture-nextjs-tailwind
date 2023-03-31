import React from 'react';
import NewItemsSlider from './NewItemsSlider';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { newitem } from '../pages/data';

const NewItems = () => {
    const { title, subtitle } = newitem;
    return (
        <section className='w-full'>
            <div className='container mx-auto mt-[128px] h-[450px]'>
                <div className='flex flex-col lg:flex-row relative'>
                    <div className='w-[100%] lg:w-[50%] flex flex-col gap-y-4'>
                        <h2 className='text-3xl font-bold w-[100%]'>{title}</h2>
                        <p>{subtitle}</p>
                        <div className='pt-10  duration-300 transition-all'>
                            <a href='#' className='lg:flex items-center gap-x-2 border-solid border-2 px-6 py-2 rounded-lg bg-[rgba(255,255,255,0.4)] backdrop-blur-lg w-[40%] hover:scale-105 transition-all lg:justify-center hidden'>
                                Check All
                                <AiOutlineArrowRight />
                            </a>
                        </div>
                    </div>
                    <div className='lg:max-w-[800px] xl:max-w-[900px] lg:absolute lg:-right-[280px]'>
                        <NewItemsSlider />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewItems;
