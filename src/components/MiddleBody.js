import VerifyMail from "./MiddleBody/VerifyMail"
import AiHeader from "./MiddleBody/AiHeader"
import EmailDetails from "./MiddleBody/EmailDetail"
const MiddleBody = () => {
    return (
        <div className="  ">
            <div class="flex justify-between text-center m-10 space-x-20  ">
                <VerifyMail />
                <AiHeader />
                <EmailDetails />
            </div>
        </div>
    )
}

export default MiddleBody