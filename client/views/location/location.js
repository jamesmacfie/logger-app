'use strict';

/**
 * Helper functions for the `Location` template
 */
Template.location.helpers({
	loos: function() {
		return Loos.find({
			_id: {
				$in: this.loos
			}
		});
	}
});

/**
 * Event listeners for the `Location` template
 */
Template.location.events({

});
