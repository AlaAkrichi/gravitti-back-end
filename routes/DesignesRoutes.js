const express = require("express")
const routes = express.Router()
const {addDesigne,getAllDesigne,getDesign,updateDesign,deleteDesign}= require("../controllers/DesigneController")
const upload = require("../middelware/DesigneUploadMiddelware")
const {userProtection, designerProtection} =require("../middelware/AuthentificationMiddelware")

/**
 * @swagger
 * components:
 *   schemas:
 *     Design:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         dateAjout:
 *           type: string
 *           format: date-time
 *         description:
 *           type: string
 *         fichier:
 *           type: string
 *         rating:
 *           type: number
 *         utilisateur:
 *           type: string
 *           description: ID of the associated utilisateur
 *       required:
 *         - title
 *         - dateAjout
 *         - description
 *         - fichier
 *         - rating
 *         - utilisateur
 */

/**
 * @swagger
 * /designes:
 *   post:
 *     summary: Add a new designe
 *     description: Upload a file and add a new designe
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               fichier:
 *                 type: string
 *                 format: binary
 *             required:
 *               - fichier
 *     responses:
 *       200:
 *         description: Designe added successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 *   get:
 *     summary: Get all designes
 *     description: Retrieve all designes
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
 * /designes/{id}:
 *   get:
 *     summary: Get designe by ID
 *     description: Retrieve a designe by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the designe
 *     responses:
 *       200:
 *         description: OK
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 */

// Your route definitions and other code...


routes.route('/').post(upload.single('fichier'),designerProtection,addDesigne).get(userProtection,getAllDesigne)
routes.route('/:id').get(userProtection,getDesign).patch(upload.single('fichier'),designerProtection,updateDesign).delete(designerProtection,deleteDesign)

module.exports = routes