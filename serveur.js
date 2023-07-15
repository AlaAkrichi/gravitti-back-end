const express = require('express')
const color = require("colors")
const dotenv = require("dotenv").config()
const cors = require("cors")
const app = express()
const {errorHandler}= require("./middelware/ErreurHandlerMiddelware")
const db = require("./config/DataBaseConfig")
const bodyParser = require("body-parser")
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express");

db()
app.use(bodyParser.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
const port = process.env.PORT || 5000
const options = {
    definition: {
        openapi: "3.1.0",
        info: {
            title: "Graffiti api documentation",
            version: "0.1.0",
            description:
                "This is a simple CRUD API application made with Express and documented with Swagger",
        },
        servers: [
            {
                url: "http://localhost:5000",
            },
        ],
    },
    apis: ["./routes/*.js"],
};
const specs = swaggerJsdoc(options);
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs,{explorer:true})
);
app.use('/uplods/*',express.static('uploads'))
app.use("/api/utilisateur",require("./routes/UtilisateurRoutes"))
app.use("/api/authentification",require("./routes/AuthentificationRoutes"))
app.use("/api/designes",require("./routes/DesignesRoutes"))
app.use(errorHandler)
app.listen(port,()=>{
    console.log(`serveur started on port ${port}`.blue.bold.underline)
})