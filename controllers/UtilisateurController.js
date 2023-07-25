const asyncHandler = require("express-async-handler")
const Utilisateur = require("../models/UtilisateurModel")
const bcrypt = require("bcryptjs");


const getAllUtilisateurs = asyncHandler(async (req,res)=>{
    try{
        const utilisateurs = await Utilisateur.find().populate(
            {
                path:"utilisateur",
                select :"-motDePasse"
            }
        ).select('-motDePasse')
        res.status(200).json(utilisateurs)
    }catch (e){
        res.status(500)
        throw new Error("somthing went wrong")
    }
})

const getUtilisateur = asyncHandler(async (req,res)=>{
    try {
        let id = req.params.id
        const utilisateur = await Utilisateur.findById(id).populate("commentaires commandes produits designs").populate(
            {
                path:"utilisateur",
                select :"-motDePasse"
            }
        ).select('-motDePasse')
        res.status(200).json(utilisateur)
    }catch (e){
        res.status(500)
        throw new Error("somthing went wrong")
    }
})

const updateUtilisateur=asyncHandler(async (req,res)=>{
    if(Object.keys(req.body).length>0) {
        let id = req.params.id
        if(req.body.motDePasse){
            const salt = await bcrypt.genSalt(10)
            const hashedPw = await bcrypt.hash(req.body.motDePasse, salt)
            req.body.motDePasse = hashedPw
        }
        const utilisateur = await Utilisateur.findByIdAndUpdate(id, req.body)
        res.status(200).json({message:"update done"})
    }else {
        throw new Error("update not succes")
    }
})
const deleteUtilisateur = asyncHandler(async (req,res)=> {
    let id = req.params.id
    const utilisateur = await Utilisateur.findByIdAndDelete(id)
    if(!utilisateur){
        res.status(401)
        throw new Error("user not found")
    }
    res.status(200).json({id:id})
    })
module.exports = {
    getAllUtilisateurs,
    getUtilisateur,
    updateUtilisateur,
    deleteUtilisateur
}