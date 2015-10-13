var config = {
	'port': process.env.PORT || 8081,
	'webDir': process.env.Release ? 'www-built' : 'www'
};
module.exports = config;