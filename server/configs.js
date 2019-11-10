// config/configs.js
module.exports = {
	database: {
		url: 'mongodb://admin:admin@ds213688.mlab.com:13688/izi'
	},
	facebook: {
		app_id: "541899496182839",
		app_secret: "9851dbd75391b2ac87d7d6af2816861b",
		callback: "http://localhost:8080/auth/facebook/callback"
	},
	google:{
		client_id: "841798655707-viadm9mvhfbmfpgm6hgmih466cbd5s8u.apps.googleusercontent.com",
		client_secret: "j5Rrr7hCT4Ir3KfPC6vcK471",
		callbackURL: 'http://localhost:8080/auth/google/callback'
	}
};