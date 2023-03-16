import React from 'react'
import Image from 'next/image'
import Image1 from '../../public/features-1.png'
import Image2 from '../../public/features-2.png'
import { AiFillCheckCircle } from 'react-icons/ai'
const Features = () => {
    return (
        <section className='section min-h-[600px] bg-white border-solid border-2 text-black'>
            <div className='container mx-auto mt-10 border-solid border-2'>
                <div className='flex flex-col lg:flex-row lg:gap-x-4 justify-between'>
                    <div className='order-1'>
                        <Image src={Image1} alt='' />
                    </div>
                    <div className='text-black lg:order-2 border-solid border-2'>
                        <h2 text-black>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, amet!</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore quae iste aliquid ipsum repellat hic modi, magnam impedit nemo veritatis.</p>
                        <div className=''>
                            <AiFillCheckCircle />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptates?</p>
                        </div>
                        <div className=''>
                            <AiFillCheckCircle />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptates?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
