'use strict';

console.log('Location count', Locations.find().count());
/**
 * Insert default Xero locations if nothing exists in the DB yet
 */
if (Locations.find().count() === 0) {
	console.log('No locations. Inserting');

	Locations.insert({
		name: 'HQ - Level 2',
		loos: []
	});
}
