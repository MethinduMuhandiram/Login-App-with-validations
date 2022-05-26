import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Home from "./components/Pages/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("isLoggedIn");
    if (storedData === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  function loginHandler() {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  }

  function logoutHandler() {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <Header onAuthentication={isLoggedIn} onLogout={logoutHandler} />

      {isLoggedIn && <Home />}
      {!isLoggedIn && <Login onLogin={loginHandler} />}
    </div>
  );
}

export default App;
