const express = require("express")
const routes = express.Router()
const {addCommande,getAllCommande,deletCommande, getCommande,updateCommande, getAllCommandeByClient}=require("../controllers/CommandeController")
const {userProtection,imprimaireProtection}=require("../middelware/AuthentificationMiddelware")
routes.route("/").post(userProtection,addCommande).get(imprimaireProtection,getAllCommande)
routes.get("/all/:id",userProtection,getAllCommandeByClient)
routes.route('/:id').delete(userProtection,deletCommande).get(userProtection,getCommande).patch(userProtection,updateCommande)
module.exports = routes