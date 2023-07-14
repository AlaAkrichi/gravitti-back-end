const express = require('express')
const color = require("colors")
const dotenv = require("dotenv").config()
const cors = require("cors")
const app = express()
const db = require("./config/DataBaseConfig")
db()

const port = process.env.PORT || 5000



app.listen(port,()=>{
    console.log(`serveur started on port ${port}`.blue.bold.underline)
})