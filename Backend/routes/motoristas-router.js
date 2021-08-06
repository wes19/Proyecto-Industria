var express = require('express');
var router = express.Router();
var motoristas = require('../models/motoristas');
var mongoose = require('mongoose');

// Obtener Motoristas
router.get('/', function (req,res){
    motoristas.find({},{_id: true, correo: true, password: true, estado: true})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

module.exports = router;