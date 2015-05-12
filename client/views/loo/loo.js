'use strict';

/**
 * Helper functions for the `Loo` template
 */
Template.loo.helpers({
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
