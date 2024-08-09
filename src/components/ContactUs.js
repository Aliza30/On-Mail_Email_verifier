import React from 'react'
import ContactForm from './ContactForm'

const ContactUs = () => {
    return (
        <div className="font-serif my-10">
            <div className=" px-20 text-center">
                <h1 className="font-bold text-[35px] py-5 ">
                    Contact Us
                </h1>
                <p className=" text-pretty mx-20 ">
                    Drop a mail at Test@demo.com
                </p>
                <p className=" text-pretty mx-20 ">
                    or
                </p>
                <p className=" text-pretty mx-20 ">
                    Fill out the form for a quick response.
                </p>
            </div>
            <ContactForm />
        </div>
    )
}

export default ContactUs