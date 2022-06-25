import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import "./Register.css";

function Register(props) {
  const [firstName, setFirstName] = useState("");
  const [firstNameIsValid, setFirstNameIsValid] = useState();

  const [lastName, setLastName] = useState("");
  const [lastNameIsValid, setLastNameIsValid] = useState();

  const [email, setEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();

  const [password, setPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();

  ///////////////FirstName///////////////////
  function firstNameChangeHandler(event) {
    setFirstName(event.target.value);
  }

  function validateFirstNameHandler(event) {
    let firstName = event.target.value;
    let reg = /^(?=.*[a-zA-Z0-9])(?=.{5,})/;
    let test = reg.test(firstName);
    if (test) {
      setFirstNameIsValid(true);
    } else {
      setFirstNameIsValid(false);
    }
  }

  ///////////////LastName///////////////////
  function lastNameChangeHandler(event) {
    setLastName(event.target.value);
  }

  function validateLastNameHandler(event) {
    let lastName = event.target.value;
    let reg = /^(?=.*[a-zA-Z0-9])(?=.{5,})/;
    let test = reg.test(lastName);
    if (test) {
      setLastNameIsValid(true);
    } else {
      setLastNameIsValid(false);
    }
  }
  //////////////////Email//////////////////////

  function emailChangeHandler(event) {
    setEmail(event.target.value);
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
  ///////////////Password/////////////////////
  function passwordChangeHandler(event) {
    setPassword(event.target.value);
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
    // props.onRegister(firstName, lastName, email, password);
    const registered = {
      firstName,
      lastName,
      email,
      password
    };

    fetch("http://localhost:5000/app/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(registered)
    }).then((response) =>
      response.json().then((result, err) => {
        if (!err) {
          console.log(result);
        } else {
          console.log(err);
        }
      })
    );

    // const response = await fetch(
    //   "https://login-app-4f2fc-default-rtdb.firebaseio.com/login_app",
    //   {
    //     mode: "no-cors",
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: registered
    //   }
    // );
    // const data = await response.json();

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  }

  return (
    <Card className="register">
      <form onSubmit={submitHandler}>
        <div className={firstNameIsValid === false ? "inValid" : ""}>
          <label>First Name</label>
          <input
            value={firstName}
            onChange={firstNameChangeHandler}
            onBlur={validateFirstNameHandler}
            type="text"
          />
          {firstNameIsValid === false ? (
            <span className="error-message">
              Please enter a valid email address !!!
            </span>
          ) : (
            ""
          )}
        </div>

        <div className={lastNameIsValid === false ? "inValid" : ""}>
          <label>Last Name</label>
          <input
            value={lastName}
            onChange={lastNameChangeHandler}
            onBlur={validateLastNameHandler}
            type="text"
          />
          {lastNameIsValid === false ? (
            <span className="error-message">
              Please enter a valid email address !!!
            </span>
          ) : (
            ""
          )}
        </div>

        <div className={emailIsValid === false ? "inValid" : ""}>
          <label>Email</label>
          <input
            value={email}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
            type="email"
          />
          {emailIsValid === false ? (
            <span className="error-message">
              Please enter a valid email address !!!
            </span>
          ) : (
            ""
          )}
        </div>
        <div className={passwordIsValid === false ? "inValid" : ""}>
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
          <a href="/">Have an account ? Please Login !</a>
        </div>
      </form>
    </Card>
  );
}

export default Register;
