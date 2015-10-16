var config = {
	'port': process.env.PORT || 8081,
	'webDir': process.env.NODE_ENV === 'production' ? 'www-built' : 'www',
	'webIndex': process.env.NODE_ENV === 'production' ? 'index.min.html' : 'index.html'
};
module.exports = config;