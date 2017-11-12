var Arrow = require('arrow');



var home = Arrow.Router.extend({
    name: 'home',
    path: '/home',
    method: 'GET',
    description: 'this is home route',
    action: function(req, resp, next) {
        /**
         * by default, routes are sync. to make them async, add a next in the action above as
         * the last parameter and then call next when completed
         */


        // var model_obs = req.server.getModel('Observation');

        // model_obs.findAll(function(err, results) {
        //     if (err) {
        //         next(err);
        //     } else {
        //         console.log('Observation: ' + JSON.stringify(results));
                
        //     }

        // });




        var model = req.server.getModel('car');

        model.findAll(function(err, results) {
            if (err) {
                next(err);
            } else {
                //req.log.info('got cars ' + JSON.stringify(results));
                resp.render('home', { cars: results });
            }

        });



    }
});

module.exports = home;
