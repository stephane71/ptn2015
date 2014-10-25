Ptn2015.CategoryMenuView = Ember.View.extend({
	templateName: 'category_menu',

	click: function(selection){
		if($(selection.target).parent().attr('id') === 'all'){
			$('#all').addClass('active');
			$("#category_menu li.active").each(function(i, e){
				$(e).removeClass('active');
			});
		}
		else {
			$('#all').removeClass('active');
			$("#category_menu a").each(function(i, e){
				$(e).parent().removeClass('active');
				if(e.text === selection.target.text){
					$(e).parent().addClass('active');
				}
			});
		}
	}
});
