const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const Utilisateur = require("../models/UtilisateurModel");
const Tokens = require("../models/TokenModel");

const protect = (role) =>
  asyncHandler(async (req, res, next) => {
    let token;
    let header = req.headers.authorization;
    if (header && header.startsWith("Bearer")) {
      try {
        token = header.split(" ")[1];
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        const tokenfind = await Tokens.findOne({ token });
        if (tokenfind === null) {
          console.log(tokenfind);
          res.status(401);
          throw new Error("Not authentifier");
        } else {
          req.user = await Utilisateur.findById(decode.id).select("-motDePass");
          if (role && req.user.role !== role) {
            res.status(401);
            throw new Error("Not authorized");
          }
          next();
        }
      } catch (err) {
        res.status(401);
        throw new Error("Not authorized");
      }
    }
    if (!token) {
      res.status(401);
      throw new Error("Not authorized");
    }
  });

const userProtection = protect();
const adminProtection = protect("Administrateur");
const designerProtection = protect("Designeur");
const imprimaireProtection = protect("Imprimeur");
module.exports = {
  userProtection,
  designerProtection,
  adminProtection,
  imprimaireProtection,
};
