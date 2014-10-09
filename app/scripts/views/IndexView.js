Ptn2015.IndexView = Ember.View.extend({
	didInsertElement: function(){
		var self = this;
		this.updateSearchList();
		$('#startup-search').on('select2-selecting', function(e){
			self.get('controller').onStartupSelection(e.object.text);
		});
	},

	updateSearchList: function(){
		var list = this.get('controller.list');
		$('#startup-search').select2({
			data: list
		});
	}.observes('controller.list'),

	click: function(e){
		if(e.target.id === 'all'){
			$("#category_menu a").each(function(i, e){
				$(e).removeClass('active');
			});
			$(e.target).addClass('active');
		}
	}
});
