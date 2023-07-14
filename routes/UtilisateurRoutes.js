const express = require("express")
const routes = express.Router()
const {getAllUtilisateurs}= require("../controllers/UtilisateurController")
const {protection} = require("../middelware/AuthentificationMiddelware")

routes.get("/",protection,(req,res)=>{
    getAllUtilisateurs(req,res)
})

module.exports = routes