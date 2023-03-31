import React from 'react';

const LoginPage = () => {
    return (
        <section className='border-2 border-solid min-h-screen relative'>
            <div>
                <div className='bg-[url("/hero-bg.png")] bg-cover h-[350px] bg-no-repeat'></div>
                <div className='border-2 border-solid absolute top-4 text-white w-[300px] h-[331px]'>
                    <div>Login</div>
                    <div>_______</div>
                    <div>Email Password</div>
                    <div>Forget Password</div>
                    <div>Next</div>
                    <div>Register Now </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
