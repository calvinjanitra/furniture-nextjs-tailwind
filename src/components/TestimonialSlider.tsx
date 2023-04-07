import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper';
import { testimonial } from './data';
import Image from 'next/image';

const TestimonialSlider = () => {
    return (
        <Swiper grabCursor={true} navigation={true} modules={[Navigation, Autoplay]} autoplay={true} className='testimonialSlider'>
            {testimonial.testi.map((item, index) => {
                const { picture, name, job, message } = item;
                return (
                    <SwiperSlide key={index} className='my-8'>
                        <div className='flex flex-col gap-y-4 px-4 min-h-[250px]'>
                            <div className='flex flex-row gap-x-8'>
                                <Image src={picture} alt='' width={80} height={20} />
                                <div>
                                    <div className='text-2xl font-bold'>{name}</div>
                                    <div>{job}</div>
                                </div>
                            </div>
                            <div className='text-justify'>{message}</div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default TestimonialSlider;
