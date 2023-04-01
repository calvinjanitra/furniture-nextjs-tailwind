import React from 'react';

const LoginPage = () => {
    return (
        <section className='min-h-screen'>
            <div className='border-2 border-purple-800 relative min-h-screen'>
                <div className='bg-[url("/hero-bg.png")] bg-cover h-[350px] bg-no-repeat'></div>
                <div className='bg-[#A79A71] bg-opacity-80 h-[490px]'></div>
                <div className='border-2 border-solid absolute justify-center px-4 text-green w-[400px] h-[431px] top-0 text-white'>
                    <div className='text-3xl font-semibold text-center'>
                        <h3>Login</h3>
                    </div>
                    <div>_______</div>
                    <div>
                        <div>Email Password</div>
                        <input type='text' />
                        <div>Forget Password</div>
                        <input type='text' />
                    </div>
                    <div>
                        <div>Next</div>
                        <div>Register Now </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
