import { Link } from "react-router-dom";

const FooterDetails = () => {
    return (
        <div className="flex space-x-10 justify-between px-20 py-10 font-serif  bg-neutral-300 ">
            <div className='Emergency-Contact for Help text-left p-4 mb-11 font-serif font-semibold '>
                <h1> Need any help? Drop a mail @</h1>
                <a href="mailto:Demo@test.com" className=' text-blue-900 hover:cursor-pointer hover:text-yellow-600 underline underline-offset-2'>Demo@test.com</a>
            </div>
            <div>
                <h3 className=" hover:cursor-pointer font-semibold underline underline-offset-4">Company</h3>
                <ul>
                    <li>Team</li>
                    <p><Link to='/login'>Contact Us</Link></p>
                </ul>
            </div>
            <div>
                <h3 className=" font-semibold underline underline-offset-4">Product</h3>
                <ul>
                    <li>Price</li>
                    <li>Api</li>
                    <li>NewsLetter (ComingSoon!)</li>
                </ul>
            </div>

            {/* <div>
                <h3 className=" hover:cursor-pointer font-semibold underline underline-offset-4">Social Media</h3>
                <ul>
                    <li>Twitter</li>
                    <li>Linked In</li>
                    <li>Facebook</li>

                </ul>
            </div> */}
        </div>
    )
}

export default FooterDetails;