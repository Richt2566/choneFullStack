var express = require("express");

var icecream = require("../models/icecream.js");

var router = express.Router();

router.get("/", function(req, res){
	icecream.selectAll(function(data){
		var hbsObject = {
			icecream: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/", function(req, res){
	icecream.insertOne([
		"flavor", "devoured"
		],[
		req.body.flavor, req.body.devour
		], function(){
			console.log(req.body.name);
			res.redirect("/");
	});
});

router.put("/:id", function(req, res){
	var condition = "id = " + req.params.id;

	console.log("condition", condition);

	icecream.updateOne({
		devoured: req.body.devour
	}, condition, function() {
		res.redirect("/");
	});
});

module.exports = router;

