var express = require('express');
var path = require('path');
var Bourne = require("bourne");

var app = express();
var posts = new Bourne("simpleBlogPosts.json");
var comments = new Bourne("simpleBlogComments.json");

app.configure(function(){
 app.use(express.json());
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.send('work it!');
});

app.get("/posts", function (req, res) {
 posts.find(function (err,results) {
   res.json(results);
 });
});

app.post("/posts", function (req, res) {
 posts.insert(req.body, function (result) {
  res.json(result);
 });
});

app.get("/posts/:id/comments", function (req, res) {
 comments.find({
	postId: parseInt(req.params.id, 10) },
 	function (err, results) {
 		res.json(results);
 	}
 );
});

app.post("/posts/:id/comments", function (req, res) {
 comments.insert(req.body, function (err, result) {
 	res.json(result);
 });
});


app.listen(3000);
