module.exports = function (app, passport, PreSignedService) {
	var User = require('./models/user');

	app.post('/landing',(req,res)=>{
		console.log(req.body.email);
		console.log(req.body.serviceType);
		PreSignedService.save({email:req.body.email, serviceType:req.body.serviceType},(err, user)=>{
			if(err){
				res.status(500).send();
			}
			res.status(200).send();
		});

	});
	app.get('/isLoggedIn',isLoggedIn,(req,res)=>{
		res.status(200).send(req.loggedIn);
	});
	
	app.get('/api/provider/:serviceType',(req,res)=>{
		 var serviceType = req.params.serviceType;
		 console.log(serviceType);

		 var providers=[];
		 if(serviceType=="clean"){

			providers=[{name:"Ioana Avram", email:"text@test.com"},{name:"Ioana Avram 1", email:"text@test.com"},{name:"Ioana Avram 2", email:"text@test.com"},{name:"Ioana Avram 3", email:"text@test.com"},{name:"Ioana Avram", email:"text@test.com"},{name:"Ioana Avram 1", email:"text@test.com"},{name:"Ioana Avram 2", email:"text@test.com"},{name:"Ioana Avram 3", email:"text@test.com"}]
		 }
		 if(serviceType=="food"){

			providers=[{name:"Andrei Leonte", email:"text@test.com"},{name:"Andrei Leonte 1", email:"text@test.com"},{name:"Andrei Leonte 2", email:"text@test.com"},{name:"Andrei Leonte 3", email:"text@test.com"},{name:"Ioana Avram", email:"text@test.com"},{name:"Ioana Avram 1", email:"text@test.com"},{name:"Ioana Avram 2", email:"text@test.com"},{name:"Ioana Avram 3", email:"text@test.com"}]
		 }

		res.status(200).send(providers);
	});

	app.post('/api/signup', function (req, res) {
		if (req.body.email &&
			req.body.name &&

			req.body.password ) {
			console.log("all ok");
			var userData = {
				name: req.body.name,
				firstName: req.body.firstname,
				email: req.body.email,
				password: req.body.password,
				date: new Date()
			}
			User.findOne({ email: userData.email })
			.exec(function (err, user) {
				if(err){
					res.status(500).send("  A apărut o eroare. Încercați mai târziu. ");
				}
				if(user!=null){
					res.status(401).send(" Există un cont asociat adresei de email. ");
				}
					//use schema.create to insert data into the db
			User.create(userData, function (err, user) {
				if (err) {
					console.log(err);
					return next(err)
					res.status(500).send("  A apărut o eroare. Încercați mai târziu.");
				} else {
					console.log(user);
					req.session.user=user;
					res.status(200).send(user);
				}
			});
		});	
		}
	});

	app.post('/api/login', function (req, res) {
		console.log(req);

		console.log(req.body.email);
		console.log(req.body.password);
		if (req.body.email && req.body.password) {

			User.authenticate(req.body.email, req.body.password, function (error, user) {
				if (error || !user) {
					var err = new Error('Wrong email or password.');
					err.status = 401;
					console.log(err);
					
					if(err){
						res.status(401).send('Email sau parolă greșită ');
					}

				} else {
					console.log(user);
					req.user = user;
					req.session.user= user;		
					console.log(req.user);
					console.log(req.session.user);
					res.status(200).send(user);
				}
			});
		}
	});
	
	app.get('/auth/facebook', passport.authenticate('facebook', { scope: "email" }));

	app.get('/auth/facebook/callback', passport.authenticate('facebook',
		{ successRedirect: '/', failureRedirect: '/login' }));

	app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

	// the callback after google has authenticated the user
	app.get('/auth/google/callback',
		passport.authenticate('google', {
			successRedirect: '/',
			failureRedirect: '/login'
		}));

	function isLoggedIn(req, res, next) {
		console.log(req.user);
		req.loggedIn = !!req.user;
		next();
	}
};