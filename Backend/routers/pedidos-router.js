var express = require('express');
var router = express.Router();
var pedido = require('../models/pedido');
var mongoose = require('mongoose');

//ANADIR PEDIDO
router.post('/', function(req, res) {
    let p = new pedido({
        idCliente: req.body.idCliente,
        nombreCliente: req.body.nombreCliente,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        idEmpresa: req.body.idEmpresa,
        nombreEmpresa: req.body.nombreEmpresa,
        direccionEmpresa: req.body.direccionEmpresa,
        idProducto: req.body.idProducto,
        producto: req.body.producto,
        precio: req.body.precio,
        cantidad: req.body.cantidad,
        comisionMotorista: req.body.envio,
        subtotal: req.body.subtotal,
        isv: req.body.isv,
        total: req.body.total,
        estado: "pendiente",
        idMotorista: ""
    })
    p.save()
        .then(result => {
            res.send(result);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        })
})

//EDITAR PEDIDO
router.post('/:idPedido', function(req, res) {
    pedido.updateOne({
        _id: mongoose.Types.ObjectId(req.params.idPedido),
    },
    { 
        estado: req.body.estado,
        idMotorista: req.body.idMotorista
    }  
    )
        .then(result => {
            res.send(result);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        })
})

//Obtener Pedidos
router.get('/', function (req,res){
    pedido.find({},{})
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