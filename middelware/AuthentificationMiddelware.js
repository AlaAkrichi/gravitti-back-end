const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const Utilisateur = require("../models/UtilisateurModel")


const protection = asyncHandler(async (req,res,next)=>{
    let token
    let header = req.headers.authorization
    if( header && header.startsWith("Bearer")) {
        try {
            token = header.split(' ')[1]
            const decode = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await Utilisateur.findById(decode.id).select("-motDePass")
            next()
        } catch (err) {
            res.status(401)
            throw new Error("not authorized")
        }
    }
    if(!token){
        res.status(401)
        throw new Error("not authporized")
    }
})

module.exports = {
    protection
}