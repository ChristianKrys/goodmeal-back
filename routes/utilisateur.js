const express = require("express");
const { ajouterUtilisateur,getToutUtilisateur,getUtilisateur,modifierUtilisateur,supprimerUtilisateur } = require("../controllers/utilisateur");
const router = express.Router();

router.route("/utilisateurs").post(ajouterUtilisateur);
router.route("/utilisateurs").get(getToutUtilisateur);
router.route("/utilisateurs/:id").get(getUtilisateur);
router.route("/utilisateurs/:id").put(modifierUtilisateur);
router.route("/utilisateurs/:id").delete(supprimerUtilisateur);


module.exports = router;