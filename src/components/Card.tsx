import React from 'react';
import Image from 'next/image';
import { productslider } from '../pages/data';

const Card = () => {
    const { pages } = productslider;
    return (
        <div>
            {pages.map((item, index) => {
                return (
                    <div>
                        {item.productList.map((itemlist, index) => {
                            const { src, title, price } = itemlist;
                            return (
                                <div>
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
