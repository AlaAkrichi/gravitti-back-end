const express = require("express")
const routes = express.Router()
const {addDesigne,getAllDesigne}= require("../controllers/DesigneController")
const upload = require("../middelware/DesigneUploadMiddelware")
const {userProtection, designerProtection} =require("../middelware/AuthentificationMiddelware")

routes.post('/ajouterDesigne',upload.single('fichier'),designerProtection,addDesigne)
routes.get('/',userProtection,getAllDesigne)

module.exports = routes