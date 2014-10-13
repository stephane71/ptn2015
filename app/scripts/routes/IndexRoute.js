Ptn2015.IndexRoute = Ember.Route.extend({
   /* setupController: function(model, controller){*/
//console.log('setupController:')
//console.log(model);
		//controller.set('model', model);
	/*},*/

    model: function () {
		return this.store.find('startup');
        return {
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
					'Autres',
					
			],
			startup: this.store.find('startup')
		};
    }
});
