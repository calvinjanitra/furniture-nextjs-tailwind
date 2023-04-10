import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
import { productslider } from './data';
import Image from 'next/image';
import Card from './Card';
import { HiPlus } from 'react-icons/hi';
const ProductsSlider = () => {
    const { pages } = productslider;
    return (
        <Swiper grabCursor={true} modules={[Navigation, Pagination]} pagination={{ clickable: true }} navigation={true}>
            {pages.map((page, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className='grid grid-cols-2 w-full md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-2'>
                            {page.productList.map((product, index) => {
                                const { src, title, price } = product;
                                return <Card key={index} src={src} title={title} price={price} />;
                            })}
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default ProductsSlider;
