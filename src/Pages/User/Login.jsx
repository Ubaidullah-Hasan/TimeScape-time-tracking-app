import React, { useState } from 'react';
import { RiLoginCircleLine } from 'react-icons/ri'; // Using React Icons for login button
import { HiOutlineMail } from "react-icons/hi";
import { IoKeyOutline } from "react-icons/io5";
import { FaRegFaceRollingEyes } from "react-icons/fa6";
import { PiSmileyXEyes } from "react-icons/pi";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useOutletContext } from 'react-router-dom';

const Login = () => {
    const [isPassword, setIsPassword] = useOutletContext();


    return (
        <div>
            <h2 className="text-2xl font-cinzel font-extrabold uppercase mb-4">
                Welcome Back
            </h2>
            <form>
                <div className="mb-4 flex items-center border rounded-md p-2">
                    <HiOutlineMail className="mr-2" />
                    <input type="email" placeholder="Email" className="flex-1 outline-none" />
                </div>

                <div className="mb-4 flex items-center border rounded-md p-2">
                    <IoKeyOutline className="mr-2" />
                    <input type={isPassword ? "password" : "text"} placeholder="Password" className="flex-1 outline-none" />
                    {
                        isPassword ?
                            <FaRegFaceRollingEyes onClick={() => setIsPassword(!isPassword)} className="ms-2" />
                            :
                            <PiSmileyXEyes onClick={() => setIsPassword(!isPassword)} className="ms-2" size={19} />
                    }
                </div>

                <button type="submit" className="mb-4 duration-300 bg-green-600 hover:bg-green-700 text-white p-2 rounded-md flex items-center justify-center w-full font-bold">
                    <RiLoginCircleLine className="mr-2" />
                    Login
                </button>
            </form>

            {/* or devider */}
            <div className='mb-4 flex items-center justify-between gap-4'>
                <hr className='border border-gray-200 border-dashed	 w-[35%] ' />
                <p className='uppercase '>or login with</p>
                <hr className='border border-gray-200 border-dashed	 w-[35%] ' />
            </div>

            {/* google and facebook login */}
            <div className='flex justify-between gap-8'>
                <button className='duration-300 grow py-3 rounded-md border border-[#EA4335] hover:bg-[#EA4335] text-[#EA4335] hover:text-white flex items-center justify-center'>
                    <FaGoogle />
                </button>
                <button className='duration-300 grow py-3 rounded-md border border-[#316FF6] hover:bg-[#316FF6] text-[#316FF6] hover:text-white flex items-center justify-center'>
                    <FaFacebookF />
                </button>
            </div>
        </div>
    );
};

export default Login;