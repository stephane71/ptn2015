Ptn2015.StartupsController = Ember.Controller.extend({
	queryParams: ['category'],
	category: null,

	category_list: [
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

	list: function(){
		var l = [];
		this.get('model').forEach(function(e, i){
			l.push({
				id: i,
				text: e.get('name')
			});
		});
		return l;
	}.property('model'),

	onStartupSelection: function(selection){
		var s = this.get('model').filterBy('name', selection)[0];
		this.transitionToRoute('startup', s.id);
	},

	getCategoryNumber: function(c){
		var id;
		this.get('category_list').forEach(function(e, i){
			if(e === c){
				id = i;
			}
		});
		return id;
	},

	filteredStartup: function() {
		var category = this.get('category');
		var startup = this.get('model');
		
		if(category === 'star'){
			return startup.filterBy('star', 1);
		}	
		else if (category !== null) {
			var c = this.getCategoryNumber(category);
			return startup.filterBy('category', c);
		}
		else{
			return startup;
		}
	}.property('category', 'model'),

	actions: {
		setFilter: function(filter){
			if(filter === undefined){
				filter = null;
			}
			this.transitionToRoute('startups', {queryParams: {category: filter}});
		},

		startupSelection: function(startup_id){
			this.transitionToRoute('startup', startup_id);
		}
	}
});
