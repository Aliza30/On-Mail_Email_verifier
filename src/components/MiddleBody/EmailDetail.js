import { Link } from "react-router-dom"


const EmailDetails = () => {
    return (
        <div className=" text-wrap">

            <h1 className="text-xl font-serif font-semibold underline decoration-2  hover:cursor-pointer hover:text-gray-700 hover:scale-105">
                <Link to='/emailSecurity'>Email Security</Link>
            </h1>
            <div className="flex px-2">
                <p className="mb-2  box-decoration-clone text-balance">
                    Discover hidden email security layers: encryption, authentication, and more, safeguarding your inbox out of sight!
                </p>
            </div>
        </div>
    )
}

export default EmailDetails