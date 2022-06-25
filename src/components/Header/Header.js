import React from "react";

import Navigation from "./Navigation";

import "./Header.css";

function Header(props) {
  return (
    <header className="header">
      <h1>
        <img src={"./icons8-login-66.png"} />
        Login App
      </h1>
      <Navigation
        onAuthentication={props.onAuthentication}
        onLogout={props.onLogout}
      />
    </header>
  );
}

export default Header;
