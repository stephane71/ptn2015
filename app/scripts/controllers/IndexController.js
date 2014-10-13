Ptn2015.IndexController = Ember.Controller.extend({
	category: [
		'Autopartage', 
		'Appartement', 
		'Tous type de biens',
		'Place de parking',
		'Service VTC',
		'Salle à manger', 
		'Bureaux, terrains, espace',
		'Imprimente 3D',
		'Crédit',
		'Echange de devises',
		'Services',
		'Crowdfounding',
		'Micro-cédit',
		'Crowdsourcing',
		'Mise en concurrence',
		'Autres'
	],

	init: function(){
	},

	list: function(){
		var l = [];
		this.get('model').forEach(function(e, i){
			l.push({
				id: i,
				text: e.get('name')
			});
		});
		return l;
	}.property(),

	onStartupSelection: function(selection){
		var	startup = this.getStartup(selection);
		this.set('selection', startup);
	},

	getStartup: function(name){
		return this.get('model').filterBy('name', name);
	},

	getCategoryNumber: function(c){
		var id;
		this.get('category').forEach(function(e, i){
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
			var list = this.get('model').filterBy('category', c);
			this.set('selection', list);
		}
	}

});
