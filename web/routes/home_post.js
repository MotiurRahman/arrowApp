var Arrow = require('arrow');



var first_post = Arrow.Router.extend({
    name: 'home_post',
    path: '/home',
    method: 'POST',
    description: 'this is an example web route',
    action: function(req, resp, next) {
        /**
         * by default, routes are sync. to make them async, add a next in the action above as
         * the last parameter and then call next when completed
         */
        console.log("Got it");

        var Name = req.body.name;
        var Model = req.body.model;
        var Color = req.body.color;

        console.log("name:" + Name);
        console.log("model:" + Model);
        console.log("color:" + Color);

        var data = {
            name: Name,
            model: Model,
            color: Color
        }

         var model = req.server.getModel('car');

       //  var newModel = model.instance(data);

        // newModel.save(function(err, results){
        //     if (err) {
        //         next(err);
        //     } else {
        //         req.log.info('got cars ' + JSON.stringify(results));
        //         resp.redirect('/first');
        //     }
 
        // });


         model.create(data, function(err, results){
            if (err) {
                next(err);
            } else {
                req.log.info('got cars ' + JSON.stringify(results));
                resp.redirect('/home');
            }
 
        });
       
       




    }
});

module.exports = first_post;
