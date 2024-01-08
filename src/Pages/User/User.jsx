import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/login/login.jpg'
import loginBG from '../../assets/login/loginBg.jpg'
import { FaCircleUser } from "react-icons/fa6";
import { BiSolidMessageSquareEdit } from "react-icons/bi";
// import LoginForm from './LoginForm';

const User = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const loginOrRegister = location.pathname.split('/');
    const isLoginRegister = (loginOrRegister[loginOrRegister.length - 1]);
    const [isPassword, setIsPassword] = useState(true);
    const [toggle, setToggle] = useState(JSON.parse(localStorage.getItem('usertoggle')) || 1);

    if (isLoginRegister === 'register') {
        localStorage.setItem('usertoggle', JSON.stringify(2));
    } else {
        localStorage.setItem('usertoggle', JSON.stringify(1));
    }

    const handleLogin = () => {
        navigate('/user/login');
        setIsPassword(true);
        setToggle(1);
    }
    const handleRegister = () => {
        navigate('/user/register');
        setIsPassword(true);
        setToggle(2);
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-cover bg-center' style={{ backgroundImage: `linear-gradient(to bottom, rgb(215 214 214 / 40%), rgb(0 0 0 / 74%)), url("${loginBG}")` }}>
            <div className="min-h-[406px] flex rounded-lg" >
                {/* First div with Image */}
                <div className="w-[250px]">
                    <img src={loginImg} alt="Resturent app login" className="object-cover w-full h-full" />
                </div>

                {/* Second div with login, register, and forgot password icons */}
                <div className="flex flex-col justify-between w-[250px] border-r-2 border-gray-100	">
                    <div onClick={() => handleLogin()} className={`flex flex-col items-center justify-center gap-2 capitalize grow px-[40px] cursor-pointer duration-500 ${toggle === 1 ? 'bg-green-600 text-white' : "bg-white"}`}>
                        <FaCircleUser size={24} />
                        <span>Login</span>
                    </div>

                    <div onClick={() => handleRegister()} className={`flex flex-col items-center justify-center gap-2 capitalize grow px-[40px] cursor-pointer duration-500 ${toggle === 2 ? 'bg-green-600 text-white' : "bg-white"}`}>
                        {/* Adjust the path and size as needed */}
                        <BiSolidMessageSquareEdit size={24} />
                        <span>Register</span>
                    </div>
                </div>

                {/* Third div for login, register, and forgot form */}
                <div className="bg-white p-8 w-[600px] text-center">
                    {/* for login */}
                    <div className={toggle === 1 ? "block" : "hidden"}>
                        <Outlet context={[isPassword, setIsPassword]} />
                    </div>

                    {/* for register */}
                    <div className={toggle === 2 ? "block" : "hidden"}>
                        <Outlet context={[isPassword, setIsPassword]} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default User;