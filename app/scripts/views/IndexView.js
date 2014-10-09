Ptn2015.IndexView = Ember.View.extend({

	didInsertElement: function(){
		var self = this;
		this.updateSearchList();
		$('#startup-search').on('select2-selecting', function(e){
			var startup = self.get('controller').getStartup(e.object.text);
			self.showSelection(startup);
		});
	},

	showSelection: function(startup){
		this.set('selection', startup);
	},

	updateSearchList: function(){
		var list = this.get('controller.list');
		$('#startup-search').select2({
			data: list
		});
	}.observes('controller.list')

});
