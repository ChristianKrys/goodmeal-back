const express = require("express");
const { ajouterCommande,getToutCommande,getCommande,modifierCommande,supprimerCommande } = require("../controllers/commande");
const router = express.Router();

router.route("/commandes").post(ajouterCommande);
router.route("/commandes").get(getToutCommande);
router.route("/commandes/:id").get(getCommande);
router.route("/commandes/:id").put(modifierCommande);
router.route("/commandes/:id").delete(supprimerCommande);


module.exports = router;