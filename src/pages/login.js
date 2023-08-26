import React from 'react';
import { signIn } from "next-auth/react"
import GoogleIcon from '@mui/icons-material/Google';

const LoginPage = () => {

    return (
        <div className='bg-white'>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    {/* <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div> */}
                    <div className="card  w-full max-w-sm shadow-2xl p-3">
                        <h1 className='text-2xl text-center font-bold'>Login with Google</h1>
                        <div className="card-body">
                            <div className="flex items-center justify-center text-center">
                                <GoogleIcon className='w-20 h-20 cursor-pointer' onClick={() => signIn('google', 
                                { callbackUrl: 'https://machine-maker-front.vercel.app' })} />
                            </div>
                            {/* <p className='text-center'>Or</p>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-500 font-bold">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input bg-white input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-500 font-bold">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input bg-white input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover text-gray-500 font-bold">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage