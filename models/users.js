var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var usersSchema = new Schema({
    username: String,
    password: String,
    access: String
}, { collection: 'Users' });
var Users = mongoose.model('Users', usersSchema );


module.exports = Users;




