"use client"

import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';


const Login = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [otp, setOtp] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [showOtpInput, setShowOtpInput] = useState<boolean>(false);
    const [showForgotPassword, setShowForgotPassword] = useState<boolean>(false);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
   
       
    const router = useRouter();
   

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
            const apiUrl = `${BASE_URL}/api/user/login`;
            const response = await axios.post(apiUrl, { email, password }, { withCredentials: true });

            if (!response?.data?.success) {
                toast.error('Login failed. Please try again.');
                throw new Error(response?.data?.message);

            }


            const otpApiUrl = `${BASE_URL}/api/otp/send-otp`;
            const otpResponse = await axios.post(otpApiUrl, { email }, { withCredentials: true });

            if (!otpResponse?.data?.success) {
                toast.error('Failed to send OTP. Please try again.');
                throw new Error(otpResponse?.data?.message);

            }

            setShowOtpInput(true);
            toast.success('OTP sent successfully. Please check your email.');

            const token = response.data.token;
            localStorage.setItem('jwt', token);
            console.log('Login successful, token stored in localStorage');
        } catch (error) {
            console.error('Error logging in:', error);
            setError(error.message);
        }
    };
    const handleForgotPassword = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
    
        try {
            const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
            const getUserIdUrl = `${BASE_URL}/api/admin/getuserpresnt`;
            const getUserIdResponse = await axios.get(getUserIdUrl);
    
           
            const users = getUserIdResponse.data;
               console.log(getUserIdResponse.data,"jfiidjdv")
           
            const user = users.find((user: { email: string }) => user.email === email);
    
            if (!user) {
                toast.error('Email not found. Please try again.');
                return;
            }
    
            const userId = user._id;
    
            const resetPasswordUrl = `${BASE_URL}/api/user/request-password-reset/${userId}`;
            const resetPasswordResponse = await axios.post(resetPasswordUrl, { email });
    
              
            toast.success('Reset password email sent successfully. Please check your email.');
            
        } catch (error) {
            console.error('Error sending reset password email:', error);
            setError(error.message);
            toast.error('Failed to send reset password email. Please try again.');
        }
    };
    

    const handleOtpSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
            const apiUrl = `${BASE_URL}/api/otp/verify-otp`;
            const response = await axios.post(apiUrl, { email, otp }, { withCredentials: true });

            if (!response?.data?.success) {
                throw new Error(response?.data?.message);
            }


        } catch (error) {
            console.error('Error verifying OTP:', error);
            setError(error.message);
        }
        toast.success('Login sucessfully we directing you.');
        router.push('/home');
    };

    
   
    
 
  

    return (
        <>
            <div className='container mx-auto'>
                <div className='flex lg:flex-row flex-col bg-[#060b27] lg:px-[100px]  lg:py-[200px] pt-[120px] pb-[50px] px-[30px] backgr justify-evenly '>
                    <div className="lg:w-[60%]  w-full" >
                        <div className="row root  boybg">
                            <div className="w-full text-white font-black text-5xl ">
                                <h2>Sell your recyclables
                                    online with <span> WASTE PURSUE!</span></h2>
                                <p className=' text-lg font-medium py-2 '>Paper - Plastics - Metals - Appliances</p>
                            </div>
                            <div className="dustbin lg:w-[90%] w-full">
                                <p className=' text-lg  py-2 text-white '>Be a recycler, be a saver
                                    Today, recycle for a better tomorrow.
                                    Reduce wasting natural resources
                                    Reuse, recycle, and reduce the waste for a better future
                                    Increase greenery by recycling waste
                                    Save earth by reusing, recycling waste
                                    Waste isn’t waste until we waste
                                    Recycle your trash or trash your earth
                                    Think before your trash</p>
                                <Image src="" width="200" alt="" />
                            </div>

                        </div>
                    </div>
                    <div className="lg:w-[40%] w-full  flex justify-end lg:pt-0 pt-5">
                        <div className="max-w-md  bg-transparent  rounded-lg shadow-md w-[400px] box_shadow p-8">
                            <h1 className="text-4xl  text-center font-black mb-6 text-white">Login</h1>
                           {
                            !showForgotPassword && (
                                <form
                                onSubmit={showOtpInput ? handleOtpSubmit : handleSubmit}
                                className="space-y-4 "
                            >
                                <div className="flex flex-col mb-4">
                                    <label className="mb-1 text-white text-lg" htmlFor="email">
                                        Email:
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="px-3 py-2 rounded border focus:outline-none text-black focus:border-blue-400"
                                    />
                                </div>
                                <div className="flex flex-col mb-4">
                                    <label className="mb-1 text-white text-lg" htmlFor="password">
                                        Password:
                                    </label>
                                    <input
                                        id="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="px-3 py-2 rounded border focus:outline-none text-black focus:border-blue-400"
                                    />
                                </div>

                                {showOtpInput && (
                                    <div className="flex flex-col mb-4">
                                        <label className="mb-1 text-white text-lg" htmlFor="otp">
                                            OTP:
                                        </label>
                                        <input
                                            id="otp"
                                            type="number"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                            required
                                            className="px-3 py-2 rounded border focus:outline-none text-black focus:border-blue-400"
                                        />
                                    </div>
                                )}

                                {error && <div className="text-red-500 mb-4">{error}</div>}
                                <button
                                    type="submit"
                                    className="w-full bg-[#cfff13] text-black py-2 rounded "
                                >
                                    {showOtpInput ? "Verify OTP" : "Login"}
                                </button>

                                <div className="text-center mt-4 text-white text-lg  ">
                                    Already have an account?
                                    <Link href="/register" className="text-[#cfff13] hover:underline ml-2">
                                        Register Now
                                    </Link>
                                </div>
                            </form>
                            )
                           }
                            {showForgotPassword ? (
                                <form onSubmit={handleForgotPassword} className="mt-4">
                                    <div className="flex flex-col mb-4">
                                        <label className="mb-1 text-white text-lg" htmlFor="forgotPasswordEmail">
                                            Email:
                                        </label>
                                        <input
                                            id="forgotPasswordEmail"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="px-3 py-2 rounded border focus:outline-none text-black focus:border-blue-400"
                                        />
                                    </div>
                                    {error && <div className="text-red-500 mb-4">{error}</div>}
                                    <button
                                        type="submit"
                                        onClick={ handleForgotPassword}
                                        className="w-full bg-[#cfff13] text-black py-2 rounded "
                                    >
                                        Send Email
                                    </button>
                                    <div className='flex justify-center'>
                                    
                                    <button
                                     
                                        onClick={() => setShowForgotPassword(false)}
                                        className="text-[#cfff13] hover:underline text-lg py-5 flex items-center gap-2"
                                    ><FaRegArrowAltCircleLeft />
                                        Go back
                                    </button>
                                    </div>
                                </form>
                            ) : (
                                <div className="text-center mt-4 text-white text-lg">
                                    <button
                                        onClick={() => setShowForgotPassword(true)}
                                        className="text-[#cfff13] hover:underline"
                                    >
                                        Forgot Password?
                                    </button>
                                   
                                </div>
                            )}
                        </div>
                    </div>

                </div>
            </div>

        </>







    );
};

export default Login;