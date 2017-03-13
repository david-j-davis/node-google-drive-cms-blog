var express = require('express');
var router = express.Router();
const FirebaseREST = require('firebase-rest').default;
//Replace the app name variable below with your firebase database url
var firebaseDBuri = '';
var firebaseDBsecret = '';
var jsonClient = new FirebaseREST.JSONClient(firebaseDBuri, { auth: firebaseDBsecret });

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
    res.render('index', { title: 'Example Blog Using Google Drive CMS, Firebase, and a node/express backend', name: 'Your Name', posts: blogData});
});

module.exports = router;
