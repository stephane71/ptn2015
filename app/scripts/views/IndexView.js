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
	}.observes('controller.list')

});
