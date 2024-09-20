import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (
        <div className="flex flex-col justify-between bg-indigo-400 text-white h-screen w-full max-w-[250px] px-2 shadow-2xl">
            <ul className="flex flex-col space-y-10 items-center bg-red-00">
                <button className=''>logo</button>
                <li className='flex justify-center items-center bg-white text-indigo-600 hover:text-white hover:bg-indigo-600 px-4 py-2 w-full rounded-md border border-px border-indigo-600 hover:border-white hover:shadow-2xl'><Link to="/home">Home</Link></li>
                <li className='flex justify-center items-center bg-white text-indigo-600 hover:text-white hover:bg-indigo-600 px-4 py-2 w-full rounded-md border border-px border-indigo-600 hover:border-white hover:shadow-2xl'><Link to="/sold">Sold Books</Link></li>
                <li className='flex justify-center items-center bg-white text-indigo-600 hover:text-white hover:bg-indigo-600 px-4 py-2 w-full rounded-md border border-px border-indigo-600 hover:border-white hover:shadow-2xl'><Link to="/out-of-stock">Out of Stock</Link></li>
                <li className='flex justify-center items-center bg-white text-indigo-600 hover:text-white hover:bg-indigo-600 px-4 py-2 w-full rounded-md border border-px border-indigo-600 hover:border-white hover:shadow-2xl'><Link to="/new-addition">New addition</Link></li>
                <li className='flex justify-center items-center bg-white text-indigo-600 hover:text-white hover:bg-indigo-600 px-4 py-2 w-full rounded-md border border-px border-indigo-600 hover:border-white hover:shadow-2xl'><Link to="/settings">Settings</Link></li>
            </ul>
            <button className='flex justify-center items-center bg-white text-indigo-600 hover:text-white hover:bg-indigo-600 px-4 py-2 w-full rounded-md border border-px border-indigo-600 mb-5 hover:border-white'>Logout</button>
        </div>
    );
};

export default SideBar;