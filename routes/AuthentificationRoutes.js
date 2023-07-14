const express = require("express")
const routes = express.Router()
const {Login,Register} = require("../controllers/AuthentificationController")

routes.post("/register",Register)
routes.post("/login",Login)

module.exports = routes