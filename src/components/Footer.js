import FooterDetails from "./FooterDetails";

const Footer = () => {
    return (
        <footer className="">
            <FooterDetails />
            <div className=" bg-neutral-300  flex justify-around space-x-96">
                <div>
                    <h1 className=" text-left p-4 font-serif text-sm">
                        Copyright ©2024 On~Mail . All Rights Reserved.
                    </h1>
                </div>
                <div>
                    <ul className="flex text-sm font-serif space-x-5 justify-center ">
                        <li className="p-4 text-black  hover:text-gray-700 hover:scale-105 ">Term of Service</li>
                        <li className="p-4 text-black  hover:text-gray-700 hover:scale-105 ">Cookies Notice</li>
                        <li className="p-4 text-black  hover:text-gray-700 hover:scale-105">Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
