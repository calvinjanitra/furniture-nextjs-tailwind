import React from 'react';
import TestimonialSlider from './TestimonialSlider';
import Image from 'next/image';
import Testi1 from '../../public/testimonial.png';
const Testimonial = () => {
    return (
        <section className='w-full mt-20'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row lg:justify-between'>
                    <div className='lg:max-w-[50%] pb-10'>
                        <h2 className='text-3xl font-bold'>What people satisfied us for</h2>
                        <TestimonialSlider />
                    </div>
                    <div>
                        <Image src={Testi1} alt='' height={600} width={500} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
