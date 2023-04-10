import React from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { useState } from 'react';
import { useTheme } from 'next-themes';

const Dark = () => {
    const [darkMode, setDarkmode] = useState(false);
    const handleDarkModeToggle = () => {
        setDarkmode(!darkMode);
    };
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <div>
            <button
                onClick={() => {
                    handleDarkModeToggle();
                    theme == 'light' ? setTheme('dark') : setTheme('light');
                    console.log(theme);
                }}
                className='text-2xl text-white'>
                {darkMode ? <BsFillSunFill /> : <BsFillMoonStarsFill />}
            </button>
        </div>
    );
};

export default Dark;
