var mongoose = require('mongoose');
var esquema = new mongoose.Schema({
    nombreCategoria: String,
    imagenCategoria: String,
    colorCategoria: String,
    empresas: Array
});

module.exports = mongoose.model('categorias', esquema);
