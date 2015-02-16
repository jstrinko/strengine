var _ = require('underscore'),
	logger = require(process.env.SRCTOP + '/logger/lib/logger'),
	config = require(process.env.SRCTOP + '/config/lib/config'),
	base_server = require(process.env.SRCTOP + '/strouter/lib/base-server');

var Strengine = function() {
	this.package_name = 'strengine';
	this.type = 'Strengine';
	this.config_files = {
		routes: process.env.SRCTOP + '/strengine/config/routes.json'
	};
	this.routes = this.configuration.routes;
	this.mongo_url = 'mongodb://localhost/' + this.package_name;
	base_server.prototype.constructor.call(this);
};

(new logger({
	filename: 'strengine-%Y%m%d.log',
	console: false,
	symlink: 'strengine.log'
})).extend(Strengine.prototype);

_.extend(Strengine.prototype, base_server.prototype, config.prototype, {});

module.exports = Strengine;
