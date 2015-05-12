'use strict';

Meteor.methods({
	/**
	 * Given a sensor Id and a value, this method will create a new datapoint against the
	 * loo has that sensorId.
	 *
	 * Takes a sensorId and value as parameters
	 */
	insertDataPoint: function(sensorId, value) {
		var loo = Loos.findOne({
			sensorId: sensorId
		});

		if (!loo) {
			console.log('No loo found for the sensor Id ', sensorId);
			return;
		}

		DataPoints.insert({
			loo: loo._id,
			value: value,
			createdAt: new Date()
		});
	}
});
