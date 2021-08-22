var express = require('express');
var router = express.Router();
var categoria = require('../models/categorias');
var mongoose = require('mongoose');

//OBTENER LAs CATEGORIAS PARA LA SELECCION
router.get('/', function(req, res) {
    categoria.find({}, {})
        .then(result => {
            res.send(result);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        })
});

router.get('/categoria', function(req, res) {
    categoria.find({}, { _id: true })
        .then(result => {
            res.send(result[0]);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        })
});

//OBTENER NEGOCIO POR CATEGORIA
router.get('/:idCategoria/empresas', function(req, res) {
    categoria.find({ _id: req.params.idCategoria }, { empresas: true, nombreCategoria: true })
        .then(result => {
            res.send(result[0]);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        })
})

//OBTENER UNA CATEGORIA
router.get('/:idCategoria', function(req, res) {
    categoria.find({ _id: req.params.idCategoria }, { nombreCategoria: true, empresas: true })
        .then(result => {
            res.send(result[0]);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        })
})

//OBTENER PRODUCTOS POR NEGOCIO
router.get('/:idCategoria/empresas/:idEmpresa/productos', function(req, res) {
    categoria.find({ _id: req.params.idCategoria, "empresas._id": mongoose.Types.ObjectId(req.params.idEmpresa) }, {
            "empresas.productos.$": true,
            "empresas.nombreEmpresa": true,
            "empresas.banner": true,
            "empresas.calificacion": true,
            "empresas.direccion": true,
            "empresas.logotipo": true
        })
        .then(result => {
            res.send(result[0]);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        })
})

//OBTENER UN NEGOCIO POR EL NOMBRE
router.get('/:idCategoria/empresa/:nombre', function(req, res) {
    categoria.find({ _id: req.params.idCategoria, "empresas.nombreEmpresa": req.params.nombre }, { "empresas.$": true })
        .then(result => {
            res.send(result[0]);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        })
})

//ANADIR UNA EMPRESA
router.post('/:idCategoria/empresas', function(req, res) {
    categoria.update({
            _id: mongoose.Types.ObjectId(req.params.idCategoria),
        }, {
            $push: {
                empresas: {
                    _id: mongoose.Types.ObjectId(),
                    nombreEmpresa: req.body.nombreEmpresa,
                    direccion: req.body.direccion,
                    nombreEncargado: req.body.nombreEncargado,
                    telefono: req.body.telefono,
                    estado: req.body.estado,
                    logotipo: req.body.logotipo,
                    banner: req.body.banner,
                    calificacion: req.body.calificacion,
                    productos: []
                },
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
});

//ANADIR UN PRODUCTO
router.post('/:idCategoria/empresas/:idEmpresa/productos', function(req, res) {
    categoria.updateOne({
            _id: mongoose.Types.ObjectId(req.params.idCategoria),
            "empresas._id": mongoose.Types.ObjectId(req.params.idEmpresa)
        }, {
            $push: {
                "empresas.$.productos": {
                    _id: mongoose.Types.ObjectId(),
                    imagenProducto: req.body.imagenProducto,
                    nombreProducto: req.body.nombreProducto,
                    precio: req.body.precio,
                    estado: req.body.estado,
                },
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
});

//ACTUALIZAR UN PRODUCTO
router.post('/:idCategorias/empresas/:idEmpresas/productos/:idProductos', function(req, res) {
    categoria.updateOne({
            _id: mongoose.Types.ObjectId(req.params.idCategorias),
        }, {
            $set: {
                "empresas.$[emp].productos.$[pro].nombreProducto": req.body.nombreProducto,
                "empresas.$[emp].productos.$[pro].imagenProducto": req.body.imagenProducto,
                "empresas.$[emp].productos.$[pro].precio": req.body.precio,
                "empresas.$[emp].productos.$[pro].estado": req.body.estado
            },
        }, {
            arrayFilters: [{
                    "emp._id": { $eq: mongoose.Types.ObjectId(req.params.idEmpresas) }
                },
                {
                    "pro._id": {
                        $eq: mongoose.Types.ObjectId(req.params.idProductos)
                    }
                }
            ]
        })
        .then(result => {
            res.send(result);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });
});

//ACTUALIZAR UNA EMPRESA
router.post('/:idCategoria/empresas/:idEmpresa', function(req, res) {
    categoria.update({
            _id: mongoose.Types.ObjectId(req.params.idCategoria),
            "empresas._id": mongoose.Types.ObjectId(req.params.idEmpresa)
        }, {
            $set: {
                "empresas.$.nombreEmpresa": req.body.nombreEmpresa,
                "empresas.$.direccion": req.body.direccion,
                "empresas.$.nombreEncargado": req.body.nombreEncargado,
                "empresas.$.telefono": req.body.telefono,
                "empresas.$.estado": req.body.estado,
                "empresas.$.logotipo": req.body.logotipo,
                "empresas.$.banner": req.body.banner,
                "empresas.$.calificacion": req.body.calificacion,
            }
        }).then(
            result => {
                res.send(result);
                res.end();
            })
        .catch(error => {
            res.send(error);
            res.end();
        })
})

module.exports = router;
