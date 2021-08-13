var express = require('express');
var router = express.Router();
var motoristas = require('../models/motoristas');
var mongoose = require('mongoose');

// Obtener Motoristas
router.get('/', function (req,res){
    motoristas.find({},{})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

// Eliminar Motoristas
router.delete('/:idMotorista', function (req,res){
    motoristas.remove({_id: req.params.idMotorista})
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

// Añadir Motorista
router.post('/', function (req,res){

    var items={ 
                _id: mongoose.Types.ObjectId(),
                codEmpleado: "",
                dni: req.body.dni,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                correo: req.body.correo,
                telefono: req.body.telefono,
                direccion: req.body.direccion,
                fechaNacimiento: req.body.fechaNacimiento,
                password: "",
                estadoCivil: req.body.estadoCivil,
                formacion: req.body.formacion,
                discapacidad: req.body.discapacidad,
                descripcionDiscapacidad: req.body.descripcionDiscapacidad,
                pasadoProfesional: req.body.pasadoProfesional,
                estado: "Pendiente"
            }
    motoristas.insertMany(items 
    )
    .then(result=>{
        res.send(result);
        res.end();
    })
    .catch(error=>{
        res.send(error);
        res.end();
    });
});

// Actualizar Motoristas
router.post('/:idMotorista', function (req,res){
    motoristas.updateOne({
        _id: mongoose.Types.ObjectId(req.params.idMotorista)
    },
    {
        codEmpleado: req.body.codEmpleado,
        dni: req.body.dni,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        fechaNacimiento: req.body.fechaNacimiento,
        password: req.body.password,
        estadoCivil: req.body.estadoCivil,
        formacion: req.body.formacion,
        discapacidad: req.body.discapacidad,
        descripcionDiscapacidad: req.body.descripcionDiscapacidad,
        pasadoProfesional: req.body.pasadoProfesional,
        estado: req.body.estado
    })
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