var mongoose = require('mongoose');

var servidor = 'localhost:27017';
var db = 'delivery';

class Database{
    constructor(){
        //Promesas
        mongoose.connect(`mongodb://${servidor}/${db}`)
        .then(()=>{
            console.log('La base de datos se conecto a mongo ;)');
        }).catch((error)=>{
            console.log(error);
        });
    }
}

module.exports = new Database();