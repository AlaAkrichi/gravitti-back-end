const mongoose = require("mongoose");
const tokenShcema = mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
  tokenType: {
    type: String,
    enum: ["login", "restPassword"],
  },
  utilisateur: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "utilisateur",
    required: true,
  },
});
module.exports = mongoose.model("tokens", tokenShcema);
