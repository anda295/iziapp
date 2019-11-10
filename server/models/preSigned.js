// app/models/user.js
// load the things we need
 var mongoose = require('mongoose');
var bcrypt   = require('bcrypt');

// // define the schema for our user model
var preSignedSchema = mongoose.Schema({
        email: String,
        serviceType : String,
        date: String
});


// create the model for users and expose it to our app
module.exports = mongoose.model('PreSigned', preSignedSchema);
