define("EventsManager", [
	"underscore", 
	"backbone"
], function (_, Backbone) {
	return _.extend({}, Backbone.Events);
});