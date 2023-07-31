const express = require("express");
const routes = express.Router();
const {
  Login,
  Register,
  Logout,
} = require("../controllers/AuthentificationController");

routes.post("/register", Register);
routes.post("/login", Login);
routes.post("/logout/:id", Logout);

module.exports = routes;
