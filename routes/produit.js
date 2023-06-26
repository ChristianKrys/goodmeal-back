const express = require("express");
const { ajouterProduit,getToutProduit,getProduit,modifierProduit,supprimerProduit } = require("../controllers/produit");
const router = express.Router();

const upload = require('../controllers/upload');


router.post("/produits",upload.single('avatar'),ajouterProduit);
router.get("/produits",getToutProduit);
router.get("/produits/:id",getProduit);
router.put("/produits/:id",modifierProduit);
router.delete("/produits/:id",supprimerProduit);


module.exports = router;






/* router.route("/produits").post(ajouterProduit);
router.route("/produits").get(getToutProduit);
router.route("/produits/:id").get(getProduit);
router.route("/produits/:id").put(modifierProduit);
router.route("/produits/:id").delete(supprimerProduit);


module.exports = router; */