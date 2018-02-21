var orm = require("../config/orm.js");


var icecream = {
	selectAll: function(cb){
		orm.selectAll("icecream", function(res){
			cb(res);
		});
	},
	insertOne: function(cols, vals, cb){
		orm.insertOne("icecream", cols, vals, function(res){
			cb(res);
		});
	},
	updateOne: function(objColVals, condition, cb){
		orm.updateOne("icecream", objColVals, condition, function(res){
			cb(res);
		});
	}
}

module.exports = icecream;