import React from 'react';
import { stat } from './data';
import CountUp from 'react-countup';

const Stats = () => {
    return (
        <div className='bg-accent rounded-[20px] px-8 py-4 w-[800px]'>
            <div className='flex flex-wrap gap-x-6 items-center justify-between'>
                {stat.map((item, index) => {
                    const { title, subtitle } = item;
                    return (
                        <div className='flex flex-col gap-y-2 items-center' key={index}>
                            <CountUp start={0} end={title} delay={0.2}>
                                {({ countUpRef }) => (
                                    <div className='text-3xl font-bold'>
                                        <span ref={countUpRef}></span>
                                    </div>
                                )}
                            </CountUp>
                            <div className='w-[100px] font-light text-center'>{subtitle}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Stats;
