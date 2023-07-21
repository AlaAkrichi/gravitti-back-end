const mongoose = require("mongoose")
const CommentaireSchema = mongoose.Schema({
    commentaire : {
        type: String,
        required : true
    },
    dateCommenraire : {
        type : Date,
        required: true,
        default : Date.now()
    },
    utilisateur :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "utilisateur",
        required : true
    },
    designe : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "designe",
        required : true
    }
})
module.exports = mongoose.model("commentaire",CommentaireSchema)