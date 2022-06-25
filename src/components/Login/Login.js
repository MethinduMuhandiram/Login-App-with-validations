import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import "./Login.css";

function Login(props) {
  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();

  function emailChangeHandler(event) {
    setEmail(event.target.value);
    setEmailIsValid(true);
  }

  function validateEmailHandler(event) {
    let email = event.target.value;
    let reg = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    let test = reg.test(email);
    if (test) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
  }

  function passwordChangeHandler(event) {
    setPassword(event.target.value);
    setPasswordIsValid(true);
  }

  function validatePasswordHandler(event) {
    let pass = event.target.value;
    let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;
    let test = reg.test(pass);
    if (test) {
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(false);
    }
  }

  function submitHandler(event) {
    event.preventDefault();
    emailIsValid && passwordIsValid && props.onLogin(email, password);
    console.log(email, password);

    // axios({
    //   method: "GET",
    //   url: "https://login-app-4f2fc-default-rtdb.firebaseio.com/login_app.json",
    //   params: { email: event.target.value, password: event.target.value }
    // }).then((response) => console.log(response.data));  //!1@2#3QqWw
  }

  return (
    <Card className="login">
      <form onSubmit={submitHandler}>
        <div className={emailIsValid === false && "inValid"}>
          <label>Email</label>
          <input
            value={email}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
            type="email"
          />
          {emailIsValid === false && (
            <span className="error-message">
              Please enter a valid email address !!!
            </span>
          )}
        </div>
        <div className={passwordIsValid === false && ("inValid")}>
          <label>Password</label>
          <input
            value={password}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
            type="password"
          />
          {passwordIsValid === false && (
            <span className="error-message">
              Please enter a valid password !!!
            </span>
          )}
        </div>

        <div className="action">
          <Button type="submit" className="btn">
            Submit
          </Button>
          <a href="/register">Don't have an account ? Please Register !</a>
        </div>
      </form>
    </Card>
  );
}

export default Login;
