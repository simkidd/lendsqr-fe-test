import React from "react";
import "./login.scss";
import Logo from "../../assets/images/Group.png";
import LoginImg from "../../assets/images/pablo-sign-in 1.png";
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();

  const navigateToDashboard=()=>{
    navigate('dashboard');
  }

  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <img className='logo' src={Logo} alt=''/>
          <div className='left-img-wrapper'>
          <img src={LoginImg} alt="" />
          </div>
        </div>
        <div className="login-right">
          <div className='inner-wrapper'>
            <h2>Welcome!</h2>
            <p>Enter details to login.</p>
            <form>
              <div className="input-group">
                <input type='text' placeholder="Email"  />
              </div>
              <div className="input-group">
                <input type='password' placeholder="Password" />
                <span className="show-pswd">show</span>
              </div>
              <a href='/' className='f-pswd'>forgot password?</a>
              <button className='login-btn' onClick={navigateToDashboard}>log in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
