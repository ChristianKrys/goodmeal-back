
const mongoose = require("mongoose");
const {Schema} = mongoose;

const produitSchema = new Schema({
    urlPhoto : String,
    libelleProduit : String,
    prixProduit : {
        type : Number,
        min : 0
    },
    enstock : {
        type : Boolean,
        default : false
    },
    avecpublicite : {
        type : Boolean,
        default : false
    },
    description : String,
    codeProduit : String,
},{timestamps : true});


const Produit = mongoose.model('produits',produitSchema);

module.exports = {Produit};


/*     
    const emptyProduit = {
        urlPhoto:'',
        libelleProduit:'',
        prixProduit:0,
        enstock:false,
        avecpublicite:false,
        description:'',
        codeProduit:'',
        id:0
    } 

     */