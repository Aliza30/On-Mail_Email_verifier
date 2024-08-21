import React, { useState } from 'react'
import FooterDetail from "./FooterDetails"
const Login = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const toggleToSignUp = () => {
        setIsSignUp(!isSignUp)
    }
    return (
        <>
            <div className="max-w-md mx-auto my-[65px] p-2 hover:cursor-pointer ">

                <form className=' space-y-3 rounded-lg bg-neutral-200 p-10 m-10 text-center'>
                    <h3 className="font-serif underline underline-offset-4">
                        {isSignUp ? "Login here !" : "Sign Up Now !"}
                    </h3>
                    <input type='text' placeholder='Email' className='p-3 border-black' />
                    <input type='text' placeholder='Password' className='p-3 border-black ' />
                    <button
                        type="Login"
                        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        {isSignUp ? "Login In" : "Sign Up"}
                    </button>
                    <p
                        type="Sign-up"
                        className=' py-2 font-serif text-blue-900 underline underline-offset-4 hover:cursor-pointer hover:text-rose-800 hover:font-semibold '
                        onClick={toggleToSignUp}
                    >
                        {isSignUp ? "New to On~mail? Sign Up Now!" : "Already a member? LogIn Now"}
                    </p>
                </form>

            </div>


            <FooterDetail />
        </>
    )
}

export default Login