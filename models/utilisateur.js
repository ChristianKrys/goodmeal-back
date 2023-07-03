
const mongoose = require("mongoose");
const {Schema} = mongoose;
const utilisateurSchema = new Schema({    
    nomUtilisateur : String,
    prenomUtilisateur : String,
    telephoneUtilisateur : String,
    emailUtilisateur : String,
    addresseUtilisateur : String,
    statutUtilisateur : String,  
    login : String,
    pwd : String, 
    typeCompteUtilisateur : {
        type : String,
        default : 'visiteur' 
    }  
},{timestamps : true});

const Utilisateur = mongoose.model('utilisateurs',utilisateurSchema);
module.exports = {Utilisateur}

/* 
const utilisateur = {        
    nomUtilisateur : '',
    prenomUtilisateur : '',
    telephoneUtilisateur : '',
    emailUtilisateur : '',
    addresseUtilisateur : '',
    statutUtilisateur : '',  
    typeCompteUtilisateur : 'visiteur',
    login : '',
    pwd : ''       
}

 */