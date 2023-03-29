import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image1 from '../../public/item-1.png';
import Image2 from '../../public/item-2.png';
import Image3 from '../../public/item-3.png';
import { newitemslider } from '../pages/data';
import Image from 'next/image';

const NewItemsSlider = () => {
    return (
        <Swiper
            grabCursor={true}
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
            {newitemslider.map((items, index) => {
                const { src, title } = items;
                return (
                    <SwiperSlide key={index} className='max-w-[265px]'>
                        <div className='relative'>
                            <Image src={src} alt='' width={400} height={100} />
                            <div className='absolute text-white bottom-2 text-center w-full text-lg'>{title}</div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default NewItemsSlider;
