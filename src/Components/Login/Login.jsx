import {
  FaGoogle,
  FaApple,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import "../../styles/Login.css";
import { Link } from "react-router";

import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";


const LoginForm = () => {
  const { t } = useTranslation();

  // const [email, setEmail] = useState('');
  // // const [password, setPassword] = useState('');
  // // const [showPassword, setShowPassword] = useState(false);
  // // const [rememberMe, setRememberMe] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle login logic here
  //   console.log('Email:', email, );
  // };

  // const handleGoogleLogin = () => {
  //   // Handle Google login logic
  //   console.log('Google login clicked');
  // };

  // const handleAppleLogin = () => {
  //   // Handle Apple login logic
  //   console.log('Apple login clicked');
  // };

  return (
    // <div className="login-container">
    //   <div className="login-form">
    //     <h2>Welcome Back</h2>
    //     <p>What's your phone number or email?</p>

    //     <form onSubmit={handleSubmit}>
    //       <div className="form-group">
    //         <label htmlFor="email">Email</label>
    //         <div className="input-with-icon">
    //           <FaEnvelope className="input-icon" />
    //           <input
    //             type="email"
    //             id="email"
    //             placeholder="Enter your email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //             required
    //           />
    //         </div>
    //       </div>

    //       {/* <div className="form-group">
    //         <label htmlFor="password">Password</label>
    //         <div className="input-with-icon">
    //           <FaLock className="input-icon" />
    //           <input
    //             type={showPassword ? "text" : "password"}
    //             id="password"
    //             placeholder="Enter your password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //             required
    //           />
    //           <button
    //             type="button"
    //             className="toggle-password"
    //             onClick={() => setShowPassword(!showPassword)}
    //           >
    //             {showPassword ? <FaEyeSlash /> : <FaEye />}
    //           </button>
    //         </div>
    //       </div>

    //       <div className="form-options">
    //         <div className="remember-me">
    //           <input
    //             type="checkbox"
    //             id="rememberMe"
    //             checked={rememberMe}
    //             onChange={(e) => setRememberMe(e.target.checked)}
    //           />
    //           <label htmlFor="rememberMe">Remember me</label>
    //         </div>
    //         <a href="/forgot-password" className="forgot-password">Forgot password?</a>
    //       </div> */}

    //       <button type="submit" className="login-button">Login</button>
    //     </form>

    //     <div className="divider">
    //       <span>OR</span>
    //     </div>

    //     <div className="social-logins">
    //       <button type="button" className="social-button google" onClick={handleGoogleLogin}>
    //         <FaGoogle className="social-icon" />
    //         Sign in with Google
    //       </button>
    //       <button type="button" className="social-button apple" onClick={handleAppleLogin}>
    //         <FaApple className="social-icon" />
    //         Sign in with Apple
    //       </button>
    //     </div>

    //     <div className="signup-link">
    //       Don't have an account? <Link to="/Sign">Sign up</Link>
    //     </div>
    //   </div>
    // </div>
    <>
      <div  className="login-container bg-white">
        <Container>
          <Row>
            <Col lg="6" md="6" className="m-auto text-center">
              <h1> {t("Try Munjaz now")} </h1>
              <p className="text-muted">
                {t("Munjaz is an application that allows you to request various services with ease and speed")}
              </p>
              <div className="">
                <button className=" login-button "> Google Play  {t("Available on")}  <span><i class="ri-mobile-download-line"></i></span></button>
                <button className="login-button "> App Store  {t("Available on")}  <span><i class="ri-mobile-download-line"></i></span></button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
    </>
  );
};

export default LoginForm;
