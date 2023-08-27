import React from 'react';
import { signIn } from "next-auth/react"
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

const LoginPage = () => {
    return (
        <div className='bg-white'>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card  w-full max-w-sm shadow-2xl p-3">
                        <h1 className='text-2xl text-center font-bold'>Login with Google</h1>
                        <div className="card-body">
                            <div className="flex items-center justify-center text-center">
                                <GitHubIcon className='w-32 h-32 cursor-pointer' onClick={() => signIn('github',
                                    { callbackUrl: 'http://localhost:3000/pcbuild/pcbuild' }
                                )} />
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