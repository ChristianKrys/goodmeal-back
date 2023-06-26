const { Commande } = require("../models/commande")
const { ObjectId } = require("mongodb");

const ajouterCommande = async (req,res)=>{
    try {
        let commande = new Commande({    
            tableArticle : req.body.tableArticle,
            idClient : req.body.idClient,
            statutCommande : req.body.statutCommande,
            dateCommande : req.body.dateCommande,
            heureCommande : req.body.heureCommande,
          });

          commande.save()
              .then((result)=>{                          
                console.log("Enregistré avec succès !");
                res.status(200).json(result);
              })
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const getToutCommande = async (req,res)=>{
    try {
          Commande.find()
              .then((result)=>{                          
                //console.log("Enregistré avec succès !");
                res.status(200).json(result);
              })
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const getCommande = async (req,res)=>{
    try {
        let id = new ObjectId(req.params.id);
          Commande.findById(id)
              .then((result)=>{                          
                //console.log("Enregistré avec succès !");
                res.status(200).json(result);
              })
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const modifierCommande = async (req,res)=>{
    try {
        let id = new ObjectId(req.params.id);
          Commande.updateOne(
                {_id:id},
                {$set : {
                    tableArticle : req.body.tableArticle,
                    idClient : req.body.idClient,
                    statutCommande : req.body.statutCommande,
                    dateCommande : req.body.dateCommande,
                    heureCommande : req.body.heureCommande,
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

const supprimerCommande = async (req,res)=>{
    try {
        let id = new ObjectId(req.params.id);
          Commande.deleteOne({_id:id})
              .then((result)=>{                          
                console.log("Supprimé avec succès !");
                res.status(200).json(result);
              })
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports = {ajouterCommande,getToutCommande,getCommande,modifierCommande,supprimerCommande};