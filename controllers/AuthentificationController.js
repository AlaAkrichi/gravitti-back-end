const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const asyncHandler = require("express-async-handler")
const Utilisateur = require("../models/UtilisateurModel")

const Register = asyncHandler (async (req,res)=>{
    console.log(req.body)
    const {nom , prenom , email ,motDePasse,dateNaissance,tel}= req.body
    if(!nom || !prenom || !email ||!motDePasse || !dateNaissance || !tel){
        res.status(400)
        throw  new Error("request body empty")
    }
    const  exist = await Utilisateur.findOne({email})
    if(exist){
        res.status(400)
        throw new Error("utilisateur est deja enregistree")
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPw = await bcrypt.hash(motDePasse,salt)
    const utilisateur = await Utilisateur.create({
        nom:nom,
        prenom:prenom,
        email:email,
        motDePasse:hashedPw,
        dateDeNaissance:Date(dateNaissance),
        tel:Number(tel)
    })
    if(utilisateur){
        res.status(200).json({
            _id:utilisateur._id,
            nom:utilisateur.nom,
            prenom:utilisateur.prenom,
            email:utilisateur.email,
        })
    }else{
        res.status(400)
        throw  new Error("donne invalide")
    }
})
const Login = asyncHandler(async (req,res)=>{
    const {email,motDePass} = req.body
    const utilisateur = await Utilisateur.findOne({email})
    if(utilisateur && (await bcrypt.compare(motDePass,utilisateur.motDePasse))){
        res.status(200).json(
            {
                _id:utilisateur._id,
                nom:utilisateur.nom,
                prenom:utilisateur.prenom,
                email:utilisateur.email,
                token :makeToken(utilisateur._id,utilisateur.email)
            }
        )
    }else{
        res.status(400)
        throw new Error("Invalide conrdinantional")
    }

})

const makeToken = (id,email)=>{
    return jwt.sign({id,email},process.env.JWT_SECRET,{
        expiresIn: "1d"
    })
}
module.exports = {
    Login,Register
}