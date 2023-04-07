import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

import Logo from '../../public/logo.svg';
import { CgMenuRight, CgClose } from 'react-icons/cg';

import { navigation } from './data';

import NavMobile from './NavMobile';

//import components
import Features from '../pages/sections/Features';
import Products from '../pages/sections/Products';
import Contact from '../pages/sections/Contact';

const Navbar = () => {
    const [bg, setBg] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 100 ? setBg(true) : setBg(false);
        });
    }, []);

    return (
        <>
            <header className={`fixed left-0 w-full z-10 min-h-[5rem] flex items-center ${bg ? 'bg-primary backdrop-blur-lg bg-opacity-90' : 'bg-none'}`}>
                <div className='container mx-auto flex justify-between items-center'>
                    <div className='font-semibold text-2xl h-6 lg:h-8 text-white'>
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
                </div>
            </header>
            <div className={`${mobileNav ? 'left-0' : '-left-full'} lg:hidden fixed  w-full max-w-xs bottom-0 h-screen transition-all duration-500 z-50 bg-white shadow-2xl flex flex-col justify-center`}>
                <NavMobile />
            </div>
        </>
    );
};

export default Navbar;
