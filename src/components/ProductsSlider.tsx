import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';
import { productslider } from '../pages/data';
import Image from 'next/image';
import Card from './Card';

const ProductsSlider = () => {
    const { pages } = productslider;
    return (
        <Swiper grabCursor={true}>
            {pages.map((item, index) => {
                return (
                    <SwiperSlide>
                        <div>
                            <Card />
                            {/* {item.productList.map((product, index) => {
                                const { src, title } = product;
                                return (
                                    <div>
                                        <div>
                                            <Image src={src} alt='' width={200} height={100} />
                                        </div>
                                    </div>
                                );
                            })} */}
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default ProductsSlider;
