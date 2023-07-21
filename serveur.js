const express = require('express')
const color = require("colors")
const dotenv = require("dotenv").config()
const cors = require("cors")
const app = express()
const {errorHandler}= require("./middelware/ErreurHandlerMiddelware")
const db = require("./config/DataBaseConfig")
const bodyParser = require("body-parser")


db()
app.use(bodyParser.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
const port = process.env.PORT || 5000
app.use('/uplods/*',express.static('uploads'))
app.use("/api/utilisateur",require("./routes/UtilisateurRoutes"))
app.use("/api/authentification",require("./routes/AuthentificationRoutes"))
app.use("/api/designes",require("./routes/DesignesRoutes"))
app.use("/api/commandes",require("./routes/CommandeRoutes"))
app.use(errorHandler)
app.listen(port,()=>{
    console.log(`serveur started on port ${port}`.blue.bold.underline)
})