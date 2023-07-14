const express = require("express")
const routes = express.Router()
const {getAllUtilisateurs}= require("../controllers/UtilisateurController")

routes.get("/",(req,res)=>{
    getAllUtilisateurs(req,res)
})

module.exports = routes