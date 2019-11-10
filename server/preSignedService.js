var PreSigned = require('./models/preSigned');

class PreSignedService {

	save(data, done) {
		var presigned = new PreSigned({
			email: data.email,
			serviceType: data.serviceType,
			date: new Date()
			
		});
		presigned.save(done);
	}
}

module.exports = PreSignedService;