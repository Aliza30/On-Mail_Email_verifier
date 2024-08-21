import React from "react";
import LOGO from "./utils/target.png";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div>
                <p className="bg-neutral-300 text-gray-500 text-center font-medium">Welcome to On~Mail.</p>
            </div>
            <div className="flex items-center bg-custom-yellow justify-between px-10">
                <img className="w-[35px] my-5" src={LOGO} alt="On~Mail Logo"></img>
                <h1 className="p-2 font-sans md:font-serif font-semibold"><Link to='/'>On~Mail</Link></h1>
                <ul className="flex font-serif space-x-5 justify-center p-2 mx-auto">
                    <li className="p-4 text-black hover:cursor-pointer hover:font-semibold hover:text-gray-700 hover:scale-105 transition-transform duration-200">
                        <Link to='/aboutUs'>  About Us </Link>
                    </li>
                    <li className="p-4 text-black hover:cursor-pointer hover:font-semibold hover:text-gray-700 hover:scale-105 transition-transform duration-200">
                        <Link to='/service'> Our Service</Link>
                    </li>
                    {/* <li className="p-4 text-black hover:cursor-pointer hover:font-semibold hover:text-gray-700 hover:scale-105 transition-transform duration-200">
                        <Link to='/contact'> Contact Us</Link>
                    </li> */}
                </ul>
                <p className=" p-4 font-serif font-semibold hover:cursor-pointer hover:font-semibold hover:text-blue-900">
                    <Link to='/login'>Login or SignUp</Link>
                </p>
            </div>
        </div>
    );
};

export default Header;
