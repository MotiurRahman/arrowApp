var Arrow = require('arrow');



var upload = Arrow.Router.extend({
    name: 'upload',
    path: '/upload',
    method: 'GET',
    description: 'this is home route',
    action: function(req, resp, next) {
    
         resp.render('upload');



    }
});

module.exports = upload;
