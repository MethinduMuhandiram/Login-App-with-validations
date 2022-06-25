import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Home from "./components/Pages/Home";
import Register from "./components/Register/Register";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("isLoggedIn");
    if (storedData === "1") {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  function loginHandler(email, password) {
    let userData = { email, password };
    //
    fetch("http://localhost:5000/app/login", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) =>
      response.json().then((result, err) => {
        if (!err) {
          console.log(result);
          localStorage.setItem("isLoggedIn", "1");
          setIsLoggedIn(true);
        } else {
          console.log(result);
        }
      })
    );
  }
  // localStorage.setItem(
  //   "login",
  //   JSON.stringify({
  //     login: true,
  //     token: result.token
  //   })
  // );

  function logoutHandler() {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  }

  function regHandler() {}

  return (
    <BrowserRouter>
      <div className="App">
        <Header onAuthentication={isLoggedIn} onLogout={logoutHandler} />
        <Routes>
          <Route
            path="/register"
            element={<Register onRegister={regHandler} />}
          />
          <Route
            path="/"
            element={!isLoggedIn && <Login onLogin={loginHandler} />}
          />
        </Routes>
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </div>
    </BrowserRouter>
  );
}

export default App;
