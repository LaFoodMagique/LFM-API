var mysql = require("mysql");
var nJwt = require('njwt');
var utils = require("../utils/utils.js");

function REST_ROUTER(router,connection,md5, secretKey) {
    var self = this;
    self.handleRoutes(router,connection,md5, secretKey);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5, secretKey) {
    
    router.get("/restaurants/:id/menus", function(req, res) {
	var query = "SELECT M.Id, M.Name, M.Description, CONCAT('[', GROUP_CONCAT(CONCAT('{\"Name\":\"', D.Name, '\", \"Description\":\"', D.Description,'\"}')), ']') as Dish FROM Menu as M, Link_Menu_Dish AS L, Dish AS D, Restaurant AS R WHERE M.Id = L.MenuId AND L.DishId = D.Id AND M.RestaurantId = R.Id AND R.Id = ? GROUP BY M.Id;";
	var table = [parseInt(req.params.id)];
	query = mysql.format(query, table);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	    }
	    else {
		rows[0].Dish = JSON.parse(rows[0].Dish)
		res.json({"Error" : false, "Message" : "Success", "Menus" : rows});
	    }
	});
    });
}

module.exports = REST_ROUTER;
