var mysql = require("mysql");
var nJwt = require('njwt');
var utils = require("../utils/utils.js");

function REST_ROUTER(router,connection,md5, secretKey) {
    var self = this;
    self.handleRoutes(router,connection,md5, secretKey);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5, secretKey) {

    router.get("/restaurants", function(req, res) {
	var query = "SELECT R.Id, R.BaseUserId, BU.FirstName, BU.LastName, BU.Email, BU.Password, BU.Phone, BU.AddressPart1, BU.AddressPart2, BU.IsFoodie, BU.IsRestaurant, BU.Token FROM Restaurant as R, Base_User as BU WHERE R.BaseUserId = BU.Id";
	query = mysql.format(query, null);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	    }
	    else {
		res.json({"Error" : false, "Message" : "Success", "Restaurants" : rows});
	    }
	});
	console.log(query);
    });

    router.get("restaurants/:id", function(req, res) {
	var query = "SELECT R.Id, R.BaseUserId, BU.FirstName, BU.LastName, BU.Email, BU.Password, BU.Phone, BU.AddressPart1, BU.AddressPart2, BU.IsFoodie, BU.IsRestaurant, BU.Token FROM Restaurant as R, Base_User as BU WHERE R.BaseUserId = BU.Id and R.Id = ?";
	var table = [parseInt(req.params.id)];
	query = mysql.format(query, table);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	    }
	    else {
		res.json({"Error" : false, "Message" : "Success", "Restaurant" : rows});
	    }
	});
    });

}

module.exports = REST_ROUTER;
