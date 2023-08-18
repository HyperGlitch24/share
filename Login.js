import classes from "./Login.module.scss";
import login from "./login.png";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";


import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase";

function Login() {
    // const navigate = useNavigate();
    // const [values, setValues] = useState({
    //     email: "",
    //     pass: "",
    // });
    // const [errorMsg, setErrorMsg] = useState("");
    // const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    // const handleSubmission = () => {
    //     if (!values.email || !values.pass) {
    //         setErrorMsg("Fill all fields");
    //         return;
    //     }
    //     setErrorMsg("");

    //     setSubmitButtonDisabled(true);
    //     signInWithEmailAndPassword(auth, values.email, values.pass)
    //         .then(async (res) => {
    //             setSubmitButtonDisabled(false);

    //             navigate("/home");
    //         })
    //         .catch((err) => {
    //             setSubmitButtonDisabled(false);
    //             setErrorMsg(err.message);
    //         });
    // };

    return (
        <div className={classes.rootLogin}>
            <div className={classes.containerMain}>
                <div className={classes.header}>
                    <p>Login</p>
                </div>

                <div className={classes.container}>
                    <div className={classes.left}>
                        <div className={classes.email}>
                            <div className={classes.label}>
                                <p>Email</p>
                            </div>
                            <div className={classes.input}>
                                <div className={classes.icon}>
                                    <MdEmail className={classes.emailIcon} />
                                </div>

                                <div className={classes.inputEmail}>
                                    <input
                                        type="email"
                                        // onChange={(event) =>
                                        //     setValues((prev) => ({
                                        //         ...prev,
                                        //         email: event.target.value,
                                        //     }))
                                        // }
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={classes.password}>
                            <div className={classes.label}>
                                <p className={classes.pass}>Password</p>
                                <p className={classes.forgot}>
                                    Forgot Password?
                                </p>
                            </div>
                            <div className={classes.input}>
                                <div className={classes.icon}>
                                    <RiLockPasswordFill
                                        className={classes.passwordIcon}
                                    />
                                </div>

                                <div className={classes.inputPassword}>
                                    <input
                                        type="password"
                                        // onChange={(event) =>
                                        //     setValues((prev) => ({
                                        //         ...prev,
                                        //         pass: event.target.value,
                                        //     }))
                                        // }
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={classes.buttons}>
                            <div
                                className={classes.signin}
                                // disabled={submitButtonDisabled}
                                // onClick={handleSubmission}
                            >
                                <p>Log In</p>
                            </div>
                            <div className={classes.signup}>
                                <span>
                                    {/* <Link to="/" className={classes.link}>
                                        Don't have an account? Register here
                                    </Link> */}
                                    <div className={classes.link}>
                                    Don't have an account? Register here
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <img src={login} alt="login"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
