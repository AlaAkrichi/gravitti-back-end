const express = require("express")
const routes = express.Router()
const {getAllUtilisateurs,getUtilisateur,updateUtilisateur,deleteUtilisateur}= require("../controllers/UtilisateurController")
const {adminProtection} = require("../middelware/AuthentificationMiddelware")

/**
 * @swagger
 * components:
 *   schemas:
 *     Utilisateur:
 *       type: object
 *       properties:
 *         nom:
 *           type: string
 *         prenom:
 *           type: string
 *         email:
 *           type: string
 *         motDePasse:
 *           type: string
 *         dateDeNaissance:
 *           type: string
 *           format: date
 *         role:
 *           type: string
 *           enum: [Client, Administrateur, Designeur, Imprimeur, Vendeur, Livreur]
 *         tel:
 *           type: number
 *       required:
 *         - nom
 *         - prenom
 *         - email
 *         - motDePasse
 *         - dateDeNaissance
 *         - role
 *         - tel
 */
/**
 * @swagger
 * /utilisateurs:
 *   get:
 *     summary: Get all utilisateurs
 *     description: Retrieve all utilisateurs
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: OK
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 *
 * /utilisateurs/{id}:
 *   get:
 *     summary: Get utilisateur by ID
 *     description: Retrieve an utilisateur by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the utilisateur
 *     responses:
 *       200:
 *         description: OK
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 *   patch:
 *     summary: Update utilisateur by ID
 *     description: Update an utilisateur by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the utilisateur
 *     responses:
 *       200:
 *         description: OK
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 *   delete:
 *     summary: Delete utilisateur by ID
 *     description: Delete an utilisateur by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the utilisateur
 *     responses:
 *       204:
 *         description: No Content
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 */
routes.route('/').get(adminProtection,(req,res)=>{
    getAllUtilisateurs(req,res)
})
routes.route("/:id").get(adminProtection,(req,res)=>{
    getUtilisateur(req,res)
}).patch(adminProtection,(req,res)=>{
    updateUtilisateur(req,res)
}).delete(adminProtection,(req,res)=>{
deleteUtilisateur(req,res)
})

module.exports = routes