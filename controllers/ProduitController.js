const asyncHandler = require("express-async-handler")
const Produit = require("../models/ProduitModel")
const addProduit =asyncHandler(async (designe,commande,data)=>{
    try {

        const {Type,prix,reference,caracterstique,titre,description}=data
        if(data && designe && commande ){
        let produit = await  Produit.create({
            description:description,
            Type:Type,
            titre:titre,
            prix : Number(prix),
            reference : reference,
            caracterstique : caracterstique,
            designe : designe,
            commande : commande
        })
        return produit
        }else {
            throw new Error('some fields are empty')
        }
    }catch (err){
        throw new Error(err.message)
    }
})
const deleteProduit =asyncHandler(async (id)=>{
    try{
        const produit = await Produit.findByIdAndDelete(id)
        if(produit){
            return produit
        }
    }catch (e) {
        throw new Error("somting went wrong")
    }
})
module.exports={
    addProduit,
    deleteProduit
}