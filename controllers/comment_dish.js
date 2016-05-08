var mysql = require("mysql");
var nJwt = require('njwt');
var utils = require("../utils/utils.js");

function REST_ROUTER(router,connection,md5, secretKey) {
    var self = this;
    self.handleRoutes(router,connection,md5, secretKey);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5, secretKey) {

    router.get("/restaurants/:id/dishes/:dishId/comments", function(req, res, next) {
	var query = "SELECT * FROM Comment_Dish AS C, Foodie AS F, Base_User AS BU WHERE C.FoodieId = F.Id AND F.BaseUserId = BU.Id AND C.DishId = ?";
	var table = [parseInt(req.params.dishId)];
	query = mysql.format(query, table);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	    }
	    else {
		res.json({"Error" : false, "Message" : "Success", "Comments" : rows});
	    }
	});
    });
	
}

module.exports = REST_ROUTER;
