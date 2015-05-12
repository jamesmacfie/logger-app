/**
 * Schema for locations
 */

Locations = new Mongo.Collection('locations');

var location = new SimpleSchema({
	name: {
		type: String
	},
	loos: {
		type: [String],
		regEx: SimpleSchema.RegEx.Id,
		autoValue: function() {
			'use strict';
			if (this.isInsert) {
				return [];
			} else {
				this.unset();
			}
		}
	},
	createdAt: {
		type: Date,
		autoValue: function(record) {
			'use strict';
			if (this.isInsert) {
				if (!record.createdAt) {
					return new Date();
				}
			} else {
				this.unset();
			}
		}
	}
});

Locations.attachSchema(location);
