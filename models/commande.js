
const mongoose = require("mongoose");
const {Schema} = mongoose;

const commandeSchema = new Schema({
    tableArticle : [],
    idClient : {
        type : Number,
        min : 0,
        require : true,
        default : 0
    },
    statutCommande : String,
    dateCommande : String,
    heureCommande : String,
},{timestamps : true});

function montantTotalParCommande(tableArticle){
    let montant = 0;
    tableArticle.forEach(element => {
        montant += element.montantTotalParArticle(element.quantiteArticle,element.produit.prixProduit);                    
     });                           
    return montant;        
}


const Commande = mongoose.model('commandes',commandeSchema);
module.exports = {Commande,montantTotalParCommande};


/* 
const commande = {
    tableArticle : [],
    idClient : 0,
    statutCommande : '',
    dateCommande : null,
    heureCommande : null,
    montantTotalParCommande : (tableArticle)=>{
            let montant = 0;
            tableArticle.forEach(element => {
                montant += element.montantTotalParArticle(element.quantiteArticle,element.produit.prixProduit);                    
             });                           
            return montant;        
    },
}

 */
    
