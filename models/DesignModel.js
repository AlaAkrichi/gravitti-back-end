const mongoose = require("mongoose")
const DesignSchema = mongoose.Schema({
    title : {
        type: String,
        required : true
    },
    dateAjout : {
        type: Date,
        required: true
    },
    description:{
        type : String,
        required : true
    },
    fichier :{
        type: String ,
        required : true
    },
    rating : {
        type : Number,
        required : true
    },
    utilisateur : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "utilisateur",
        required : true
    }
})
module.exports = mongoose.model('designe',DesignSchema)