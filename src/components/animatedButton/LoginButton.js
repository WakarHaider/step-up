import React, { useState } from 'react';

const LoginButton = ({ onClick, status }) => {
    const [clicked, setClicked] = useState(false);
    console.log("🚀 ~ LoginButton ~ clicked:", clicked)
    const [animationComplete, setAnimationComplete] = useState(false); // To track when the animation ends
    console.log("🚀 ~ LoginButton ~ animationComplete:", animationComplete)

    const handleClick = (e) => {
        e.preventDefault(); // Prevent default behavior if it's inside a form
        setClicked(true);

        // Start the animation and set a delay for changing the text and color
        setTimeout(() => {
            setAnimationComplete(true);
            setClicked(false);
        }, 1800);

        setTimeout(() => {
            setAnimationComplete(true);
            setClicked(false);
        }, 1800);
        setAnimationComplete(false);

        if (onClick) onClick(e);
    };

    return (
        <button
            onClick={handleClick}
            className={`relative  py-3 text-white 
                ${animationComplete && status === true ? "bg-green-500" : animationComplete && status === false ? "bg-red-500" : "bg-indigo-500"} 
                font-semibold rounded-lg overflow-hidden transition-all duration-100 w-full  
                ${clicked ? 'animate-slide-out' : 'animate-slide-in'}`}
        >
            <span className={`${animationComplete ? 'spin' : ''} animate-spin`}>
                {animationComplete ? (status ? 'Welcome' : 'Error') : 'Login'}
            </span>
        </button>
    );
};

export default LoginButton;
