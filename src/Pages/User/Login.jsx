import React, { useContext, useState } from 'react';
import { RiLoginCircleLine } from 'react-icons/ri'; // Using React Icons for login button
import { HiOutlineMail } from "react-icons/hi";
import { IoKeyOutline } from "react-icons/io5";
import { FaRegFaceRollingEyes } from "react-icons/fa6";
import { PiSmileyXEyes } from "react-icons/pi";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useOutletContext } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {
    const [isPassword, setIsPassword] = useOutletContext();
    const { signInUser } = useContext(AuthContext);
    const [error, setError] = useState(false);

    const handleForm = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInUser(email, password)
            .then(success => {
                setError(false);
                console.log(success.user)
            })
            .catch(error => {
                setError(true);
                console.log(error.message)
            })
    };


    return (
        <div>
            <h2 className="text-2xl font-cinzel font-extrabold uppercase mb-4">
                Welcome Back
            </h2>
            <form onSubmit={handleForm}>
                <div className={`mb-4 flex items-center border rounded-md p-2 ${error && 'border-red-500'}`}>
                    <HiOutlineMail className="mr-2" />
                    <input defaultValue={"hm2964133@gmail.com"} type="email" name='email' placeholder="Email" required className="flex-1 outline-none" />
                </div>

                <div className={`mb-4 flex items-center border rounded-md p-2 ${error && 'border-red-500'}`}>
                    <IoKeyOutline className="mr-2" />
                    <input defaultValue={"admin123"} type={isPassword ? "password" : "text"} name='password' required placeholder="Password" className="flex-1 outline-none" />
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
                    {
                        error && <p className='text-red-500 mb-4'>Wrong Info, Try Again!</p>
                    }
            <SocialLogin />
        </div>
    );
};

export default Login;