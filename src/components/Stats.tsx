import React from 'react';
import { stat } from '../pages/data';

const Stats = () => {
    return (
        <div className='bg-accent rounded-[20px] px-8 py-4 w-[800px]'>
            <div className='flex flex-wrap gap-x-6 items-center justify-between'>
                {stat.map((item, index) => {
                    const { title, subtitle } = item;
                    return (
                        <div className='flex flex-col gap-y-2 items-center' key={index}>
                            <div className='text-3xl font-bold'>{title}</div>
                            <div className='w-[100px] font-light text-center'>{subtitle}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Stats;
