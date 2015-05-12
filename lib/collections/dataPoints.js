/**
 * Schema for datapoints
 */

DataPoints = new Mongo.Collection('dataPoints');

var dataPoint = new SimpleSchema({
	loo: {
		type: String,
		regEx: SimpleSchema.RegEx.Id
	},
	value: {
		type: String
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

DataPoints.attachSchema(dataPoint);
