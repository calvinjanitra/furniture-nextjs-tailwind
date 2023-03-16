import React from 'react'
import Image from 'next/image'
import Image1 from '../../public/features-1.png'
import Image2 from '../../public/features-2.png'
import { AiFillCheckCircle } from 'react-icons/ai'
const Features = () => {
    return (
        <section className='section min-h-[600px] bg-white text-black'>
            <div className='container mx-auto pt-[128px] '>
                <div className='flex flex-col lg:flex-row lg:gap-x-14 justify-between'>
                    <div className='order-1'>
                        <Image src={Image1} alt='' />
                    </div>
                    <div className='text-black lg:order-6  lg:w-[50%] flex flex-1 flex-col justify-end text-justify gap-y-4 lg:justify-start mb-2 lg:mb-0'>
                        <h2 className='font-bold text-xl lg:text-3xl'>Comfort Plus: The Ultimate Sofa for Relaxation</h2>
                        <p className='lg:text-xl pt-4 lg:pt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore quae iste aliquid ipsum repellat hic modi, magnam impedit nemo veritatis.</p>
                        <div className='flex flex-row'>
                            <AiFillCheckCircle className='text-2xl mr-4 mt-1' />
                            <p className='lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptates?</p>
                        </div>
                        <div className='flex flex-row'>
                            <AiFillCheckCircle className='text-2xl mr-4 mt-1' />
                            <p className='lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptates?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
