import React from 'react'
import NewItemsSlider from './NewItemsSlider'
import { AiOutlineArrowRight } from 'react-icons/ai'

const NewItems = () => {
    return (
        <section className='w-full border-solid border-2'>
            <div className='container mx-auto pt-[128px]'>
                <div className='flex flex-col lg:flex-row border-solid border-2'>
                    <div
                        className='w-[30%] border-solid border-2 flex flex-col
                    gap-y-4'>
                        <h2 className='text-3xl font-bold w-[50%]'>Hot Deals in Store</h2>
                        <p>Get the lastest items immediately with Coupons and Promos</p>
                        <div className='pt-10 hover:scale-110 duration-300 transition-all'>
                            <a href='#' className='flex items-center gap-x-2 border-solid border-2 px-6 py-2 rounded-lg bg-[rgba(255,255,255,0.4)] backdrop-blur-lg'>
                                Check All
                                <AiOutlineArrowRight />
                            </a>
                        </div>
                    </div>
                    <NewItemsSlider />
                </div>
            </div>
        </section>
    )
}

export default NewItems
