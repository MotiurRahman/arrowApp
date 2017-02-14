var Arrow = require('arrow');

var Model = Arrow.createModel('Observation', {
	fields: {
		resourceType: {
			type: String,
		},
		meta: {
			type: Object
		},
		text: {
			type: Object
		},
		status: {
			type: String
		},
		category: {
			type: Object
		},
		code: {
			type: Object
		},
		subject: {
			type: Object
		},
		encounter: {
			type: Object
		},
		effectiveDateTime: {
			type: String
		},
		effectivePeriod: {
			type: Object
		},
		performer: {
			type: Object
		},
		valueQuantity: {
			type: Object
		},
		component: {
			type: Object
		},
		valueString: {
			type: String
		}
	},
	connector: 'appc.arrowdb',
	actions: [
		'create',
		'read',
		'update',
		'delete',
		'deleteAll'
	]
});

module.exports = Model;