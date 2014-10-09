Ptn2015.IndexController = Ember.Controller.extend({
	init: function(){
		//this.set('model')
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
	}.property(),

	onStartupSelection: function(selection){
			startup = this.getStartup(selection);
		this.set('selection', startup);
	},

	getStartup: function(name){
		return this.get('model.startup').filterBy('name', name);
	},

	getCategoryNumber: function(c){
		var id;
		this.get('model.category').forEach(function(e, i){
			if(e === c){
				id = i;
			}
		});
		return id;
	},

	actions: {
		setFilter: function(filter){
			if(filter === 'all'){
				this.set('selection', undefined);
			}
			var c = this.getCategoryNumber(filter);
			var list = this.get('model.startup').filterBy('category', c);
			this.set('selection', list);
		}
	}

});
