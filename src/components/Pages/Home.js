import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./Home.module.css";

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h3>Congratulations! You've Successfully Logged In !</h3>
      <Button onClick={props.onLogout}>Logout</Button>
      
    </Card>
  );
};

export default Home;
