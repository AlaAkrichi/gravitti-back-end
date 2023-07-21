const asyncHandler = require("express-async-handler")
const Commade = require('../models/CommandeModel')
const {addProduit} = require('./ProduitController')
const addCommande =asyncHandler(async (req,res)=>{
    try {
        if(req.body){
        let commade = await Commade.create({
            dateCommande: Date(req.body.dateCommande),
            quantite : parseInt(req.body.quantite),
            adress : req.body.adress,
            etatCommande : "en attend",
            qunatite :req.body.qunatite,
            client:req.body.client
        })
            produit = await  addProduit(req.body.designe,commade,req.body.produit)
            if(produit){
                commade.produit = produit
                commade.save()
                res.status(200).json(commade)
            }
        }else{
            throw new Error("empty body")
        }
    }catch (e){
        res.status(500)
        throw new Error(e.message)
    }
})
const getAllCommande=asyncHandler(async (req,res)=>{
    try {
       const commandes = await Commade.find().populate("utilisateur produit")
        res.status(200).json(commandes)
    }catch (e){
        throw new Error('somting went wrong')
    }
})
const getCommande = asyncHandler(async (req,res)=>{
    try {
        const commade = await Commade.findById(req.params.id).populate({
            path : 'utilisateur',
            select : "nom prenom tel email"
        },{
            path :"produit"
        })
        res.status(200).json(commade)
    }catch (e){
        throw new Error("somting went wrong")
    }
})
module.exports = {
    addCommande,
    getAllCommande
}