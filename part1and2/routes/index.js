var express = require('express');
var router = express.Router();
var dbFacade = require('../facade/dbfacade')
/* GET home page. */

router.get('/', function(req, res, next) { // for page retrievel
  res.render('register', { title: 'register' });
});

router.get('/register', function(req, res, next) { // for page retrievel
    res.render('register', { title: 'register' });
});

router.post('/register', function(req, res, next) { // for actually register
  try {
    dbFacade.createUser(req.body)
    res.render('register', {  registered: 'You have been registered' });
  }
  catch(err) {
    res.render('register', {  error: 'Something went wrong...' });
  }
});

router.get('/login', function(req, res, next) { // for page retrievel
  res.render('login', { title: 'login' });
});

router.post('/login', function(req, res, next) { // for actually login
  const {username, password} = req.body // test towards database
  dbFacade.loginUser(username, password, res)
});

// router.get('/loggedin', function(req, res, next) { // for page retrievel
//   res.render('loggedin', { title: 'loggedin' });
// });

router.post('/loggedin', function(req, res, next) { // for actually searching
  const { search } = req.body
  
  try {
    dbFacade.getAllUsers((result, res, err) => {
      console.log(result)
      res.render('loggedin', { title: 'First Task', users: result, error: err});
    }, res, search)
  }
  catch(err) {
    console.log("ERROR")
    console.log("LOOK AT DIS"+err)
  }
});

module.exports = router;
