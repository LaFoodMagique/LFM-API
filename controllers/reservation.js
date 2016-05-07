var mysql = require("mysql");
var nJwt = require('njwt');
var utils = require("../utils/utils.js");

function REST_ROUTER(router,connection,md5, secretKey) {
    var self = this;
    self.handleRoutes(router,connection,md5, secretKey);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5, secretKey) {
	router.get("restaurant/:id/reservations", function(req, res, next){
		var query = "SELECT * FROM Reservation WHERE RestaurantId = ? AND Date=CURDATE()";
		var table = [parseInt(req.params.id)];
		query = mysql.format(query, table);
		connection.query(query, function(err, rows) {
			if (err) {
				res.json({"Error" : true, "Message" : "Error executing MySQL query"});
			} else {
				res.json({"Error" : false, "Message" : "Success", "reservations" : rows});
			}
		});
	});

	router.get("" function(res, res, next){

	});
}