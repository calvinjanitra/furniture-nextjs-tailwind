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
            <div className='container mx-auto border-2 border-solid flex flex-col items-center pt-8 gap-y-8 text-white'>
                <div>
                    <h3 className='text-2xl'>Get more discount off your order!</h3>
                </div>
                <div className=''>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-4 text-black'>
                        <div className='flex flex-col'>
                            <label className='text-white'>Name</label>
                            <input type='Name' {...register('name')} />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-white'>Email</label>
                            <input type='Email' {...register('username', { pattern: /^[A-Za-z]+$/i })} />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-white'>Password</label>
                            <input type='password' {...register('password', { required: 'Harus diisi' })} />
                            <p className='text-red-500'>{errors.password?.message}</p>
                        </div>
                        <div className='w-full flex justify-center text-white'>
                            <button className='border-2 px-4 py-1 rounded-xl bg-[#3b95a0] hover:bg-[#215c62]' type='button' onClick={() => {}}>
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
