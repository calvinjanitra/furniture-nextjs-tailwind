import React from 'react';
import { navigation } from '../pages/data';

const NavMobile = () => {
    return (
        <nav className='bg-white w-full h-full shadow-2xl pt-10 pl-6'>
            <ul className='capitalize flex flex-col gap-y-12 text-center'>
                {navigation.map((item, index) => {
                    const { name, href } = item;
                    return (
                        <li key={index} className='text-lg'>
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
