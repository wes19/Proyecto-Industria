var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var cliente = require('../models/cliente');
var SECRET_KEY = 'B0K9VuiHThqATv0dk1iKu8INW1OQ6YqAZbcEPKhOEV8N3eTbXU5kjbsnchlXbZ0';

//Registrar un cliente
//Ruta-> http://localhost:8888/clientes/registro/cliente
router.post('/registro/cliente', function (req, res) {
    let contrasenaCliente_hash = bcrypt.hashSync(req.body.contrasenaCliente, 10);
    let nuevoCliente = new cliente({
        nombreCliente: req.body.nombreCliente,
        correoCliente: req.body.correoCliente,
        contrasenaCliente: contrasenaCliente_hash,
    });
    //console.log(nuevoCliente);

    nuevoCliente.save()
        .then(result => {
             // Success, inicia sesion con JWT
            const expiresIn = 24 * 60 * 60;
             const accessToken = jwt.sign({
                 _id: result.id
            }, SECRET_KEY, {
                 expiresIn: expiresIn
             });
             const dataEnviar = {
                 email: result.email,
                 accessToken: accessToken,
                 expiresIn: expiresIn
             };
             res.status(200).send({
                 mensaje: 'Registrado',
                 data: dataEnviar
             });
             res.end();
        })
        .catch(error => {
            res.send({
                error: error,
                mensaje: "Error al guardar cliente"
            });
            res.end();
        });
});


//Registrar un cliente
//Ruta-> http://localhost:8888/clientes/registrandocliente
router.post('/registro', function (req, res) {
    let contrasenaCliente_hash = bcrypt.hashSync(req.body.contrasenaCliente, 10);
    let nuevoCliente = new cliente({
        nombreCliente: req.body.nombreCliente,
        correoCliente: req.body.correoCliente,
        contrasenaCliente: contrasenaCliente_hash,
    });
    //console.log(nuevoCliente);

    nuevoCliente.save()
        .then(result => {
             // Success, inicia sesion con JWT
            const expiresIn = 24 * 60 * 60;
             const accessToken = jwt.sign({
                 _id: result.id
            }, SECRET_KEY, {
                 expiresIn: expiresIn
             });
             const dataEnviar = {
                 email: result.email,
                 accessToken: accessToken,
                 expiresIn: expiresIn
             };
             res.status(200).send({
                 mensaje: 'Registrado',
                 data: dataEnviar
             });
             res.end();
        })
        .catch(error => {
            res.send({
                error: error,
                mensaje: "Error al guardar cliente"
            });
            res.end();
        });
});


//Logear un cliente
//Ruta -> http://localhost:8888/clientes/login
router.post('/login', function (req, res) {
    cliente.findOne({
            correoCliente: req.body.usuario
        }, {
            _id: true,
            correoCliente: true,
            contrasenaCliente: true,
            nombreCliente:true
        })
        .then(result => {
            // Comparar hash de password
            let contrasena_match = bcrypt.compareSync(req.body.password, result.contrasenaCliente)
            if (contrasena_match) {
                // Success, inicia sesion con JWT
                const expiresIn = 24 * 60 * 60;
                const accessToken = jwt.sign({
                    _id: result._id,
                }, SECRET_KEY, {
                    expiresIn: expiresIn
                });
                const dataEnviar = {
                    correoCliente: result.correoCliente,
                    nombreCliente: result.nombreCliente,
                    accessToken: accessToken,
                    expiresIn: expiresIn
                }
                res.status(200).send({
                    mensaje: 'Cliente Logueado',
                    data: dataEnviar
                });
                res.end();
            } else {
                res.status(401).send({
                    mensaje: 'No-Autorizado: Contrasena incorrecta'
                });
                res.end();
            }
        })
        .catch(error => {
            res.status(401).send({
                error: error,
                mensaje: 'No-Autorizado: Correo no encontrado'
            });
            res.end();
        });
});

// Verificar token
function verifyToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        if (bearerToken === null) {
            return res.status(401).send('No-Autorizado');
        }
        const payload = jwt.verify(bearerToken, SECRET_KEY);
        req._id = payload._id;
        next();
    } else {
        res.status(401).send('No-Autorizado');
    }



}

module.exports = router;
