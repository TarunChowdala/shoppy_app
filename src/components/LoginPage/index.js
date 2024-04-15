import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./index.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
    console.log("clicked");
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (userDetails.username !== "" && userDetails.password !== "") {
      navigate("/");
    } else {
      alert("Username and password cannot be empty!");
    }
  };

  const onChangeUsername = (event) => {
    setUserDetails({ ...userDetails, username: event.target.value });
  };

  const onChangePassword = (event) => {
    setUserDetails({ ...userDetails, password: event.target.value });
  };

  const passwordType = showPassword ? "text" : "password";

  return (
    <div className="login-container">
      <div className="form-container">
        <img
          src="https://res.cloudinary.com/dvtotdiqa/image/upload/v1710140483/zaac9awiconnmsaq7jkv.png"
          alt="app logo"
          className="logo"
        />
        <h3 className="welcome-text">Welcome to Shoppy</h3>
        <form className="form" onSubmit={onSubmitForm}>
          <label className="label">Username or Email</label> <br />
          <input
            type="text"
            className="input-element"
            onChange={onChangeUsername}
            placeholder="username"
          />
          <br />
          <label className="label">Password</label>
          <br />
          <input
            type={passwordType}
            className="input-element"
            onChange={onChangePassword}
            placeholder="password"
          />
          <div className="checkbox-container">
            <input type="checkbox" onClick={onClickShowPassword} />
            <label className="label">Show</label>
          </div>
          <button type="submit" className="form-button">
            Log in
          </button>
          <p className="sign-up-text">
            Not yet a member? <span className="ml-2 span">Sign up</span>
          </p>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
