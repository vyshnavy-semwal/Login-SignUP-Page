import React, { useState } from "react";
import "./LoginSignUP.css";

import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const LoginSignUP = () => {
  const [action, setAction] = useState("Login");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email Id" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="password" />
        </div>
      </div>

      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="password">
          forgot password ?{" "}
          <span onClick={() => alert("Password reset link sent to your email")}>
            Click Here
          </span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={`submit ${action === "Login" ? "gray" : ""}`}
          onClick={() => setAction("Sign Up")}
        >
          SignUp
        </div>
        <div
          className={`submit ${action === "Sign Up" ? "gray" : ""}`}
          onClick={() => setAction("Login")}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignUP;
