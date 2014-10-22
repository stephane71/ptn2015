Ptn2015.StartupRoute = Ember.Route.extend({
	model: function (param) {
		return this.store.find('startup', param.startup_id);
	},

	actions: {
		backToList: function(){
			this.transitionTo('startups');
		}
	}
});
