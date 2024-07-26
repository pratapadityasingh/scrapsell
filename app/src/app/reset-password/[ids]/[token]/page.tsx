"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Resetpage = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setNewPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const router = useRouter();

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
            const getUserIdUrl = `${BASE_URL}/api/admin/getuserpresnt`;
            const getUserIdResponse = await axios.get(getUserIdUrl);


            const users = getUserIdResponse.data;
           


            const user = users.find((user: { email: string }) => user.email === email);

            if (!user) {
                toast.error('Email not found. Please try again.');
                return;
            }

            const userId = user._id;

            const token =
                user.resetPasswordToken;
            ;

            const response = await axios.post(`${BASE_URL}/api/user/reset-password/${userId}/${token}`, {
                email,
                password
            });


            toast.success(response.data.message);


            router.push('/login');
        } catch (error) {

            setError(error.response.data.message);
        }
    };

    return (
        <div className='h-screen bg-[#060B27] lg:flex lg:justify-center bgghk   lg:items-center lg:px-4 p-5 overflow-hidden lg:pt-0 pt-[150px]'>
            <div className='border h-fit lg:px-4 lg:py-7   rounded-3xl bos_design'>
                <div className='w-full justify-center flex'>
                    <h1 className='text-white text-center font-bold text-xl m-3'>Reset Your Password</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='w-full p-2  '>
                        <div className='p-2'>
                            <p className='text-white mb-2'>Email:</p>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='rounded-full w-full py-2 px-4'
                            />
                        </div>
                        <div className='p-2'>
                            <p className='text-white mb-2'>New Password:</p>
                            <input
                                type="password"
                                id="newPassword"
                                value={password}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className='rounded-full w-full py-2 px-4'
                            />
                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <button type="submit" className='bg-[#cfff13] p-3 rounded-full w-full mt-5 mb-5'>Reset Password</button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Resetpage;
