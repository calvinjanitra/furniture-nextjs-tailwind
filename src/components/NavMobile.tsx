import React from 'react';
import { navigation } from './data';

const NavMobile = () => {
    return (
        <nav className='bg-white w-full h-[100%] pt-10 pl-6 flex flex-col'>
            <ul className='capitalize flex flex-col gap-y-12'>
                {navigation.map((item, index) => {
                    const { name, href } = item;
                    return (
                        <li key={index} className='text-lg font-bold'>
                            <a href={href} className='hover:border-b-2'>
                                {name}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavMobile;
