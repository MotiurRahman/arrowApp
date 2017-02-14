var Arrow = require('arrow');

var multer = require('multer');
var upload = multer({ dest: __dirname + './../public/uploads/' });

 upload.any();

var upload_post = Arrow.Router.extend({
    name: 'upload_post',
    path: '/upload',
    method: 'POST',
    description: 'this is an example web route',
    action: function(req, resp, next) {
       
        var data = req.files;

        console.log("OriginalName:" + data.file.filename);

        resp.json(req.files);



    }
});

module.exports = upload_post;
