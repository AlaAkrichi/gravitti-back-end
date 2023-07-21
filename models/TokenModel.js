const mongoose = require("mongoose")
const toeknShcema = mongoose.Schema({
    token:{
        type :String,
        required:true
    },
    utilisateur : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "utilisateur",
        required: true
    }
})
module.exports = mongoose.model('tokens',toeknShcema)