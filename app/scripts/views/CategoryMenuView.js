Ptn2015.CategoryMenuView = Ember.View.extend({
	templateName: 'category_menu',

	didInsertElement: function(){
		$('#all').addClass('active');
	},

	click: function(selection){
		var s = $(selection.target).parent().attr('id');
		if(s === 'all'){
			$('#all').addClass('active');
			$('#star').removeClass('active');
			$("#category_menu li.active").each(function(i, e){
				$(e).removeClass('active');
			});
		}
		else if(s === 'star'){
			$('#all').removeClass('active');
			$('#star').addClass('active');
			$("#category_menu li.active").each(function(i, e){
				$(e).removeClass('active');
			});
		}
		else {
			$('#all').removeClass('active');
			$('#star').removeClass('active');
			$("#category_menu a").each(function(i, e){
				$(e).parent().removeClass('active');
				if(e.text === selection.target.text){
					$(e).parent().addClass('active');
				}
			});
		}
	}
});
