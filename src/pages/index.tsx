import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Features from '@/components/Features';
import Hero from '@/components/Hero';
import NewItems from '@/components/NewItems';
import Products from '@/components/Products';
import Features2 from '@/components/Features2';
import LoginPage from '@/components/LoginPage';
import RegisterPage from '@/components/RegisterPage';
import Navbar from '@/components/Navbar';
import Testimonial from '@/components/Testimonial';
import Contact from '@/components/Contact';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
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
    );
}
