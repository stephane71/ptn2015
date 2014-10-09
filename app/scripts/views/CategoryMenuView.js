Ptn2015.CategoryMenuView = Ember.View.extend({
	templateName: 'category_menu',

	click: function(selection){
		$('#all').removeClass('active');
		$("#category_menu a").each(function(i, e){
			$(e).removeClass('active');
			if(e.text === selection.target.text){
				$(e).addClass('active');
			}
		});
	}
});
