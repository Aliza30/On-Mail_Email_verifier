import React from 'react'
import Header from './Header.js'
const Login = () => {
    return (
        <div className='login'>
            <form className=' bg-neutral-300 p-10 m-10'>
                <input type='text' placeholder='UserName or Email' className='p-2 border-black' />
                <input type='text' placeholder='Password' className='p-2 border-black' />
                <button
                    type="Login"
                    className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login