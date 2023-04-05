import React from 'react';
import ProductsSlider from './ProductsSlider';
import { product } from './data';

const Products = () => {
    const { title, subtitle } = product;
    return (
        <section className='section mt-20'>
            <div className='container mx-auto border-2 border-solid'>
                <div className='flex flex-col gap-y-4'>
                    <h3 className='font-bold text-2xl'>{title}</h3>
                    <p className='text-justify'>{subtitle}</p>
                    <ProductsSlider />
                </div>
            </div>
        </section>
    );
};

export default Products;
