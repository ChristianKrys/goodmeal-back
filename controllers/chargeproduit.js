const {readFileSync,writeFileSync} = require('fs');
const { Produit } = require('../models/produit');
const fichJSON = JSON.parse(readFileSync('./public/produits.json','utf-8'));

const fich = ()=>{
    let produit = new Produit({});
    fichJSON.map((newProduit)=>{
        produit = new Produit({   
        urlPhoto : newProduit.urlPhoto,
        libelleProduit : newProduit.libelleProduit,
        prixProduit : newProduit.prixProduit,
        enstock : newProduit.enstock,
        avecpublicite : newProduit.avecpublicite,
        description : newProduit.description,
        codeProduit : newProduit.codeProduit
      });
      produit.save();
    }
);
}


module.exports = fich;