// server.js

// set up ======================================================================
// get all the tools we need
var express = require('express');
var app = express();
var port = process.env.PORT || 8020;
var mongoose = require('mongoose');
var passport = require('passport');
var bodyParser = require('body-parser');

var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var flash = require('connect-flash');
var session = require('express-session');
var PreSignedService = require("./server/preSignedService.js");

var configs = require('./server/configs.js');
var preSignedService= new PreSignedService();
require('./server/passport')(passport, FacebookStrategy, GoogleStrategy); // pass passport for configuration

mongoose.connect(configs.database.url, { useMongoClient: true });

app.use(express.static(__dirname + '/public'));


  // required for passport
  app.use(bodyParser.json()); // for parsing application/json
  app.use(bodyParser.urlencoded({ extended: true })); 
  app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false
  }));

  app.use(passport.initialize());
  app.use(passport.session()); 
  app.use(flash());


// routes ======================================================================
require('./server/routes.js')(app, passport,preSignedService); 
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
app.get('/service/:serviceType', function(req, res) {
  res.sendFile(distDir + 'index.html');
});

// launch ======================================================================
let server = app.listen(port);



console.log('The magic happens on port ' + port);
