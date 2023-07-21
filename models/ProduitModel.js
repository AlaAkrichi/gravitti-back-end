const mongoose = require("mongoose")
const ProduitSchema = mongoose.Schema({
    description : {
      type: String,
      required: true
    },
    titre : {
        type: String,
        required : true
    },
    Type : {
        type : String ,
        required :true
    },
    prix : {
        type : Number,
        required: true
    },
    reference : {
        type: String,
        required : true
    },
    caracterstique:{
        type : {},
        required : true
    },
    designe : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "designe",
        required : true
    }
})
module.exports = mongoose.model("produit",ProduitSchema)
