import React from 'react'
import FooterDetails from './FooterDetails';
import img1 from "../components/utils/artificial-intelligence.png"
import img2 from "../components/utils/confidential-email.png"
import img3 from "../components/utils/email.png"
const AboutUs = () => {
    return (
        <div className=" font-serif m-10">
            <div className="px-20 text-center">
                <h1 className="font-bold text-[45px] py-5 ">
                    About Us
                </h1>
                <p className=" text-pretty mx-20 text-lg">
                    At OnMail, we redefine email communication with cutting-edge validation and AI-driven solutions. Our advanced email validation service ensures accuracy by checking Mail Exchange (MX) records and performing rigorous Simple Mail Transfer Protocol (SMTP) checks, while efficiently handling timeout issues. Complementing this, our AI-powered subject generator crafts engaging subject lines designed to pass through complex email security filters, enhancing deliverability. Committed to innovation and precision, OnMail provides reliable, effective solutions that elevate your email strategy and ensure your messages reach their intended audience.
                </p>
            </div>
            <div className="image m-20 flex justify-center space-x-8">
                <img className='p-5 w-1/4' src={img3}></img>
                <img className='p-5 w-1/4' src={img1}></img>
                <img className='p-5 w-1/4' src={img2}></img>

            </div>

        </div>
    )
}

export default AboutUs;