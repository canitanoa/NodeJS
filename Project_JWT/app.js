const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.listen(3000, function(){
    console.log("node app running in ->lear http://localhost:3000");
})

/*Definimos los endpoints*/
//GET
app.get("/api", (req, res) =>{
    res.json({
        messaje: "Nodejs and JWT"
    })
});


