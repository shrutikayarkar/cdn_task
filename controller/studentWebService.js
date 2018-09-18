var express = require("express");
var router = express.Router();
var user = require("../model/student");


router.post("/",function (req,res) {
	user.insert(req.body,function(err,result){
		res.send(result.ops[0]);
		// console.log(result);
	});
});


// router.get("/",function (req,res) {
// 	user.findwhere({_id:mongo.ObjectId(req.session.userid)},function(err,result){
// 		res.send(result[0]);
// 		// console.log(result[0]);
// 	});
// });

// router.post("/update",function (req,res) {
// 	// console.log(req.session.userid);
// 	user.update({_id:mongo.ObjectId(req.session.userid)},newdata,function(err,result){
// 		res.send(result);
// 		console.log(result);
// 		// console.log("++++"+req.body);
// 	});
// });
router.get("/",function (req,res) {
	user.find(function(err,result){
		res.send(result);
		// console.log(result);
	});
});

router.delete("/",function (req,res) {
	user.delete({id:(req.query.id)},function(err,result){
		res.send(result);
		// console.log(result);
	});
});

router.put("/",function (req,res) {
	user.update({id:(req.body.id)},req.body,function(err,result){
		res.send(result);
		// console.log(result);
	});
});

module.exports = router;

