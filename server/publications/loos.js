'use strict';

/**
 * Allow subscription to all loos
 */
Meteor.publish('loos', function() {
	return Loos.find();
});

/**
 * Allow subscription to all loos for a given location
 */
Meteor.publish('locationLoos', function(id) {
	var location = Locations.findOne({
		_id: id
	});

	if (!location) {
		console.log('Cannot subscibe to location with id of ', id);
		return [];
	}

	// Return all loos that are associated with the given location
	return Loos.find({
		_id:  {
			$in: location.loos
		}
	});
});

/**
 * Allow subscription to a single loo
 */
Meteor.publish('loo', function(id) {
	return Loos.find({
		_id: id
	});
});
