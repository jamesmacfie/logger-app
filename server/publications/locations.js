'use strict';

/**
 * Allow subscription to all locations
 */
Meteor.publish('locations', function() {
	return Locations.find();
});

/**
 * Allow subscription to a single location
 */
Meteor.publish('location', function(id) {
	return Locations.find({
		_id: id
	});
});
