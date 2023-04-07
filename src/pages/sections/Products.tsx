import React from 'react';
import ProductsSlider from '../../components/ProductsSlider';
import { product } from '../../components/data';

const Products = () => {
    const { title, subtitle } = product;
    return (
        <section className='section mt-20' id='product'>
            <div className='container mx-auto'>
                <div className='min-h-[6rem]'></div>
                <div className='flex flex-col gap-y-4'>
                    <h3 className='font-bold text-2xl'>{title}</h3>
                    <p className='text-justify text-lg'>{subtitle}</p>
                    <div className='max-w-[100%] max-h-[2000px] lg:max-h-[1600px]'>
                        <ProductsSlider />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
