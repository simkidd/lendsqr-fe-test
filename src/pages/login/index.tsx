import { useState } from "react";
import Logo from "@/assets/images/Group.png";
import LoginImg from "@/assets/images/pablo-sign-in 1.png";
import { useNavigate } from "react-router-dom";
import './login.scss';

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigateToDashboard = () => {
    navigate('/');
  }

  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <img className='logo' src={Logo} alt='' />
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
                <input type='text' placeholder="Email" />
              </div>
              <div className="input-group">
                <input type={showPassword ? "text" : "password"} placeholder="Password" />
                <span
                  className="show-pswd"
                  onClick={handleShowPassword}>
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>
              <a href='/' className='f-pswd'>forgot password?</a>
              <button className='login-btn' onClick={navigateToDashboard}>log in</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login