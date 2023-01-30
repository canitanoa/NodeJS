//++++++++++++++++++++++++++++++++++++++++++++++++
//Imports
//++++++++++++++++++++++++++++++++++++++++++++++++
const {Router } = require("express");
const router = Router();

//++++++++++++++++++++++++++++++++++++++++++++++++
//Exports
//++++++++++++++++++++++++++++++++++++++++++++++++
module.exports = router;    //Exporto las rutas


//ROUTES
/*Definimos los endpoints*/
//GET
router.get("/", (req, res) =>{
    res.json({
        messaje: "Respuesta OK!!!"
    })
});



