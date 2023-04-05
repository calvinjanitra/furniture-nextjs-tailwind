import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
    name: string;
    username: string;
    password: string;
};

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <section className='section bg-[url("/newsletter.png")] min-h-[450px] mt-20'>
            <div className='container mx-auto flex flex-col items-center pt-8 gap-y-8 text-white'>
                <div>
                    <h3 className='text-3xl w-[450px] text-center'>Get more discount off your order!</h3>
                </div>
                <div className='w-[80%] lg:w-[40%]'>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-4 text-black'>
                        <div className='flex flex-col gap-y-1'>
                            <label className='text-white text-lg'>Name</label>
                            <input type='text' placeholder='Enter your name here' {...register('name')} className='h-[40px] rounded-lg px-4' />
                        </div>
                        <div className='flex flex-col gap-y-1'>
                            <label className='text-white text-lg'>Email</label>
                            <input type='text' placeholder='Enter your Email here' {...register('username', { pattern: /^[A-Za-z]+$/i })} className='h-[40px] rounded-lg px-4' />
                            <p className='text-red-500'>{errors.username?.message}</p>
                        </div>
                        <div className='w-full flex justify-center text-white mt-4'>
                            <button className='text-lg font-medium w-full border-2 px-4 py-1 rounded-xl h-[40px] hover:bg-primary bg-[#43919a] bg-opacity-75' type='button' onClick={() => {}}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
