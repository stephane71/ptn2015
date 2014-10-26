Ptn2015.IndexView = Ember.View.extend({
	didInsertElement: function(){
		this.loadFacebookButton();
	},

	loadFacebookButton: function() {
		var d = document,
			s = 'script',
			id = 'facebook-jssdk';

		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) {
			FB.XFBML.parse(d.getElementById(id));
			return;
		}
		js = d.createElement(s);
		js.id = id;
		js.src = "//connect.facebook.net/fr_FR/sdk.js#xfbml=1&appId=1477818409128838&version=v2.0";
		fjs.parentNode.insertBefore(js, fjs);
	}

});
