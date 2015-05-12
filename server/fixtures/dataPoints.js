'use strict';

console.log('Datapoint count', DataPoints.find().count());
/**
 * Insert a default datapoint for each loo
 */
if (DataPoints.find().count() === 0) {
	console.log('No datapoints. Inserting');

	var loos = Loos.find();

	loos.forEach(function(l) {
		DataPoints.insert({
			loo: l._id,
			value: 0,
			createdAt: new Date()
		});
	});
}
