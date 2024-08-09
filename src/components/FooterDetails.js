
const FooterDetails = () => {
    return (
        <div className="flex space-x-10 justify-between px-20 py-10 font-serif  bg-neutral-300 ">
            <div>
                <h1> On~mail </h1>
                <p>Mail @ <a>test@demo.in</a></p>
            </div>
            <div>
                <h3 className=" font-semibold underline underline-offset-4">Product</h3>
                <ul>
                    <li>Price</li>
                    <li>Api</li>
                    <li>NewsLetter</li>
                </ul>
            </div>
            <div>
                <h3 className=" hover:cursor-pointer font-semibold underline underline-offset-4">Company</h3>
                <ul>
                    <li>Team</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>
                <h3 className=" hover:cursor-pointer font-semibold underline underline-offset-4">Social Media</h3>
                <ul>
                    <li>Twitter</li>
                    <li>Linked In</li>
                    <li>Facebook</li>

                </ul>
            </div>
        </div>
    )
}

export default FooterDetails;