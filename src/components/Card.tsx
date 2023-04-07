import React from 'react';
import Image from 'next/image';
import { productslider } from './data';
import { HiPlus } from 'react-icons/hi';

interface CardProps {
    src: string;
    title: string;
    price: string;
}

const Card = ({ src, title, price }: CardProps) => {
    return (
        <div className='min-h-[450px]'>
            <div className='border-2 border-solid flex items-center h-[80%] relative hover:cursor-default p-6 hover:border-2 hover:border-[#2696a2]'>
                <Image src={src} alt='' width={300} height={400} />
                <HiPlus className='absolute bottom-4 right-4 bg-slate-300 w-6 h-6 rounded-xl p-1 hover:bg-[#2696a2] text-white' />
            </div>
            <div className='text-lg font-bold'>{title}</div>
            <div>{price}</div>
        </div>
    );
};

export default Card;
