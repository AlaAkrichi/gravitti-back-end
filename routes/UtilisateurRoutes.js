const express = require("express")
const routes = express.Router()
const {getAllUtilisateurs,getUtilisateur,updateUtilisateur,deleteUtilisateur}= require("../controllers/UtilisateurController")
const {adminProtection} = require("../middelware/AuthentificationMiddelware")


routes.route('/').get(adminProtection,(req,res)=>{
    getAllUtilisateurs(req,res)
})
routes.route("/:id").get(adminProtection,(req,res)=>{
    getUtilisateur(req,res)
}).patch(adminProtection,(req,res)=>{
    updateUtilisateur(req,res)
}).delete(adminProtection,(req,res)=>{
deleteUtilisateur(req,res)
})

module.exports = routes