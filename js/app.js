App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
});

//var jira = new Object;
//jira.baseAPI = 'https://brander.atlassian.net/rest/api/latest/';
//jira.searchURL = jira.baseAPI + 'search?jql=';
//jira.filterURL = jira.baseAPI + 'filter/';
//jira.getFilterResults = function(filterID) {
//	var responseJSON = Ember.$.getJSON(jira.filterURL + filterID);
//	return responseJSON;
//}

App.IndexRoute = Ember.Route.extend({
  model: function() {
  	// determine whether plural or singular
  	var singOrPlural = Math.floor((Math.random()*2)+1)
  	var plurality = "singular";
  	if (singOrPlural == 2)
  		plurality = "plural";
  	var subject = nouns[plurality][Math.floor(Math.random()*nouns[plurality].length)];
  	var verb = verbs[plurality][Math.floor(Math.random()*verbs[plurality].length)];
  	var ending = prepositions[Math.floor(Math.random()*prepositions.length)];
  	var useDO = Math.floor((Math.random()*2));
  	if (useDO)
  		ending = nouns[plurality][Math.floor(Math.random()*nouns[plurality].length)];
  	return subject + ' ' + verb + ' ' + ending;
  }
});


var nouns = {
	"singular" : ['your dad', 'my girlfriend', 'the man', 'life', 'paper', 'iPad'],
	"plural" : ['kids', 'ghosts', 'bands', 'car keys', 'cell phones']
};

var verbs = {
	"singular" : ['screams', 'tastes like', 'drinks', 'hates'],
	"plural" : ['love', 'destroy', 'stroke', 'smash', 'run', 'walk']
};

var prepositions = 
	['at kids', 'down the alley', 'with all their heart', 'over the hill', 'around the bend'];