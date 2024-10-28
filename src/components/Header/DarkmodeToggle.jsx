// Med hjälp av ChatGPT

import React, { useState, useEffect } from 'react';

const DarkmodeToggle = () => {

    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedDarkMode = localStorage.getItem('darkmode');
        return savedDarkMode === 'on' || (!savedDarkMode && window.matchMedia('(prefers-color-scheme: dark)').matches);
    });

    useEffect(() => {
        const root = document.documentElement;

        if (isDarkMode) {
            root.classList.add('dark');
            localStorage.setItem('darkmode', 'on');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('darkmode', 'off');
        }
    }, [isDarkMode]);


    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
    };



  return (
    <div id="darkmode-toggle-switch" className="btn-toggle-switch" >
        <span className="label">Dark Mode</span>
        <label className="toggle-switch" for="darkmode-switch" aria-label="darkmode switch">
            <input type="checkbox" id="darkmode-switch" checked={isDarkMode} onChange={handleToggle}/>
            <span className="slider round"></span>
        </label>
    </div>
)
}

export default DarkmodeToggle
