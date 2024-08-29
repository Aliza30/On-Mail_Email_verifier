import React, { useRef, useState } from 'react'
import FooterDetail from "./FooterDetails"
import { checkValidData } from './utils/validation';
import { error } from 'ajv/dist/vocabularies/applicator/dependencies';
const Login = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [errormessage, setErrorMessage] = useState(null)

    const email = useRef(null);
    const password = useRef(null)
    const handleButtonClick = (e) => {
        e.preventDefault();
        // Access the current value of the refs
        // Add your validation logic here
        // console.log(email.current.value);
        // console.log(password.current.value);

        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);

        // this is valid then i can do sign in sign out.
    };

    const toggleToSignUp = () => {
        setIsSignUp(!isSignUp)
    }
    return (
        <>
            <div className="max-w-md mx-auto  p-2 hover:cursor-pointer ">

                <form className=' space-y-3 rounded-lg bg-neutral-200 p-10 m-10 text-center'>
                    <h3 className="font-serif underline underline-offset-4">
                        {isSignUp ? "Login here !" : "Sign Up Now !"}
                    </h3>
                    {!isSignUp && <input type='text' placeholder='Name' className='p-3 border-black ' />}
                    <input
                        ref={email}
                        type='text' placeholder='Email' className='p-3 border-black'
                    />
                    {!isSignUp && <div className=" px-10"><ul className=' space-x-3 font-sans font-thin text-xs list-disc text-left'>
                        <p>  password must be atleast of 10 character.</p>
                        <li> atleast one Upper Case character </li>
                        <li> atleast one Special character </li>
                        <li> no space in between </li>
                        <li>atleast on number character</li>
                    </ul></div>}
                    <input
                        ref={password}
                        type='text' placeholder='Password' className='p-3 border-black '
                    />
                    <p className=' text-red-900 font-semibold text-lg p-2'>{errormessage}</p>
                    <button
                        onSubmit={(e) => e.preventDefault()}
                        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        onClick={handleButtonClick}
                    >
                        {isSignUp ? "Log In" : "Sign Up"}
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
            <div className='Emergency-Contact for Help text-center p-4 mb-11 font-serif font-semibold '>
                <h1> Need any help drop a mail</h1>
                <h1>  @</h1>
                <a href="mailto:Demo@test.com" className=' text-blue-900 hover:cursor-pointer hover:text-red-800 underline underline-offset-2'>Demo@test.com</a>
            </div>
            <FooterDetail />
        </>
    )
}

export default Login