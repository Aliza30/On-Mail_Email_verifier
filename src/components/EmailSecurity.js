import React from 'react'
import securityimg from './utils/emailSecurity.png'

const EmailSecurity = () => {
    return (
        <div className=" font-serif">
            <div className=" px-20 text-center">
                <h1 className="font-bold text-[45px] py-5 ">
                    Email Security
                </h1>
                <p className=" text-pretty mx-20 text-lg pb-12">
                    An effective email security tech stack isn't a one-size-fits-all solution. Instead, it's a multi-layered defense mechanism specifically designed to address a wide range of vulnerabilities and attack vectors. Each layer is tailored to protect against different threats, ensuring comprehensive security across the entire email ecosystem.
                </p>
            </div>
            <div className='flex justify-center mb-10'>
                <ul className="space-y-5 list-decimal ">
                    <li>
                        <h4 className=' underline underline-offset-4 font-semibold'>SSL/TLS Encryption:</h4> Encrypts email content in transit, preventing interception by unauthorized parties during transmission.
                    </li>
                    <li>
                        <h4 className=' underline underline-offset-4 font-semibold' >SMTP Authentication:</h4> Verifies the sender’s identity before email delivery, reducing the risk of email spoofing.
                    </li>
                    <li>
                        <h4 className=' underline underline-offset-4 font-semibold'>SPF (Sender Policy Framework): </h4>  Validates sender IP addresses against DNS records, preventing unauthorized sources from sending emails on behalf of your domain.
                    </li>
                    <li>
                        <h4 className=' underline underline-offset-4 font-semibold'>DKIM (DomainKeys Identified Mail): </h4>Adds a digital signature to emails, ensuring their authenticity and integrity by verifying the sender's domain.
                    </li>
                    <li>
                        <h4 className=' underline underline-offset-4 font-semibold'> DMARC (Domain-based Message Authentication, Reporting & Conformance): </h4>Provides alignment for SPF/DKIM, enabling policy enforcement and reporting to prevent email fraud.
                    </li>
                    <li>
                        <h4 className=' underline underline-offset-4 font-semibold'> MTA-STS (Mail Transfer Agent-Strict Transport Security): </h4>Enforces TLS encryption for email servers, ensuring secure transmission and preventing downgrade attacks.
                    </li>
                    <li>
                        <h4 className=' underline underline-offset-4 font-semibold'>BIMI (Brand Indicators for Message Identification):</h4> Displays verified brand logos in recipients' inboxes, enhancing brand trust and email credibility.
                    </li>
                    <li>
                        <h4 className=' underline underline-offset-4 font-semibold'> Anti-Phishing Filters: </h4>Identifies and blocks malicious emails designed to steal sensitive information through deceptive links or attachments.
                    </li>
                    <li>
                        <h4 className=' underline underline-offset-4 font-semibold'>  Spam Filtering:</h4> Filters out unwanted and potentially harmful emails based on content, sender reputation, and known patterns.
                    </li>
                    <li>
                        <h4 className=' underline underline-offset-4 font-semibold'>   Attachment Scanning:</h4> Examines email attachments for malware, ensuring that harmful files are quarantined before reaching the recipient.
                    </li>
                    <li>
                        <h4 className=' underline underline-offset-4 font-semibold'>URL Defense:</h4> Analyzes links within emails for malicious intent, protecting users from phishing and malware attacks.
                    </li>
                    <li>
                        <h4 className=' underline underline-offset-4 font-semibold'>Email Encryption at Rest:</h4> Encrypts stored emails, safeguarding sensitive information against unauthorized access on servers and backup systems.
                    </li>
                </ul>
            </div>
            <div className="flex items-center justify-center p-5">
                <img className='p-2 w-1/4' src={securityimg} alt="Security" />
            </div>
        </div>
    )
}

export default EmailSecurity