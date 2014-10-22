Ptn2015.StartupsView = Ember.View.extend({
	didInsertElement: function(){
		var self = this,
			list = this.get('controller.list');
		$('#startup-search').select2({
			data: list
		}).on('select2-selecting', function(e){
			self.get('controller').onStartupSelection(e.object.text);
		});
	},

	click: function(e){
		if(e.target.id === 'all'){
			$('#category_menu a').each(function(i, e){
				$(e).removeClass('active');
			});
			$(e.target).addClass('active');
		}
	}
});
