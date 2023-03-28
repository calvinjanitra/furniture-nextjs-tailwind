import React from 'react';
import ProductsSlider from './ProductsSlider';

const Products = () => {
    return (
        <div className='section mt-20'>
            <div className='container mx-auto border-2 border-solid'>
                <div className='flex flex-col gap-y-4'>
                    <h3 className='font-bold text-2xl'>All Products</h3>
                    <p className='text-justify'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias fugit necessitatibus quod fugiat dolorum mollitia velit deleniti quisquam nulla rerum! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Suscipit, corporis! Distinctio quo delectus beatae eveniet odit cupiditate, amet alias ipsam.
                    </p>
                    <ProductsSlider />
                </div>
            </div>
        </div>
    );
};

export default Products;
