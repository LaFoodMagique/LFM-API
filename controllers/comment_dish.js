var mysql = require("mysql");
var nJwt = require('njwt');
var utils = require("../utils/utils.js");

function REST_ROUTER(router,connection,md5, secretKey) {
    var self = this;
    self.handleRoutes(router,connection,md5, secretKey);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5, secretKey) {


    /**
     * @api {get} /restaurants/:id/dishes/:dishId/comments Get Dish Comment for restaurant
     * @âpiName Get Dish Comment for restaurant
     * @apiGroup Restaurant
     *
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error": false,
     *     "Message": "Success",
     *     "Comments": [
     *       {
     *         "Id": 19,
     *         "DishId": 1,
     *         "FoodieId": 8,
     *         "Comment": "Le best",
     *         "Mark": 4,
     *         "CreationDate": "2016-05-07T16:00:00.000Z",
     *         "BaseUserId": 19,
     *         "FirstName": "foodie",
     *         "LastName": "foodie",
     *         "Email": "foodie@foodie.com",
     *         "Password": "889ea886e748fbd3dd317130a609f993",
     *         "Phone": "125489",
     *         "AddressPart1": "dtc",
     *         "AddressPart2": null,
     *         "IsFoodie": 1,
     *         "IsRestaurant": 0,
     *         "Token": "token"
     *       },
     *       ......
     *     ]
     *   }
     *
     * @apiErrorExample Error-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Error executing MySQL query"
     *   }
     *
     */
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

    router.post("/restaurants/:id/dishes/:dishId/comments", function(req, res, next) {
	var query = "INSERT INTO Comment_Dish (DishId, FoodieId, Comment, Mark, CreationDate) VALUES (?, ?, ?, ?, CURDATE()";
	var table = [parseInt(req.params.dishId),
		     parseInt(req.params.id),
		     req.body.comment,
		     req.body.mark];
	query = mysql.format(query, table);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	    }
	    else {
		res.json({"Error" : false, "Message" : "Comment added."});
	    }
	});
    });
	
}

module.exports = REST_ROUTER;
