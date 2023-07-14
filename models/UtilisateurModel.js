const mongoose = require("mongoose")
const utilisateurSchema = mongoose.Schema({
    nom :{
        type : String,
        required : true
    },
    prenom : {
        type : String,
        required: true
    },
    email :{
        type : String,
        required : true
    },
    motDePasse: {
        type : String,
        required:true
    },
    dateDeNaissance:{
        type:Date,
        required:true
    },
    role : {
        type: String,
        enum : ["Client","Administrateur","Designeur","Imprimeur","Vendeur","Livreur"],
        default:"Client"
    },
    tel:{
        type: Number,
        required : true
    },
    utilisateur:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'utilisateur'
    }
})

module.exports = mongoose.model('utilisateur',utilisateurSchema)