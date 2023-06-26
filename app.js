
require('dotenv').config();
//const dotenv = require('dotenv');
//dotenv.config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { connecter } = require('./config/connect');
const routeUtilisateur = require("./routes/utilisateur");
const routeProduit = require("./routes/produit");
const routeCommande = require("./routes/commande");

const app = express();

app.use(cors());
app.use(express.urlencoded({extended : true,limit : '10mb'}));
app.use(express.json({limit : '10mb'}));

//app.use("/goodmeal-api/v1",express.static('public'));
//http://localhost:3002/goodmeal-api/v1/images/burger.jpg



app.use("/goodmeal-api/v1",routeUtilisateur);
app.use("/goodmeal-api/v1",routeProduit);
app.use("/goodmeal-api/v1",routeCommande);


//-- serving the frontend -------
app.use(express.static(path.join(__dirname,'client','build')));
app.get("/",(req,res)=>{
    res.sendFile(
        path.join(__dirname,'client','build','index.html'),
        (err)=>{
            res.status(500).send(err);
        }
    );
});

const lanceServeur = ()=>{
    const Port_Serveur = process.env.ENV_Port_Serveur;
    const IP_Serveur = process.env.ENV_IP_Serveur;
    
    app.listen(Port_Serveur,IP_Serveur,(err)=>{
        console.log("Serveur en écoute au port "+Port_Serveur);
    })
}
connecter(lanceServeur);





