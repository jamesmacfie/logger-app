Loos = new Mongo.Collection('loos');

var loo = new SimpleSchema({
	sensorId: {
		type: Number,
	},
	name: {
		type: String
	},
	description: {
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

Loos.attachSchema(loo);
