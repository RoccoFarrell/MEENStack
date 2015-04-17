var Comment = require('../models/comment');
var User = require('../models/user');
var Bottlecap = require('../models/bottlecap');
var ObjectId = require('mongoose').Types.ObjectId;

exports.searchByUser = function(req, res){

	console.log(req.params.searchstring);
	
	User.find( { username: req.params.searchstring}, function(err, users){
		if(err) res.send(err);

		console.log(users);

		res.json(users);
		});
};

exports.searchByCap = function(req, res){

	console.log(req.params.searchstring);
	
	Bottlecap.find( { beername: req.params.searchstring}, function(err, caps){
		if(err) res.send(err);

		console.log(caps);

		res.json(caps);
		});
};

exports.searchByColor = function(req, res){

	console.log(req.params.searchstring);
	
	Bottlecap.find( { avgColor: req.params.searchstring}, function(err, caps){
		if(err) res.send(err);

		console.log(caps);

		res.json(caps);
		});
};