import classes from './Login.module.css';
// import FBimg from '../Images/Facebook.png';
// import Googleimg from '../Images/Google.png';
import Letter from '../Images/Secured Letter.png';
import Lock from '../Images/Security Shield Green.png';
import People from '../Images/people.png';

function Login(){
  return(
<div className={classes.LogInPage}>




<div className={classes.IcBaselineSearch} />   
<div className={classes.ForgotPassword}><a>Forgot Password?</a></div>
<div className={classes.Group1} >
<div className={classes.LoginLogo}>Login</div>
<div className={classes.Group2} >
  <div className={classes.Group3} >
    <button className={classes.LoginFrame} >
      <div className={classes.LogInButton} >Log In</div>
      <div className={classes.FrameArrow} >
        <div >
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Frame 1410113163">
<path id="Vector" d="M7.5625 12.8926C7.44792 12.778 7.38792 12.6322 7.3825 12.4551C7.37709 12.278 7.43188 12.1322 7.54688 12.0176L10.6094 8.95508H3.625C3.44792 8.95508 3.29938 8.89508 3.17938 8.77508C3.05938 8.65508 2.99959 8.50675 3 8.33008C3 8.153 3.06 8.00445 3.18 7.88445C3.3 7.76445 3.44834 7.70466 3.625 7.70508H10.6094L7.54688 4.64258C7.43229 4.52799 7.3775 4.38216 7.3825 4.20508C7.3875 4.02799 7.4475 3.88216 7.5625 3.76758C7.67709 3.65299 7.82292 3.5957 8 3.5957C8.17709 3.5957 8.32292 3.65299 8.4375 3.76758L12.5625 7.89258C12.625 7.94466 12.6694 8.00987 12.6956 8.0882C12.7219 8.16654 12.7348 8.24716 12.7344 8.33008C12.7344 8.41341 12.7215 8.49154 12.6956 8.56445C12.6698 8.63737 12.6254 8.70508 12.5625 8.76758L8.4375 12.8926C8.32292 13.0072 8.17709 13.0645 8 13.0645C7.82292 13.0645 7.67709 13.0072 7.5625 12.8926Z" fill="white"/>
</g>
</svg>
          
        </div>
      </div>
    </button>
    <div className={classes.RegisterHere}><a>Don’ t have an account?<br/>Register here</a></div>
    <div className={classes.Group4}>
      <div className={classes.PasswordGroup} >
        <div className={classes.Password}>Password</div>
        <div className={classes.PasswordInputGroup} >
          <input className={classes.InputRectangle}  />
          <img className={classes.SecurityShield} src={Lock} />
          <div className={classes.MdiEyeOff} >
            <div>
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="mdi:eye-off">
             <path id="Vector" d="M11.83 9.88933L15 13.0385V12.879C15 12.0861 14.6839 11.3257 14.1213 10.765C13.5587 10.2043 12.7956 9.88933 12 9.88933H11.83ZM7.53 10.6866L9.08 12.2313C9.03 12.4406 9 12.6498 9 12.879C9 13.672 9.31607 14.4324 9.87868 14.9931C10.4413 15.5538 11.2044 15.8688 12 15.8688C12.22 15.8688 12.44 15.8389 12.65 15.789L14.2 17.3337C13.53 17.6626 12.79 17.8619 12 17.8619C10.6739 17.8619 9.40215 17.3369 8.46447 16.4025C7.52678 15.468 7 14.2006 7 12.879C7 12.0918 7.2 11.3543 7.53 10.6866ZM2 5.17556L4.28 7.44774L4.73 7.89619C3.08 9.19174 1.78 10.8859 1 12.879C2.73 17.254 7 20.3533 12 20.3533C13.55 20.3533 15.03 20.0544 16.38 19.5162L16.81 19.9348L19.73 22.8447L21 21.5791L3.27 3.90991M12 7.89619C13.3261 7.89619 14.5979 8.42117 15.5355 9.35564C16.4732 10.2901 17 11.5575 17 12.879C17 13.5169 16.87 14.1347 16.64 14.6928L19.57 17.6128C21.07 16.367 22.27 14.7327 23 12.879C21.27 8.5041 17 5.40477 12 5.40477C10.6 5.40477 9.26 5.65391 8 6.10237L10.17 8.24499C10.74 8.02575 11.35 7.89619 12 7.89619Z" fill="#B4B4B4"/>
            </g>
            </svg>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.EmailGroup} >
        <div className={classes.Email} >Email</div>
        <div className={classes.EmailInputGroup} >
          <input className={classes.InputRectangle} />
          <img className={classes.SecuredLetter} src={Letter} />
        </div>
      </div>
    </div>
  </div>
  {/* <div className={classes.OtherLoginGroup} >
    <div className={classes.OrFrame} >
      <div className={classes.Line} ></div>
      <div className={classes.Or} >Or</div>
      <div className={classes.Line}></div>
    </div>
    <div className={classes.APILoginGroup} >
      <button className={classes.FacebookFrame} >
        <img className={classes.FacebookImage} src={FBimg} />
        <div className={classes.Facebook} >Facebook</div>
      </button>
      <button className={classes.GoogleFrame} >
        <img className={classes.Googleimage}  src={Googleimg} />
        <div className={classes.Google}>Google</div>
      </button>
    </div>
  </div> */}
</div>


<div className={classes.ShapeGroup} >
  <div className={classes.Ellipse3} />
  <div className={classes.Ellipse2} />
  <div className={classes.Ellipse1} />
</div>
<img className={classes.PeopleImage} src={People}/>
</div>











</div>


);

}


export default Login;