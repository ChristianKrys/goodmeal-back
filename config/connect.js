
const mongoose = require("mongoose");

//----- Serveur de donnees ---------
const db_Url = process.env.ENV_db_Url; 


function connecter(lanceServeur){
    //--- Connexion à la bd ----------------
    const lanceur = lanceServeur;
    (async ()=>{
        await mongoose.connect(db_Url)
        .then((result)=>{
            lanceur();
        })
        .catch((err)=>{
            console.log(err);
            process.exit(-1);
        })
    })();
}

module.exports = {connecter};

