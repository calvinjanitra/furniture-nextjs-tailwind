import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image1 from '../../public/item-1.png';
import Image2 from '../../public/item-2.png';
import Image3 from '../../public/item-3.png';

const products = [
    {
        product: 'Chair',
        img: 'Image1',
        description: 'Lorem lorem',
        price: '',
    },
    {
        product: 'Sofa',
        img: 'Image2',
        description: 'Lorem lorem',
        price: '',
    },
    {
        product: 'Table',
        img: 'Image3',
        description: 'Lorem lorem',
        price: '',
    },
    {
        product: 'Table',
        img: 'Image4',
        description: 'Lorem lorem',
        price: '',
    },
];
const NewItemsSlider = () => {
    return (
        <Swiper
            grabCursor={true}
            breakpoints={{
                320: {
                    slidesPerView: 2,
                    spaceBetween: 18,
                },
            }}>
            {products.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div>
                            <img src={item.img} alt='' />
                            <h4>{item.product}</h4>
                            <p>{item.description}</p>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default NewItemsSlider;
