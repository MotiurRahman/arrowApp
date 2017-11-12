var Arrow = require('arrow');

var carapi = Arrow.API.extend({
	group: 'carapi',
	path: '/api/carapi/:id',
	method: 'GET',
	description: 'this is an api that shows how to implement an API',
	model: 'car',
	// before: 'pre_example',
	// after: 'post_example',
	parameters: {
		id: {description:'the is car API'}
	},
	action: function (req, resp, next) {
		// invoke the model find method passing the id parameter
		// stream the result back as response
		resp.stream(req.model.find, req.params.id, next);

		// var model = req.server.getModel('car');

  //       model.findAll(function(err, results) {
  //           if (err) {
  //               next(err);
  //           } else {
  //               req.log.info('got cars ' + JSON.stringify(results));
  //              // resp.render('home', { cars: results });
  //           }

  //       });


	}
});

module.exports = carapi;
