var Arrow = require('arrow');


var contact = Arrow.Router.extend({
    name: 'contact',
    path: '/contact',
    method: 'GET',
    description: 'this is an example web route',
    action: function(req, resp) {
        /**
         * by default, routes are sync. to make them async, add a next in the action above as
         * the last parameter and then call next when completed
         */

        // var key = require("./../conf/default");
        //var keyData = key.apikey_development;
        //console.log("Contact page key:"+apikey_development);

        //process.env.prod = 'dVF4tepx3j1LOJBmuxXEqwwURw9DKOLJ',

            //     apikey_production: 'dVF4tepx3j1LOJBmuxXEqwwURw9DKOLJ',
            // // development key, this is the key that will be required when you are testing non-production (such as locally)
            //     apikey_development: 'vl13oRoqp400sAm5Zv0aZgFuHEsECRsA',


            resp.render('contact');
    }
});

module.exports = contact;
