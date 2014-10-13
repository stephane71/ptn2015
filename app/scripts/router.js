Ptn2015.Router.map(function () {
	this.route('index', {path: '/'});
	this.route('startups');
	this.route('startup', {path: '/:startup_name'});
});
