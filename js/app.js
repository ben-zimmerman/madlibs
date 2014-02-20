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
  	return ['hi'];
    //return jira.getFilterResults(15897);
  }
});
