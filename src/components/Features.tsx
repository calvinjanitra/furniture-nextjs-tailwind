import React from 'react';
import Image from 'next/image';
import Image1 from '../../public/features-1.png';
import Image2 from '../../public/features-2.png';
import { AiFillCheckCircle } from 'react-icons/ai';

import { feature } from '../pages/data';

const Features = () => {
    const { src, title, subtitle, item } = feature;
    return (
        <section className='section min-h-[600px] bg-white text-black'>
            <div className='container mx-auto pt-[128px] '>
                <div className='flex flex-col lg:flex-row lg:gap-x-14 justify-between'>
                    <div className='order-1'>
                        <Image src={src} alt='' width={600} height={400} />
                    </div>
                    <div className='text-black lg:order-6  lg:w-[50%] flex flex-1 flex-col justify-end text-justify gap-y-4 lg:justify-start mb-8 lg:mb-0'>
                        <h2 className='font-bold text-xl lg:text-3xl'>{title}</h2>
                        <p className='lg:text-xl pt-4 lg:pt-4'>{subtitle}</p>
                        {item.map((items, index) => {
                            const { icon, title } = items;
                            return (
                                <div className='flex flex-row'>
                                    <div className='text-2xl mr-4 mt-1'>{icon}</div>
                                    <p className='lg:text-xl'>{title}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
