const { Produit } = require("../models/produit")
const { ObjectId } = require("mongodb");

const ajouterProduit = async (req,res)=>{
    try {
        let produit = new Produit({   
            urlPhoto : req.body.urlPhoto,
            libelleProduit : req.body.libelleProduit,
            prixProduit : req.body.prixProduit,
            enstock : req.body.enstock,
            avecpublicite : req.body.avecpublicite,
            description : req.body.description,
            codeProduit : req.body.codeProduit,
          });
/*           if(req.file){
            produit.urlPhoto = req.file.path;
          } */

          produit.save()
              .then((result)=>{                          
                console.log("Enregistré avec succès !");
                res.status(200).json(result);
              })
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const getToutProduit = async (req,res)=>{
    try {
          Produit.find()
              .then((result)=>{                          
                //console.log("Enregistré avec succès !");
                res.status(200).json(result);
              })
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


const getProduit = async (req,res)=>{
    try {
        let id = new ObjectId(req.params.id);
          Produit.findById(id)
              .then((result)=>{                          
                //console.log("Enregistré avec succès !");
                res.status(200).json(result);
              })
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const modifierProduit = async (req,res)=>{
    try {
        let id = new ObjectId(req.params.id);
          Produit.updateOne(
                {_id:id},
                {$set : {
                    urlPhoto : req.body.urlPhoto,
                    libelleProduit : req.body.libelleProduit,
                    prixProduit : req.body.prixProduit,
                    enstock : req.body.enstock,
                    avecpublicite : req.body.avecpublicite,
                    description : req.body.description,
                    codeProduit : req.body.codeProduit
                    }
                }
            )
              .then((result)=>{                          
                console.log("Modifié avec succès !");
                res.status(200).json(result);
              })
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const supprimerProduit = async (req,res)=>{
    try {
        let id = new ObjectId(req.params.id);
          Produit.deleteOne({_id:id})
              .then((result)=>{                          
                console.log("Supprimé avec succès !");
                res.status(200).json(result);
              })
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports = {ajouterProduit,getToutProduit,getProduit,modifierProduit,supprimerProduit};