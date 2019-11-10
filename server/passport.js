
var User = require('./models/user');

var credentials = require('./configs.js');

module.exports = function(passport, FacebookStrategy, GoogleStrategy) {
    passport.use(new FacebookStrategy({
        clientID: credentials.facebook.app_id,
        clientSecret: credentials.facebook.app_secret,
        callbackURL: credentials.facebook.callback,
        profileFields:['id','displayName','emails']
        }, function(accessToken, refreshToken, profile, done) {
            console.log(profile);
            var me = new User({
                email:profile.emails[0].value,
                name:profile.displayName,
                facebookId: profile.id
            });

            /* save if new */
            User.findOne({facebookId: me.facebookId}, function(err, u) {
                if(!u) {
                    me.date= new Date();
                    me.save(function(err, me) {
                        if(err) return done(err);
                        done(null,me);
                    });
                } else {
                    console.log(u);
                    done(null, u);
                }
            });
      }
    ));

    passport.use(new GoogleStrategy({

        clientID        : credentials.google.client_id,
        clientSecret    : credentials.google.client_secret,
        callbackURL     : credentials.google.callbackURL,

    },
    function(token, refreshToken, profile, done) {

        // make the code asynchronous
        // User.findOne won't fire until we have all our data back from Google
        process.nextTick(function() {

            // try to find the user based on their google id
            User.findOne({ 'googleId' : profile.id }, function(err, user) {
                if (err)
                    return done(err);

                if (user) {

                    // if a user is found, log them in
                    return done(null, user);
                } else {
                    // if the user isnt in our database, create a new user
                    var newUser          = new User();
                    // set all of the relevant information
                    newUser.googleId    = profile.id;
                    newUser.googleToken = token;
                    newUser.name  = profile.displayName;
                    newUser.email = profile.emails[0].value; // pull the first email

                    // save the user
                    newUser.save(function(err) {
                        if (err)
                            throw err;
                        return done(null, newUser);
                    });
                }
            });
        });
    }
));

    passport.serializeUser(function(user, done) {
        console.log(user);
        done(null, user._id);
    });
    
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
};

