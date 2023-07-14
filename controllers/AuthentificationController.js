const asyncHandler = require("express-async-handler")
const Utilisateur = require("../models/UtilisateurModel")

const Register = (req,res)=>{
    res.json({"message":"register controller"})
}
const Login = (req,res)=>{
    res.json({"message":"login controller"})
}
module.exports = {
    Login,Register
}