var Ptn2015 = window.Ptn2015 = Ember.Application.create();
Ptn2015.ApplicationAdapter = DS.FixtureAdapter;

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');
