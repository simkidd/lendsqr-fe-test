import React from "react";
import "./login.scss";
import Logo from "../../assets/images/Group.png";
import LoginImg from "../../assets/images/pablo-sign-in 1.png";

const Login = () => {
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <img className='logo' src={Logo} alt=''/>
          <div className='logo-img-wrapper'>
          <img src={LoginImg} alt="" />
          </div>
        </div>
        <div className="login-right">
          <div className='inner-wrapper'>
            <h2>Welcome!</h2>
            <p>Enter details to login.</p>
            <form>
              <div className="input-group">
                <input className="input-field" placeholder="Email" />
              </div>
              <div className="input-group">
                <input className="input-field" placeholder="Password" />
              </div>
              <p className='f-pswd'>forgot password</p>
              <button className='login-btn'>log in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
