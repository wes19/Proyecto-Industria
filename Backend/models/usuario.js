var mongoose = require('mongoose');
var esquema = new mongoose.Schema({
    nombre: String,
    telefono: String,
    correo: String,
    contrasenia: String,
    direccion: Array,
    factura: Array
});

module.exports = mongoose.model('usuarios', esquema);