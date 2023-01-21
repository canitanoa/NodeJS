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

//POST
app.post("/api/login", (req, res) =>{
    const user = {
        id: 1,
        name: "Adrian",
        email: "acanitano@gmail.com"
    }

    //Creamos el JWT con tiempo de expirado:
    jwt.sign({user: user}, 'secretkey', {expiresIn: '10s'}, (err, token) =>{
        res.json({
            token:token
        })
    })

    
});

//POST autenticado con JWT
app.post("/api/posts", obtenerJWT, (req, res) =>{

    //Validamos el JWT
    jwt.verify(req.token, 'secretkey', (error, authData) => {
        if(error){
            res.sendStatus(403);
        }else{
            res.json({
                messaje: "Post fue creado...",
                authData
            })
        }

    })


    
});

//Funcion que obtiene de los parametros del header el JWT Authorization: Bearer <token>
function obtenerJWT(req, res, next){
    const paramHeader = req.headers['authorization'];

    if(typeof paramHeader !== 'undefined'){
        const paramToken = paramHeader.split(" ")[1];
        req.token = paramToken;
        next();
    }
    else{
        res.sendStatus(403);
    }

}
