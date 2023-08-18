import {SiSpringsecurity} from "react-icons/si"
import {BsFillEyeSlashFill} from "react-icons/bs"
import './ResetPassword.scss';


const ResetPassword=()=>{

    return(
        <div className="container">
            <div>
                <h1>
                Reset Password
                </h1>
            </div>

            <div>
            <div>
                <h2>
                Enter current password
                </h2>
            </div>
            <div className="inputBox">
            <SiSpringsecurity className="SecurityIcon"/>
                <input/>
            <BsFillEyeSlashFill className="EyeIcon"/>
            </div>
            <div>
                <h2>
                Enter new password
                </h2>
            </div>
            <div className="inputBox">
            <SiSpringsecurity className="SecurityIcon"/>
                <input/>
            <BsFillEyeSlashFill className="EyeIcon"/>
            </div>
            <div>
            <h2>
                Re-enter new password
            </h2>
            </div>
            <div className="inputBox">
            <SiSpringsecurity className="SecurityIcon"/>
                <input/>
            <BsFillEyeSlashFill className="EyeIcon"/>
            </div>

            </div>
            <div className="submitBtn">
               <button> SUBMIT</button>
            </div>
            <div className='fpLink'>
                <a href='#'>Forgot Password</a>
            </div>

            

        </div>
    );

}


export default ResetPassword;