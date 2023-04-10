import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Features from '@/pages/sections/Features';
import Hero from '@/pages/sections/Hero';
import NewItems from '@/pages/sections/NewItems';
import Products from '@/pages/sections/Products';
import Features2 from '@/pages/sections/Features2';
import LoginPage from '@/pages/sections/LoginPage';
import RegisterPage from '@/pages/sections/RegisterPage';
import Navbar from '@/components/Navbar';
import Testimonial from '@/pages/sections/Testimonial';
import Contact from '@/pages/sections/Contact';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <ThemeProvider attribute='class'>
            <div className='w-full mx-auto font-body'>
                <Navbar />
                {/* <LoginPage /> */}
                <Hero />
                <Features />
                <NewItems />
                <Features2 />
                <Products />
                <Testimonial />
                <Contact />
            </div>
        </ThemeProvider>
    );
}
