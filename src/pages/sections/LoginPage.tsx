import React, { useState } from 'react';
import { BiHide } from 'react-icons/bi';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import Link from 'next/link';

const LoginPage = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <section className='min-h-screen'>
            <div className='relative min-h-screen bg-primary flex items-center justify-center bg-[url("/loginpage.png")] bg-cover'>
                <div className='border-2 border-solid justify-center px-4 text-green w-[400px] h-[431px] text-white rounded-2xl bg-linea bg-opacity-80'>
                    <div className='flex flex-col gap-y-4 p-4'>
                        <div className='text-3xl font-semibold text-center flex flex-col gap-y-4 pt-2'>
                            <h3 className='text-[36px] font-bold tracking-wide'>LOGIN</h3>
                            <hr className='border-2' />
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <label className='text-xl'>Email</label>
                            <input type='text' placeholder='Enter your email here' className='px-2 py-2 text-black rounded-xl' />
                        </div>
                        <div className='flex flex-col gap-y-2 relative'>
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
                        <a href='#' className='text-[#454443] hover:text-purple-700 underline'>
                            Forgot Password?
                        </a>
                        <Link href='/' className='flex flex-col items-center gap-y-2 pt-6'>
                            <button className='w-full text-xl bg-[#775551] rounded-xl py-1 font-semibold'>
                                <span>Next</span>
                            </button>
                        </Link>
                        <div className='text-center'>
                            <Link href='RegisterPage' className='text-[#395FA9] underline'>
                                Register Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
