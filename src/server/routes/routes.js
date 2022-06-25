const express = require("express");
const router = express.Router();
const User = require("../models/userModels");
// var jwt = require("jsonwebtoken");

router.post("/login", function (req, res) {
  let { email, password } = req.body;

  User.findOne({ email: email }, function (err, foundUser) {
    if (foundUser) {
      if (foundUser.password === password) {
        // let token = jwt.sign(
        //   {
        //     email: foundUser.email,
        //     password: foundUser.password
        //   },
        //   "secret",
        //   { expiresIn: "24h" }
        // );
        // res.send("Successfully Logged in !");
        res.json({
          success: true,
          message: "Successfully logged in !"
          // token: token
        });
      } else {
        res.send("Wrong Password !");
      }
    } else {
      res.send("Not Registered !");
    }
  });
});

router.post("/", function (req, res) {
  let { firstName, lastName, email, password } = req.body;
  const newUser = new User({
    firstName,
    lastName,
    email,
    password
  });
  newUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;

// {"_id":{"$oid":"6294aa61f00c98019933b3b7"},"firstName":"Methindu","lastName":"mm","email":"m@mm.com","password":"M@methindu93","isAdmin":false,"date":{"$date":{"$numberLong":"1653910113345"}},"__v":{"$numberInt":"0"}}
