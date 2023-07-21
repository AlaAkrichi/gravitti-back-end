const fs = require("fs");
const asyncHandler = require("express-async-handler")
const Designe = require("../models/DesignModel")

const addDesigne=asyncHandler(async (req,res)=>{
try {
    const {title,dateAjout,description,rating,designer} = req.body
    let designe = new  Designe({
        title:title,
        dateAjout:Date(dateAjout),
        description : description,
        rating : rating,
        designer : designer
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
        throw new Error(erreur.message)
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
            select : '-motDePasse'
        })
        res.status(200).json(designes)
    }catch (err){
        res.status(401)
        throw new Error("somting went wrong")
    }
})
const getDesign=(asyncHandler(async (req,res)=>{
    try{
        let id = req.params.id
        const designe = await Designe.findById(id).populate({
            path : 'utilisateur',
            select : '-motDePasse'
        })
        res.status(200).json(designe)
    }catch (err){
        res.status(401)
        throw new Error("somting went wrong")
    }
}))

const updateDesign = asyncHandler(async (req, res) => {
    if (Object.keys(req.body).length > 0 || req.file) {
        const id = req.params.id;
        if (req.file) {
            req.body.fichier = req.file.path;
        }
        const design = await Designe.findById(id);
        if (!design) {
            return res.status(404).json({ message: "Design not found" });
        }

        const previousFilePath = design.fichier;

       const deleted =  await Designe.findByIdAndUpdate(id, req.body);
       if(!deleted){
           throw new Error("Update failed")
       }else {

           // Delete the previous file if it exists
           if (previousFilePath) {
               fs.unlink(previousFilePath, (err) => {
                   if (err) {
                       console.error("Failed to delete previous file:", err);
                   }
               });
           }

           res.status(200).json({message: "Update done"});
       }
    } else {
        throw new Error("Update didn't succeed");
    }
});

const deleteDesign = asyncHandler(async (req, res) => {
        const id = req.params.id;
        const design = await Designe.findById(id);
        if (!design) {
            return res.status(404).json({ message: "Design not found" });
        }
        const previousFilePath = design.fichier;

        const deleted =  await Designe.findByIdAndDelete(id);
        if(!deleted){
            throw new Error("Deleted failed failed")
        }else {
            // Delete the previous file if it exists
            if (previousFilePath) {
                fs.unlink(previousFilePath, (err) => {
                    if (err) {
                        console.error("Failed to delete previous file:", err);
                    }
                });
            }
            res.status(200).json({message: "Delete  done"});
        }
});
module.exports = {
    addDesigne,
    getAllDesigne,
    getDesign,
    updateDesign,
    deleteDesign
}