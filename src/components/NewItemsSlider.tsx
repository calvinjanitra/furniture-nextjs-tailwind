import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

import Image1 from '../../public/item-1.png';
import Image2 from '../../public/item-2.png';
import Image3 from '../../public/item-3.png';

import { newitemslider } from './data';
import { newitem } from './data';

const NewItemsSlider = () => {
    return (
        <Swiper
            loop={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
                bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            grabCursor={true}
            slidesPerView='auto'
            breakpoints={{
                320: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
                960: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
            }}>
            {newitemslider.map((item, index) => {
                const { src, title } = item;
                return (
                    <SwiperSlide key={index}>
                        <div className='relative text-white text-lg font-medium'>
                            <Image src={src} alt='' height={500} width={300} />
                            <h3 className='absolute bottom-6 w-full text-center'>{title}</h3>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default NewItemsSlider;
