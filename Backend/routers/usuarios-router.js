var express = require('express');
var router = express.Router();
var usuario = require('../models/usuario');
var mongoose = require('mongoose');

//OBTENER USUARIO POR CORREO
router.get('/:correo', function(req, res) {
        usuario.find({ correo: req.params.correo }, { correo: true, contrasenia: true })
            .then(result => {
                res.send(result[0]);
                res.end();
            })
            .catch(error => {
                res.send(error);
                res.end();
            })
    })
    //{ array_field: { $slice: -1 } 
    //OBTENER USUARIO POR ID
router.get('/:idUsuario/usuario', function(req, res) {
    usuario.find({ _id: mongoose.Types.ObjectId(req.params.idUsuario) }, { nombre: true, telefono: true, factura: { $slice: -1 } })
        .then(result => {
            res.send(result[0]);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        })
})

//ANADIR LA FACTURA
router.post('/:idUsuario/factura', function(req, res) {

    usuario.update({ _id: mongoose.Types.ObjectId(req.params.idUsuario) }, {
            $push: {
                factura: {
                    _id: mongoose.Types.ObjectId(),
                    idEmpresa: req.body.idEmpresa,
                    nombreEmpresa: req.body.nombreEmpresa,
                    direccionEmpresa: req.body.direccionEmpresa,
                    logotipo: req.body.logotipo,
                    idCliente: req.body.idCliente,
                    nombreCliente: req.body.nombreCliente,
                    idProducto: req.body.idProducto,
                    nombreProducto: req.body.nombreProducto,
                    cantidad: req.body.cantidad,
                    precio: req.body.precio,
                    subtotal: req.body.subtotal,
                    isv: req.body.isv,
                    envio: req.body.envio,
                    total: req.body.total
                }
            }
        })
        .then(result => {
            res.send(result);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });
})


//ANADIR USUARIO
router.post('/', function(req, res) {
    let u = new usuario({
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        correo: req.body.correo,
        contrasenia: req.body.contrasenia,
        direccion: [],
        factura: []
    })
    u.save()
        .then(result => {
            res.send(result);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        })
})

module.exports = router;
