//++++++++++++++++++++++++++++++++++++++++++++++++
//Imports
//++++++++++++++++++++++++++++++++++++++++++++++++
const express = require("express");
const app = express();
const morgan = require("morgan");
const ldap = require('ldapjs');

//++++++++++++++++++++++++++++++++++++++++++++++++
//Configuraciones
//++++++++++++++++++++++++++++++++++++++++++++++++
//Defino el puerto de escucha, sino utiliza el definido por el entorno(plataforma)
app.set('port', process.env.PORT || 3000);
//Parsear JSON
app.use(express.json());    //Para que el server interprete JSON
app.set('json spaces', 2)   
//Middlewares
app.use(morgan('dev'));
//Routes
app.use(require('./routes/routes'));



//Iniciando el servidor, escuchando...
app.listen(app.get('port'),()=>{
    console.log("Servidor escuchando en el puerto:" + app.get('port'));
    console.log("http://localhost:"+app.get('port'));
});










