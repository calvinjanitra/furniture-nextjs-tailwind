import React from 'react';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import { useState } from 'react';
import Link from 'next/link';

const RegisterPage = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <section className='min-h-screen'>
            <div className='relative min-h-screen bg-primary flex items-center justify-center bg-[url("/loginpage.png")] bg-cover'>
                <div className='border-2 border-solid justify-center px-4 text-green w-[1000px] h-[47rem] text-white rounded-2xl bg-linea bg-opacity-80'>
                    <div className='flex flex-col gap-y-2 p-4'>
                        <div className='text-3xl font-semibold text-center flex flex-col gap-y-4 pt-2'>
                            <h3 className='text-[36px] font-bold tracking-wide'>REGISTER</h3>
                            <hr className='border-2' />
                        </div>
                        <div className='flex flex-col gap-y-1'>
                            <label className='text-xl'>Phone Number</label>
                            <div className='flex flex-row gap-x-3'>
                                <input type='text' placeholder='Enter your email here' className='px-2 py-2 text-black rounded-xl w-1/6' />
                                <input type='text' placeholder='Example : 08XXXXXXXXXX' className='px-2 py-2 text-black rounded-xl w-5/6' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-y-1'>
                            <label className='text-xl'>Email</label>
                            <input type='text' placeholder='Enter your email here' className='px-2 py-2 text-black rounded-xl w-full' />
                        </div>
                        <div className='flex flex-col gap-y-1'>
                            <label className='text-xl'>First Name</label>
                            <input type='text' placeholder='Enter your email here' className='px-2 py-2 text-black rounded-xl w-full' />
                        </div>
                        <div className='flex flex-col gap-y-1'>
                            <label className='text-xl'>Last Name</label>
                            <input type='text' placeholder='Enter your email here' className='px-2 py-2 text-black rounded-xl w-full' />
                        </div>
                        <div className='flex flex-col gap-y-1 relative'>
                            <label className='text-xl'>Password</label>
                            <input type={toggle ? 'text' : 'password'} placeholder='Enter your password' className='px-2 py-2 text-black rounded-xl' />
                            <button
                                className='absolute bottom-2 text-[#C2C2C2] right-4 text-2xl'
                                onClick={() => {
                                    setToggle(!toggle);
                                }}>
                                {toggle ? <VscEye /> : <VscEyeClosed />}
                            </button>
                        </div>
                        <div className='flex flex-col gap-y-1 relative'>
                            <label className='text-xl'>Confirm Password</label>
                            <input type={toggle ? 'text' : 'password'} placeholder='Enter your password' className='px-2 py-2 text-black rounded-xl' />
                            <button
                                className='absolute bottom-2 text-[#C2C2C2] right-4 text-2xl'
                                onClick={() => {
                                    setToggle(!toggle);
                                }}>
                                {toggle ? <VscEye /> : <VscEyeClosed />}
                            </button>
                        </div>
                        <p className='text-sm text-justify'>
                            We are committed to protecting and respecting your privacy. Your personal data will be used to support shopping experience and for other purposes described in our privacy policy.
                        </p>
                        <Link href='LoginPage' className='flex flex-col items-center gap-y-2 pt-2 lg:pt-6'>
                            <button className='w-full text-xl bg-[#775551] rounded-xl py-1 font-semibold'>
                                <span>Register</span>
                            </button>
                        </Link>
                        <div className='text-center'>
                            <Link href='LoginPage' className='text-[#395FA9] underline'>
                                Login Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegisterPage;
