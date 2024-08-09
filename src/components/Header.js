import React from "react";
import HeaderBody from "./HeaderBody";
import Login from "./Login";
import LOGO from "./utils/target.png"


const Header = () => {


    return (
        <div>
            <div className="">
                <p className="bg-neutral-300 text-gray-500 text-center font-medium"> Welcome to a On~Mail. </p>
            </div>
            <div className="flex items-center bg-custom-yellow justify-between px-10">
                <img className="w-[35px] my-5" src={LOGO}></img>
                <h1 className="p-2 font-sans md:font-serif font-semibold">
                    On~Mail
                </h1>
                <ul className="flex font-serif space-x-5 justify-center p-2 mx-auto">
                    <li className="p-4 text-black hover:cursor-pointer  hover:font-semibold hover:text-gray-700 hover:scale-105 transition-transform duration-200" >
                        About Us
                    </li>
                    <li className="p-4 text-black hover:cursor-pointer hover:font-semibold hover:text-gray-700 hover:scale-105 transition-transform duration-200">Our Services</li>
                    <li className="p-4 text-black hover:cursor-pointer  hover:font-semibold hover:text-gray-700 hover:scale-105 transition-transform duration-200">Contact Us</li>
                </ul>
                <Login />

            </div>

        </div>
    )
}

export default Header;