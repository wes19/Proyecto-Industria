var mongoose = require('mongoose');
var esquema = new mongoose.Schema(
    {
        nombre: String,
        apellido: String,
        correo: String,
        password: String
    }
);

module.exports = mongoose.model('administradores', esquema);