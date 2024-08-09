import React from 'react'

const Service = () => {
  return (
    <div className=" font-serif m-10">
      <div className="px-20 text-center">
        <h1 className="font-bold text-[45px] py-5 ">
          Our Service
        </h1>
        <p className=" text-pretty mx-20">
          At OnMail, we are dedicated to transforming email communication with advanced technology and innovation.
          Our mission is to ensure that your emails reach their intended recipients with unmatched accuracy and reliability.
        </p>
      </div>
      <div className="py-5 px-20 ">
        <h2 className=" font-semibold p-2 text-[23px]">Precision in Email Validation</h2>
        <ul className="text-pretty mx-5">
          <li>Our process begins with verifying the Mail Exchange (MX) records of each email address, confirming that the domain is properly configured to accept messages.</li>
          <li>This essential step minimizes bounced emails and enhances overall deliverability.</li>
          <li>Beyond MX record verification, our system conducts comprehensive Simple Mail Transfer Protocol (SMTP) checks to validate email addresses and their ability to receive messages. </li>
          <li>We also keep track of timeout events, ensuring our validation remains efficient and reliable, even in the face of delayed server responses.</li>
        </ul>
      </div>
      <div className="py-5 px-20">
        <h2 className=" font-semibold p-2 text-[23px]">AI-Powered Subject Generation</h2>
        <ul className="text-pretty mx-5">
          <li>Understanding the importance of email security filters, OnMail also offers an innovative AI subject generator. </li>
          <li>This tool helps craft subject lines that are not only engaging but also optimized to navigate through complex email security systems.</li>
          <li>By leveraging artificial intelligence, our subject generator ensures your emails bypass spam filters and reach your audience as intended.</li>
        </ul>
      </div>
      <div className="py-5 px-20">
        <h2 className=" font-semibold p-2 text-[23px]">Commitment to Excellence</h2>
        <ul className="text-pretty mx-5">
          <li>OnMail is committed to providing a service that combines precision, innovation, and reliability.</li>
          <li>We continually refine our technology to address emerging challenges in email deliverability and security. </li>
          <li>Our goal is to empower your email communication strategy, ensuring that every message you send is effective and successful.</li>
          <li>Trust OnMail to be your partner in achieving email excellence and experience the difference our advanced validation and AI tools can make.</li>
        </ul>
      </div>
    </div>
  )
}

export default Service