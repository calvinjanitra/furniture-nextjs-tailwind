import React from 'react'

const Stats = () => {
    return (
        <div className='bg-accent rounded-[20px] px-8 py-6 w-[800px]'>
            <div className='flex flex-wrap gap-x-6 items-center justify-between'>
                <div className='flex flex-col gap-y-2 items-center'>
                    <div className='text-3xl font-bold'>7</div>
                    <div className='w-[100px] font-light text-center'>Year Experience</div>
                </div>
                <div className='flex flex-col items-center gap-y-2'>
                    <div className='text-3xl font-bold'>2</div>
                    <div className='w-[100px] font-light text-center'>Branches in Country</div>
                </div>
                <div className='flex flex-col items-center gap-y-2'>
                    <div className='text-3xl font-bold'>10K+</div>
                    <div className='w-[100px] font-light text-center'>Furniture have Sold</div>
                </div>
                <div className='flex flex-col items-center gap-y-2'>
                    <div className='text-3xl font-bold'>260+</div>
                    <div className='w-[100px] font-light text-center'>Variant Furniture</div>
                </div>
            </div>
        </div>
    )
}

export default Stats
