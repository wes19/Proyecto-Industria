var express = require('express');
var cors = require('cors'); //Para gestionar politicas de dominios cruzados
var bodyParser = require('body-parser');
var database = require('./modules/database');;
var http = require('http');
var motoristasRouter = require('./routers/motoristas-router');
var administradoresRouter = require('./routers/administradores-router');

var app = express();
const server = http.Server(app);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var clientesRouter = require('./routes/clientes-router');
app.use('/clientes',clientesRouter);
app.use('/motoristas', motoristasRouter);
app.use('/administradores', administradoresRouter);


// process.env.PORT: variable de entorno para escuchar el puerto que la plataforma a subir la app nos brinde
app.set('port', process.env.PORT || 8888);
server.listen(app.get('port'), function () {
    console.log(`Servidor Backend en el puerto ${app.get('port')}`);
});