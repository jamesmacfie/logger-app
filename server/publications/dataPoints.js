'use strict';

/**
 * Allow subscription to all datapoints
 */
Meteor.publish('dataPoints', function() {
	return DataPoints.find();
});

/**
 * Allow subscription to all datapoints for a given loo
 */
Meteor.publish('looDataPoints', function(id) {
	var loo = Loos.findOne({
		_id: id
	});

	if (!loo) {
		console.log('Cannot subscibe to loo datapoints with a loo id of ', id);
		return [];
	}

	// Return all datapoints for the loo
	return DataPoints.find({
		loo: loo._id
	});
});

/**
 * Allow subscription to all loos for a given location
 */
Meteor.publish('locationDataPoints', function(id) {
	var location = Locations.findOne({
		_id: id
	});

	if (!location) {
		console.log('Cannot subscibe to location with id of ', id);
		return [];
	}

	// All loos that are associated with the given location
	var looIds = Loos.find({
		_id:  {
			$in: location.loos
		}
	}).map(function(l) {
		return l._id;
	});

	// Return all datapoints for an array of loos Ids
	return DataPoints.find({
		loo:  {
			$in: looIds
		}
	});
});
