var express = require('express');
var router = express.Router();
var got = require('got');
const FirebaseREST = require('firebase-rest').default;
var jsonClient = new FirebaseREST.JSONClient('https://node-heroku-blog.firebaseio.com/', { auth: '8OicTSxmbUQ0Da7wdWTN9dkJZDZOp3G865U6LxkH' });

var blogData;
//retreive blog data on homepage, pass it to variable
jsonClient.get('/')
  .then(res => blogData = res.body.posts);

/* GET home page. */
router.get('/', function (req, res, next) {

    req.somedata = 'some information ... ';
    next();
},function(req, res) {
    //console.log(req.identifier);
    //console.log(req.somedata);
    res.render('index', { title: 'Example Blog Using Google Drive CMS, Firebase, and a node/express backend', name: 'David Davis', posts: blogData});
});

module.exports = router;
