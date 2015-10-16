var config = {
	'port': process.env.PORT || 8081,
	'webDir': process.env.NODE_ENV === 'production' ? 'www-built' : 'www'
};
module.exports = config;