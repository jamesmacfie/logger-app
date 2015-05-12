'use strict';

/**
 * Helper functions for the `Loo` template
 */
Template.loo.helpers({
	/**
	 * Grab the most recent data point for this loo. Not currently taking into account if there is
	 * no datapoints for this loo
	 */
	latestDataPoint: function() {
		var latest = DataPoints.findOne({
			loo: this._id,
		}, {
			$sort: {
				createdAt: -1
			}
		});

		return !!latest.value;
	}
});

/**
 * Event listeners for the `Loo` template
 */
Template.loo.events({

});
