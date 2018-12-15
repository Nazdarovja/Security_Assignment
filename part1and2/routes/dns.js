var express = require('express');
var router = express.Router();


/* GET home page. */
router.post('/', function(req, res, next) {
    res.render('dns', { stdout: '', stderr: '' });
});

/* GET home page. */
router.post('/search', function(req, res, next) {
    var exec = require('child_process').exec;
    const url = req.body.url
    exec(`whois ${url}`,
        function (error, stdout, stderr) {

            res.render('dns', { title: 'Second Task', stdout: `BASH$ > ${stdout}`, stderr });
            if (error !== null) {
                 console.log('exec error: ' + error);
            }
        });
});


module.exports = router;
