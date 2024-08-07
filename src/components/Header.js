import React from "react";
import HeaderBody from "./HeaderBody";
const Header = () => {
    return (
        <div>
            <div className="">
                <p className="bg-neutral-300 text-gray-500 text-center font-medium"> Welcome to a On~Mail. </p>
            </div>
            <div className="flex items-center bg-custom-yellow justify-between px-10">
                <h1 className="p-4 font-sans md:font-serif font-semibold">On~Mail</h1>

                <ul className="flex font-serif space-x-5 justify-center p-2 mx-auto">
                    <li className="p-4 text-black hover:font-semibold hover:text-gray-700 hover:scale-105 transition-transform duration-200">AI Header</li>
                    <li className="p-4 text-black hover:font-semibold hover:text-gray-700 hover:scale-105 transition-transform duration-200">About Us</li>
                    <li className="p-4 text-black hover:font-semibold hover:text-gray-700 hover:scale-105 transition-transform duration-200">Our Services</li>
                    <li className="p-4 text-black hover:font-semibold hover:text-gray-700 hover:scale-105 transition-transform duration-200">Contact Us</li>
                    <li className="p-4 text-black hover:font-semibold hover:text-gray-700 hover:scale-105 transition-transform duration-00">Help</li>
                </ul>

                <button className="font-serif p-2 border border-black rounded-md hover:bg-yellow-100 hover:scale-95 transition-transform duration-100 ">
                    Login
                </button>
            </div>

            <HeaderBody />
        </div>
    )
}

export default Header;