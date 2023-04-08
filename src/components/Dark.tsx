import React from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { useState } from 'react';

const Dark = () => {
    const [darkMode, setDarkmode] = useState(false);
    const handleDarkModeToggle = () => {
        setDarkmode(!darkMode);
    };

    return (
        <div>
            <button onClick={handleDarkModeToggle} className='text-2xl text-white'>
                {darkMode ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
            </button>
        </div>
    );
};

export default Dark;
