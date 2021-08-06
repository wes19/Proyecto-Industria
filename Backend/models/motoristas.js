var mongoose = require('mongoose');
var esquema = new mongoose.Schema(
    {
        dni: String,
        nombre: String,
        apellido: String,
        correo: String,
        telefono: String,
        direccion: String,
        fechaNacimiento: Date,
        password: String,
        estadoCivil: String,
        discapacidad: String,
        descripcionDiscapacidad: String,
        pasadoProfesional: String,
        estado: String
    }
);

module.exports = mongoose.model('motoristas', esquema);