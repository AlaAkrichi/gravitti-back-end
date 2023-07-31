const express = require("express");
const routes = express.Router();
const {
  addDesigne,
  getAllDesigne,
  getDesign,
  updateDesign,
  deleteDesign,
} = require("../controllers/DesigneController");
const upload = require("../middelware/DesigneUploadMiddelware");
const {
  userProtection,
  designerProtection,
} = require("../middelware/AuthentificationMiddelware");
// Your route definitions and other code...
routes
  .route("/")
  .post(upload.single("fichier"), designerProtection, addDesigne)
  .get(userProtection, getAllDesigne);
routes
  .route("/:id")
  .get(userProtection, getDesign)
  .patch(upload.single("fichier"), designerProtection, updateDesign)
  .delete(designerProtection, deleteDesign);

module.exports = routes;
