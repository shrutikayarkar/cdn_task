var con = require("../config/connect");

module.exports.insert = function (obj,cb) {
	con.connect(function(err){
		var que = "INSERT INTO user(fullname,username,password,address,gender,city)VALUES('"+obj.fullname+"','"+obj.username+"','"+obj.password+"','"+obj.address+"','"+obj.gender+"','"+obj.city+"')";
		con.query(que,cb);
	});
}

module.exports.findwhere = function(obj,cb){
	con.connect(function(err){
		var que = "SELECT * FROM user WHERE ";
		var counter = 1;
		for(var k in obj){
			if(counter == 1)
			{
				que += k+ "= '"+obj[k]+ "'";
			}
			else
			{
				que += "AND"+ k+ "= "+obj[k]+" ";
			}
			counter++;
}
		con.query(que,cb);
	});
}

module.exports.find = function (cb) {
	con.connect(function(err){
		var que = "SELECT * FROM user";
		con.query(que,cb);
	});
}

module.exports.delete = function (obj,cb) {
	con.connect(function(err){
		var que = "DELETE FROM user WHERE id='"+obj.id+"'";
		con.query(que,cb);
	});
}

module.exports.update = function (where,obj,cb) {
	con.connect(function(err){
		var que = "UPDATE user SET fullname='"+obj.fullname+"',email='"+obj.email+"',address='"+obj.address+"',gender='"+obj.gender+"',city='"+obj.city+"',hobbies='"+obj.hobbies+"'WHERE id='"+where.id+"'";
		con.query(que,cb);
	});
}