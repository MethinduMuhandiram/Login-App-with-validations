import React from "react";
import Button from "../UI/Button";
import "./Navigation.css";

function Navigation(props) {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="/">User</a>
        </li>
        <li>
          <a href="/">Admin</a>
        </li>
        {props.onAuthentication && (
          <li>
            <Button onClick={props.onLogout}>Logout</Button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
