const express = require("express");

const app = express();

app.listen(4000, function(){
    console.log("node app running in ->lear http://localhost:4000");
})

/*Definimos los endpoints*/
//GET
app.get("/api", (req, res) =>{
    res.json({
        messaje: "Nodejs and LDAP"
    })
});