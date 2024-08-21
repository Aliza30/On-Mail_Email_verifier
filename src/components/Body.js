import React from 'react'
import MiddleBody from './MiddleBody'
import HeaderBody from './HeaderBody'
import FooterDetails from './FooterDetails'

const Body = () => {


    return (
        <>
            <HeaderBody />
            <MiddleBody />
            <hr class="border-t-1 border-gray-300 mx-auto  w-3/4" />
            <div className=' p-8 m-8 text-pretty text-center'>
                <h1 className=' font-serif text-3xl font-semibold pb-5'> Why Emails ?</h1>
                <h3 className=' font-serif leading-loose py-2'>
                    Email remains the most widely used and reliable form of communication in the digital age,
                    despite the rise of social media and instant messaging apps. Its importance lies in its universal
                    accessibility, formal tone, and ability to convey detailed information securely.
                </h3>

                <h3 className=' font-serif leading-loose py-2'>
                    As a trusted channel, email continues to be essential for maintaining professional relationships, conducting business, and ensuring that critical messages are delivered effectively.
                </h3>
                <h3 className=' font-serif leading-loose py-2'>
                    Businesses and individuals
                    rely on email for professional correspondence, document sharing, and important notifications. The structured
                    format of emails allows for clear communication, while features like attachments and signatures enhance its
                    functionality.
                </h3>
            </div>
            <FooterDetails />

        </>
    )
}

export default Body