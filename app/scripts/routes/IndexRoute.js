Ptn2015.IndexRoute = Ember.Route.extend({
   /* setupController:function(model, controller){*/
		//controller.set('model', model);
	/*},*/

    model: function () {
        return [{
			name: 'Livementor',
			url: 'https://www.livementor.com',
			img: 'http://38.media.tumblr.com/avatar_be95c27d745a_128.png',
			description: 'Service de location de voiture entre particulier',
			category: 0
		},
		{
			name: 'Drivy',
			url: 'https://www.drivy.com/',
			img: 'https://d2y2masl4rtrav.cloudfront.net/assets/header/logo-67195171275cd93890b3a26fd90a0c5e.png',
			description: 'Cours particulier par Internet',
			category: 1
		}];
    }
});
