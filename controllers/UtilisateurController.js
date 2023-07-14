const asyncHandler = require("express-async-handler")
const Utilisateur = require("../models/UtilisateurModel")


const getAllUtilisateur = asyncHandler(async (req,res)=>{
    try{
        const utilisateurs = await Utilisateur.find().populate("utilisateur")
        res.status(200).json(utilisateurs)
    }catch (e){
        res.status(500).json({"message":"somthing went wrong"})
    }
})