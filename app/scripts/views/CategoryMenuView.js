Ptn2015.CategoryMenuView = Ember.View.extend({
	templateName: 'category_menu',

	didInsertElement: function(){
		this.click(this.get('controller.category'))
	},

	click: function(selection){
		var s, targ;
		if(typeof selection === 'string'){
			s = selection;
			targ = s;
		} else{
			s = $(selection.target).parent().attr('id');
			targ = selection.target.text;
		}
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
				if(e.text === targ){
					$(e).parent().addClass('active');
				}
			});
		}
	}
});
