import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    // const [stopanimation, setStopanimation] = useState(false);
    // const [status, setStatus] = useState(false);

    const navigate = useNavigate();

    // useEffect(() => {
    //     // Stop the animation after 2 seconds
    //     const timer = setTimeout(() => {
    //         setStopanimation(true);
    //     }, 2000);

    //     // Clean up timer on component unmount
    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <div className={`flex flex-col items-center min-h-screen bg-gray-200 bg-login-background bg-cover bg-center `}>
            <div className={`bg-white rounded shadow-md w-full h-fit flex justify-start items-center py-3 px-5`}>
                <h2 className="text-xl font-bold w-full"></h2>
            </div>
            <div className='flex items-center justify-center mt-36'></div>
            <div className={`flex flex-col p-6 bg-white rounded shadow-md w-full max-w-md h-fit`}>
                <button onClick={() => navigate('/login')}>
                    <h2 className="text-2xl font-bold mb-4 text-indigo-400">Login</h2>
                </button>
                <button onClick={() => navigate('/login')}>
                    <h2 className="text-2xl font-bold mb-4 text-indigo-400">Sign-Up</h2>
                </button>
            </div>
        </div>
    );
}

export default LandingPage;
