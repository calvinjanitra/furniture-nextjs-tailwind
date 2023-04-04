import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
    example: string;
    exampleRequired: string;
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
                <div className='text-center'>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-12'>
                        <input defaultValue='text' {...register('example')} />
                        <input {...(register('exampleRequired'), { required: true })} />
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input type='submit' />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
