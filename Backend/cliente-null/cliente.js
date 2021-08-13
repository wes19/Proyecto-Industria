var mongoose = require('mongoose');

var esquemaCliente = new mongoose.Schema({
     // **********************************************************
    nombreCliente: String,
    correoCliente:{
        type: String,
        trim: true,
        unique: true,
        required: true
    },
    contrasenaCliente:{
        type: String,
        trim: true,
        required: true
    },
    // **********************************************************
},{
    timestamps: true
});

module.exports = mongoose.model('cliente', esquemaCliente);
