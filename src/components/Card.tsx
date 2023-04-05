import React from 'react';
import Image from 'next/image';
import { productslider } from './data';

const Card = () => {
    const { pages } = productslider;
    return (
        <div>
            {pages.map((item, index) => {
                return (
                    <div key={index}>
                        {item.productList.map((itemlist, index) => {
                            const { src, title, price } = itemlist;
                            return (
                                <div key={index}>
                                    <Image src={src} alt='' width={200} height={100} />
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default Card;
