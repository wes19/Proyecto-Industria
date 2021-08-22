var mongoose = require('mongoose');
var esquema = new mongoose.Schema(
    {
        codEmpleado: String,
        dni: String,
        nombre: String,
        apellido: String,
        correo: String,
        telefono: String,
        direccion: String,
        fechaNacimiento: String,
        password: String,
        estadoCivil: String,
        formacion: String,
        discapacidad: String,
        descripcion: String,
        pasadoProfesional: String,
        estado: String
    }
);

module.exports = mongoose.model('motoristas', esquema);