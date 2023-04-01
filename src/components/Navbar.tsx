import React from 'react';
import { useState, useEffect } from 'react';
import Logo from '../../public/logo.svg';
import { CgMenuRight, CgClose } from 'react-icons/cg';

import { navigation } from '../pages/data';

import NavMobile from './NavMobile';

const Navbar = () => {
    const [bg, setBg] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);
    const [fc, setFc] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 100 ? setBg(true) : setBg(false);
        });
    });
    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 800 ? setFc(true) : setFc(false);
        });
    });
    return (
        <header className={`${bg ? 'bg-white bg-transparent py-4 lg:py-6 backdrop-blur-lg text-black' : 'bg-none'} fixed left-0 w-full py-8 z-10`}>
            <div className='container mx-auto flex justify-between items-center'>
                <div className={`${fc ? 'text-black' : 'text-white'} font-semibold text-xl h-6 lg:h-8`}>
                    <a href='#'>FurniShop</a>
                </div>
                <div onClick={() => setMobileNav(!mobileNav)} className='text-white text-2xl lg:hidden cursor-pointer'>
                    {mobileNav ? <CgClose /> : <CgMenuRight />}
                </div>
                <nav className='hidden lg:flex'>
                    <ul className='lg:flex lg:gap-x-12'>
                        {navigation.map((item, index) => {
                            const { name, href } = item;
                            return (
                                <li key={index}>
                                    <a href={href} className='capitalize text-white hover:border-b transition-all'>
                                        {name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <div className={`${mobileNav ? 'left-0' : '-left-full'} lg:hidden fixed  w-full max-w-xs bottom-0 h-screen transition-all duration-500`}>
                    <NavMobile />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
