const { Utilisateur } = require("../models/utilisateur")
const { ObjectId } = require("mongodb");

const ajouterUtilisateur = async (req,res)=>{
    try {
        let utilisateur = new Utilisateur({    
            nomUtilisateur : req.body.nomUtilisateur,
            prenomUtilisateur : req.body.prenomUtilisateur,
            telephoneUtilisateur : req.body.telephoneUtilisateur,
            emailUtilisateur : req.body.emailUtilisateur,
            addresseUtilisateur : req.body.addresseUtilisateur,
            statutUtilisateur : req.body.statutUtilisateur,  
            typeCompteUtilisateur : req.body.typeCompteUtilisateur, 
            login : req.body.login,
            pwd : req.body.pwd
          });

          utilisateur.save()
              .then((result)=>{                          
                console.log("Enregistré avec succès !");
                res.status(200).json(result);
              })
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}


const getToutUtilisateur = async (req,res)=>{
    try {
          Utilisateur.find()
              .then((result)=>{                          
                //console.log("Enregistré avec succès !");
                //res.set()
                res.status(200).json(result);
              })
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const getUtilisateur = async (req,res)=>{
    try {
        let id = new ObjectId(req.params.id);
          Utilisateur.findById(id)
              .then((result)=>{                          
                //console.log("Enregistré avec succès !");
                res.status(200).json(result);
              })
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

const modifierUtilisateur = async (req,res)=>{
    try {
        let id = new ObjectId(req.params.id);
          Utilisateur.updateOne(
                {_id:id},
                {$set : {
                    nomUtilisateur : req.body.nomUtilisateur,
                    prenomUtilisateur : req.body.prenomUtilisateur,
                    telephoneUtilisateur : req.body.telephoneUtilisateur,
                    emailUtilisateur : req.body.emailUtilisateur,
                    addresseUtilisateur : req.body.addresseUtilisateur,
                    statutUtilisateur : req.body.statutUtilisateur,  
                    typeCompteUtilisateur : req.body.typeCompteUtilisateur  
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

const supprimerUtilisateur = async (req,res)=>{
    try {
        let id = new ObjectId(req.params.id);
          Utilisateur.deleteOne({_id:id})
              .then((result)=>{                          
                console.log("Supprimé avec succès !");
                res.status(200).json(result);
              })
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports = {ajouterUtilisateur,getToutUtilisateur,getUtilisateur,modifierUtilisateur,supprimerUtilisateur};