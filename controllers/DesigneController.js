const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const asyncHandler = require("express-async-handler")
const Designe = require("../models/DesignModel")

const addDesigne=asyncHandler(async (req,res)=>{
try {
    const {title,dateAjout,description,rating,utilisateur} = req.body
    let designe = new  Designe({
        title:title,
        dateAjout:Date(dateAjout),
        description : description,
        rating : rating,
        utilisateur : utilisateur
    })
    if (req.file){
        designe.fichier=req.file.path
    }
    designe.save().then(
        response=>{
            res.status(200).json({message:"Designe added succesfuly"})
        }
    ).catch(erreur=>{
        res.status(401)
        throw new Error('An erreur occured')
    })

}catch (e){
    res.staus(401)
    throw  new Error("somting went wrong")
}
})

const getAllDesigne=asyncHandler(async (req,res)=>{
    try {
        const designes = await Designe.find().populate({
            path : 'utilisateur',
            select : 'nom prenom email'
        })
        res.status(200).json(designes)
    }catch (err){
        res.status(401)
        throw new Error("somting went wrong")
    }
})
module.exports = {
    addDesigne,
    getAllDesigne
}