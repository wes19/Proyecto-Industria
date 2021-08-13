var express = require('express');
var cors = require('cors'); //Para gestionar politicas de dominios cruzados
var bodyParser = require('body-parser');
var database = require('./modules/database');
var motoristasRouter = require('./routers/motoristas-router');
var administradoresRouter = require('./routers/administradores-router');
var categoriasRouter = require('./routers/categorias-router');
var pedidosRouter = require('./routers/pedidos-router');
//var usuariosRouter = require('./routers/usuarios-router');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/motoristas', motoristasRouter);
app.use('/administradores', administradoresRouter);
app.use('/categorias', categoriasRouter);
app.use('/pedidos', pedidosRouter);
//app.use('/usuarios', usuariosRouter);

app.listen(8888, ()=>{
    console.log('Servidor del backend levantado en 8888');
});