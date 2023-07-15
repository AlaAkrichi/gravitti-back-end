const express = require("express")
const routes = express.Router()
const {Login,Register} = require("../controllers/AuthentificationController")

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
 * /register:
 *   post:
 *     summary: Sign up user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Utilisateur'
 *     responses:
 *       200:
 *         description: User registration successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Utilisateur'
 *       500:
 *         description: Internal server error
 */
    routes.post("/register",Register)
/**
 * @swagger
 * /login:
 *   post:
 *     summary: User login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               motDePasse:
 *                 type: string
 *             required:
 *               - email
 *               - motDePasse
 *     responses:
 *       200:
 *         description: User login successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Utilisateur'
 *       401:
 *         description: Unauthorized - Invalid credentials
 *       500:
 *         description: Internal server error
 */
routes.post("/login",Login)

module.exports = routes