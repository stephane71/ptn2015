Ptn2015.IndexController = Ember.Controller.extend({
	
	init: function(){
		console.log('init index controller');
	},

	list: function(){
		var l = [];
		this.get('model.startup').forEach(function(e, i){
			l.push({
				id: i,
				text: e.name
			});
		});
		return l;
	}.property('model')

});
