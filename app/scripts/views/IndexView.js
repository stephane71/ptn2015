Ptn2015.IndexView = Ember.View.extend({

	didInsertElement: function(){
		//$('#startup-search').on('select2-selecting', function(e){
			////self.get('controller').onDomainSelection(e.object.text);
			//console.log('startup selectionnée!!');
		/*});*/
		this.updateSearchList();
	},

	updateSearchList: function(){
		var list = this.get('controller.list');
		$('#startup-search').select2({
			data: list
		});
	}.observes('controller.list')

});
