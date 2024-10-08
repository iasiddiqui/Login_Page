import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [showOtpVerification, setShowOtpVerification] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  const handleConfirmPasswordChange = (event) => setConfirmPassword(event.target.value);
  const handleOtpChange = (event) => setOtp(event.target.value);
  const handleTogglePassword = () => setShowPassword(!showPassword);
  const handleToggleForm = () => setIsLogin(!isLogin);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLogin) {
      console.log("Logging in with Email:", email, "Password:", password);
    } else {
      if (password !== confirmPassword) {
        alert("Passwords Mismatched");
        return;
      }
      setShowOtpVerification(true);
      console.log("Signing up with Email:", email, "Password:", password);
    }
  };

  const handleVerifyOtp = (event) => {
    event.preventDefault();
    if (otp === "123456") {
      alert("OTP verified successfully!");
      navigate("/dashboard"); // Example: redirect to the dashboard
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="background-wrapper">
      <div className="container">
        {showOtpVerification ? (
          <form onSubmit={handleVerifyOtp} className="otp-form">
            <h2>Verify OTP</h2>
            <div className="form-group">
              <label htmlFor="otp">OTP:</label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={handleOtpChange}
                required
                placeholder="Enter OTP"
              />
            </div>
            <button className="submit-button" type="submit">
              Verify OTP
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="auth-form">
            <h2>{isLogin ? "Login" : "Sign Up"}</h2>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
                placeholder="Enter your password"
              />
              <span className="password-toggle" onClick={handleTogglePassword}>
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </span>
            </div>
            {!isLogin && (
              <div className="confirm-password">
                <label htmlFor="confirm-password">Confirm Password:</label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  required
                  placeholder="Confirm your password"
                />
              </div>
            )}

            <button className="login" type="submit">
              {isLogin ? "Login" : "Sign Up"}
            </button>

            <p className="signup">
              {isLogin ? (
                <>
                  Don't have an account?{" "}
                  <button type="button" onClick={handleToggleForm}>
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button type="button" onClick={handleToggleForm}>
                    Login
                  </button>
                </>
              )}
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default AuthForm;
