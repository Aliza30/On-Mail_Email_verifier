import React from 'react'
import FooterDetail from "./FooterDetails"
const Login = () => {
    return (
        <>
            <div className="max-w-md mx-auto my-[65px] p-4 hover:cursor-pointer ">

                <form className=' space-y-3 rounded-lg bg-neutral-200 p-10 m-10 text-center'>
                    <h3 className="font-serif font-semibold underline underline-offset-4">Login here</h3>
                    <input type='text' placeholder='UserName or Email' className='p-3 border-black' />
                    <input type='text' placeholder='Password' className='p-3 border-black' />
                    <button
                        type="Login"
                        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Login
                    </button>
                    <p />
                    <button
                        type="Sign-up" className='font-serif text-blue-800 underline underline-offset-4 hover:cursor-pointer' >
                        or Sign Up
                    </button>
                </form>

            </div>
            <FooterDetail />
        </>
    )
}

export default Login