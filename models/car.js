var Arrow = require('arrow');

var Model = Arrow.createModel('car', {
	fields: {
		name: {
			type: String
		},
		model: {
			type: String
		},
		color: {
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