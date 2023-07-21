const mongoose = require("mongoose")
const CommandeSchema = mongoose.Schema({
    dateCommande : {
        type : Date,
        required: true
    },
    qunatite : {
        type : Number,
        required: true
    },
    adress : {
        type : String,
        required : true
    },
    etatCommande : {
        type : String,
        required: true
    },
    produit:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "produit"
    },
    client : {
        type:mongoose.Schema.Types.ObjectId,
        ref : "utilisateur",
        required : true
    }
})
module.exports = mongoose.model("commande",CommandeSchema)