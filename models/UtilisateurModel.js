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
        enum : ["Client","Administrateur","Designeur","Imprimeur"],
        default:"Client"
    },
    tel:{
        type: Number,
        required : true
    },
    utilisateur:{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'utilisateur'
    },
    commentaires : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "commentaire"
    }],
    commandes : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "commande"
    }],
    produits : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "produit"
    }],
    designs : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "designe"
    }]
})

module.exports = mongoose.model('utilisateur',utilisateurSchema)