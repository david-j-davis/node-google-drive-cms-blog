var express = require('express');
var router = express.Router();
var got = require('got');
const FirebaseREST = require('firebase-rest').default;
var jsonClient = new FirebaseREST.JSONClient('https://node-heroku-blog.firebaseio.com/', { auth: '8OicTSxmbUQ0Da7wdWTN9dkJZDZOp3G865U6LxkH' });

/* GET home page. */
router.get('/', function (req, res, next) {

    jsonClient.get().then(console.log);

    // got('todomvc.com')
    //     .then(response => {
    //         console.log(response.body);
    //         //=> '<!doctype html> ...'
    //     })
    //     .catch(error => {
    //         console.log(error.response.body);
    //         //=> 'Internal server error ...'
    //     });

    req.somedata = 'some information ... ';
    console.log('app is: ', req.app);
    next();
},function(req, res) {
    //console.log(req.identifier);
    console.log(req.somedata);
    res.render('index', { title: 'Express', name: 'David' });
});

module.exports = router;
