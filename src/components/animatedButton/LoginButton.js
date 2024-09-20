import React, { useState } from 'react';

const LoginButton = ({ onClick, status }) => {
    console.log("🚀 ~ LoginButton ~ status:", status)
    const [clicked, setClicked] = useState(false);
    const [animationComplete, setAnimationComplete] = useState(false);
    console.log("🚀 ~ LoginButton ~ animationComplete:", animationComplete)

    const handleClick = (e) => {
        e.preventDefault();
        setClicked(true);
        setAnimationComplete(false);

        setTimeout(() => {
            setAnimationComplete(true);
            setClicked(false);
        }, 1800);

        if (onClick) onClick(e);
    };

    return (
        <button
            onClick={handleClick}
            className={`relative  py-3 text-white flex items-center justify-center 
                ${animationComplete && status === true ? "bg-green-500" : animationComplete && status === false ? "bg-red-500" : "bg-indigo-500"} 
                font-semibold rounded-lg overflow-hidden transition-all duration-100 w-full  
                ${clicked ? 'animate-slide-out' : 'animate-slide-in'}`}
        >
            <div className={`${animationComplete && status===true ? "animate-ping" : animationComplete && status===false ? "animate-spin" : " animate-pulse"}`}>
                {animationComplete ? (status ? 'Welcome' : 'Error') : 'Login'}
            </div>
        </button>
    );
};

export default LoginButton;
