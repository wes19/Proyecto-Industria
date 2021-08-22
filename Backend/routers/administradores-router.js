var express = require('express');
var router = express.Router();
var administradores = require('../models/administradores');
var mongoose = require('mongoose');

// Obtener Administradores
router.get('/', function (req,res){
    administradores.find({},{_id: true, correo: true, password: true})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

// Obtener Administradores por Correo
router.get('/:correo', function (req,res){
    administradores.find({correo: req.params.correo},{_id: true ,correo: true, password: true})
    .then(result=>{
        res.send(result[0]);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

module.exports = router;