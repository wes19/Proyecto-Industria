var mongoose = require('mongoose');
var esquema = new mongoose.Schema({
    idCliente: String,
    nombreCliente: String,
    direccion: Array,
    telefono: String,
    idEmpresa: String,
    nombreEmpresa: String,
    direccionEmpresa: String,
    idProducto: Array,
    producto: Array,
    precio: Array,
    cantidad: Array,
    comisionMotorista: Number,
    comisionAdministracion: Number,
    subtotal: Number,
    isv: Number,
    total: Number,
    estado: String,
    idMotorista: String
});

module.exports = mongoose.model('pedidos', esquema);