'use strict';

/**
 * Insert default Xero locations if nothing exists in the DB yet. This relies on the locations
 * having been set up already (which should have happened on first load due to the alphabetical
 * loading of files that Meteor works off)
 */

/**
 * Inserts numerous loo records and returns an array of IDs for the newly created loos.
 */
function insertLoos(locationId, loos) {
	var insertedIds = [];

	loos.forEach(function(l) {
		var id = Loos.insert({
			sensorId: l.sensorId,
			description: l.description,
			name: l.name
		});

		console.log('Inserting', l.name, 'to', locationId);

		Locations.update({
			_id: locationId
		}, {
			$push: {
				loos: id
			}
		});
	});

	console.log(insertedIds);
	return insertedIds;
}

/**
 * Inserts loos at a given location. The location here is defined by the name, not the id.
 */
function insertAtLocation(name, loos) {
	var location = Locations.findOne({
		name: name
	});

	if (!location) {
		console.log('Cant insert loos into ' + name + '. It doesn\'t exist');
		return;
	}

	insertLoos(location._id, loos);
}

console.log('Loo count', Loos.find().count());

if (Loos.find().count() === 0) {
	console.log('No loos. Inserting');

	insertAtLocation('HQ - Level 2', [
		{
			sensorId: 1,
			name: 'Disabled',
			description: 'Tortor Fusce Adipiscing'
		},
		{
			sensorId: 2,
			name: 'Mens 1',
			description: 'Venenatis Ornare'
		},
		{
			sensorId: 3,
			name: 'Mens 2',
			description: 'Justo Tristique Sollicitudin'
		}
	]);
}
