const express = require('express')
const color = require("colors")
const dotenv = require("dotenv").config()
const cors = require("cors")
const app = express()
const db = require("./config/DataBaseConfig")
const bodyParser = require("body-parser")
db()
app.use(bodyParser.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
const port = process.env.PORT || 5000



app.listen(port,()=>{
    console.log(`serveur started on port ${port}`.blue.bold.underline)
})