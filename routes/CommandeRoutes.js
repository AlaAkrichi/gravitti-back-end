const express = require("express")
const routes = express.Router()
const {addCommande,getAllCommande}=require("../controllers/CommandeController")
const {userProtection}=require("../middelware/AuthentificationMiddelware")
routes.route("/").post(addCommande).get(getAllCommande)

module.exports = routes