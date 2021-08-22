var mongoose = require('mongoose');

var servidor = 'localhost:27017';
var db = 'delivery';

class Database{
    constructor(){
        //Promesas
        mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log('Se conecto a mongo');
        }).catch((error)=>{
            console.log(error);
        });
    }
}

module.exports = new Database();