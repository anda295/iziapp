// app/models/user.js
// load the things we need
 var mongoose = require('mongoose');
var bcrypt   = require('bcrypt');

// // define the schema for our user model
var userSchema = mongoose.Schema({
        username  : String,
        email: String,
        password : String,
        date: String, 
        facebookId: String,
        googleId: String,
        googleToken:String

     
});

// checking if password is valid using bcrypt
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};


// this method hashes the password and sets the users password
userSchema.methods.hashPassword = function(password) {
    var user = this;

    // hash the password
    bcrypt.hash(password, null, null, function(err, hash) {
        if (err)
            return next(err);

        user.local.password = hash;
    });

};

userSchema.statics.authenticate = function (email, password, callback) {
  var user =this;
  user.findOne({ email: email })
    .exec(function (err, user) {
      if (err) {
        return callback(err)
      } else if (!user) {
        var err = new Error('User not found.');
        err.status = 401;
        return callback(err);
      }
    
      bcrypt.compare(password, user.password, function (err, result) {
        if (result === true) {
          return callback(null, user);
        } else {
          return callback();
        }
      })
    });
}

userSchema.pre('save', function (next) {
  var user = this;
  console.log(user);
  if(user.facebookId == null && user.googleId == null){
    console.log("hash password");
  bcrypt.hash(user.password, 10, function (err, hash){
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  });
}else{
  next();
}
});

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
