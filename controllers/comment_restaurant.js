var mysql = require("mysql");
var nJwt = require('njwt');
var utils = require("../utils/utils.js");

function REST_ROUTER(router,connection,md5, secretKey) {
    var self = this;
    self.handleRoutes(router,connection,md5, secretKey);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5, secretKey) {

    router.get("/comment_restaurants", function(req, res, next) {
	var query = "SELECT * FROM Comment_Restaurant";
	query = mysql.format(query, null);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	    }
	    else {
		res.json({"Error" : false, "Message" : "Success", "Comment_Restaurants" : rows});
	    }
	});
    });

    router.get("/comment_restaurants/:id", function(req, res, next) {
	var query = "SELECT * FROM Comment_Restaurant WHERE Id = ?";
	var table = [parseInt(req.params.id)];
	query = mysql.format(query, table);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	    }
	    else {
		res.json({"Error" : false, "Message" : "Success", "Comment_Restaurant" : rows});
	    }
	});
    });


    /**
     * @api {get} /foodies/:id/comment_restaurants Get the comments_restaurant of a Foodie
     * @apiName Get the comments_restaurant of a Foodie
     * @apiGroup Foodie
     *
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Success"
     *     "Comment_restaurants" : [
     *       {
     *         "Id": 3,
     *         "RestaurantId": 2,
     *         "Restaurant": "la bonne bouffe",
     *         "Comment": "I'll be back.\nPS - Malade en revenant",
     *         "Mark": 1,
     *         "CreationDate": "2016-05-05T16:00:00.000Z"
     *       },
     *       .....
     *     ]
     *   }
     *
     * @apiErrorExample Error-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Error excecuting MySQL query"
     *   }
     *
     */
    router.get("/foodies/:id/comment_restaurants", function(req, res, next) {
	var query = "SELECT C.Id, R.Id as RestaurantId, BU.FirstName as Restaurant, C.Comment, C.Mark, C.CreationDate FROM Comment_Restaurant as C, Restaurant as R, Base_User as BU WHERE C.RestaurantId = R.Id AND R.BaseUserId = BU.Id AND FoodieId = ? ORDER BY CreationDate DESC";
	var table = [parseInt(req.params.id)];
	query = mysql.format(query, table);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	    }
	    else {
		res.json({"Error" : false, "Message" : "Success", "Comment_restaurants" : rows});
	    }
	});
    });


    /**
     * @api {get} /restaurant/:id/comment_restaurants Get Comment of a restaurant
     * @apiName Get Comment of a restaurant
     * @apiGroup Restaurant
     *
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Success",
     *     "Comment_restaurants": [
     *       {
     *         "Id": 3,
     *         "FirstName": "foodie",
     *         "LastName": "foodie",
     *         "Mark": 1,
     *         "Comment": "I'll be back.\nPS - Malade en revenant",
     *         "CreationDate": "2016-05-05T16:00:00.000Z"
     *       },
     *       .....
     *     ]
     *   }
     *
     * @apiErrorExample Error-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Error excecuting MySQL query"
     *   }
     *
     */
    router.get("/restaurant/:id/comment_restaurants", function(req, res, next) {
	var query = "SELECT CR.Id, BU.FirstName, BU.LastName, CR.Mark, CR.Comment, CR.CreationDate FROM Comment_Restaurant as CR, Foodie as F, Base_User as BU WHERE CR.FoodieId = F.Id AND F.BaseUserId = BU.Id AND RestaurantId = ? ORDER BY CreationDate DESC;";
	var table = [parseInt(req.params.id)];
	query = mysql.format(query, table);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	    }
	    else {
		res.json({"Error" : false, "Message" : "Success", "Comment_restaurants" : rows});
	    }
	});
    });


    /**
     * @api {post} /foodies/:id/comment_restaurants Comment restaurant 
     * @apiName Comment restaurant
     * @apiGroup Foodie
     *
     * @apiParams {Int} baseUserId baseUserId provide by the API.
     * @apiParams {String} _token Token provide by the API.
     * @apiParams {Int} restaurantId id of the restaurant.
     * @apiParams {String} comment Comment given.
     * @apiParams {Int} mark Mark given.
     *
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Commentaire added."
     *   }
     *
     * @apiErrorExample Error-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Error excecuting MySQL query"
     *   }
     *
     */
    router.post("/foodies/:id/comment_restaurants", function(req, res, next) {
	utils.getToken(connection, req.body.baseUserId, function(response) {
	    if (response === req.body._token) {
		nJwt.verify(response, secretKey, function(err, token) {
		    if (err) {
			res.json({"Error": true, "Message" : "Your token is invalid"});
		    }
		    else {
			var query = "INSERT INTO Comment_Restaurant (FoodieId, RestaurantId, Comment, Mark, CreationDate) VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP)";
			var table = [parseInt(req.params.id),
				     parseInt(req.body.restaurantId),
				     req.body.comment,
				     parseInt(req.body.mark)];
			query = mysql.format(query, table);
			connection.query(query, function(err, rows) {
			    if (err) {
				res.json({"Error" : true, "Message" : "Error executing MySQL query"});
			    }
			    else {
				res.json({"Error" : false, "Message" : "Commentaire added."});
			    }
			});
		    }
		});
	    }
	    else {
		res.json({"Error" : true, "Message" : "Your Token is invalid."});
	    }
	});
    });

    /**
     * @api /foodies/:id/comment_restaurants/:commentId Update comment by Foodie
     * @apiName Update comment by Foodie
     * @apiGroup Foodie
     *
     * @apiParams {Int} baseUserId baseUserId provide by the API.
     * @apiParams {String} _token Token provide by the API.
     * @apiParams {Int} restaurantId (Obtional) Id of the restaurant
     * @apiParams {String} comment (Obtional) Comment of the foodie.
     * @apiParams {Int} mark (Obtional) Mark given.
     *
     *
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Commentaire updated."
     *   }
     *
     * @apiErrorExample Error-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Error excecuting MySQL query"
     *   }
     *
     */
    router.put("/foodies/:id/comment_restaurants/:commentId", function(req, res, next) {
	utils.getToken(connection, req.body.baseUserId, function(response) {
	    if (response === req.body._token) {
		nJwt.verify(response, secretKey, function(err, token) {
		    if (err) {
			res.json({"Error": true, "Message" : "Your token is invalid"});
		    }
		    else {
			var query = "UPDATE Comment_Restaurant SET";
			if (req.body.restaurantId) {query = query + " RestaurantId = " + parseInt(req.body.restaurantId) + ",";}
			if (req.body.comment) {query = query + " Comment = " + utils.toString(req.body.comment) + ",";}
			if (req.body.mark) {query = query + " Mark = " + parseInt(req.body.mark) + ",";}
			query = query.substring(0, query.length - 1);
			query = query + " WHERE Id = ?";
			var table = [parseInt(req.params.commentId)];
			query = mysql.format(query, table);
			connection.query(query, function(err, rows) {
			    if (err) {
				res.json({"Error" : true, "Message" : "Error executing MySQL query"});
			    }
			    else {
				res.json({"Error" : false, "Message" : "Comment updated"});
			    }
			});
			console.log(query);
		    }
		});
	    }
	    else {
		res.json({"Error": true, "Message" : "Your token is invalid"});
	    }
	});
    });


    /**
     * @api {delete} /foodies/:id/comment_restaurants/:commentId Delete a comment
     * @apiName Delete a comment
     * @apiGroup Foodie
     *
     * @apiParams {Int} baseUserId Provide by the API. In url (ex: ?baseUserId...)
     * @apiParams {String} _token Token provide by the API. 
     *
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Deleted comment with id "
     *   }
     *
     * @apiErrorExample Error-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Error excecuting MySQL query"
     *   }
     *
     */
    router.delete("/foodies/:id/comment_restaurants/:commentId", function(req, res, next) {
	utils.getToken(connection, req.query.baseUserId, function(response) {
	    if (response === req.query._token) {
		var query = "DELETE FROM Comment_Restaurant WHERE Id = ?";
		var table = [parseInt(req.params.commentId)];
		query = mysql.format(query, table);
		connection.query(query, function(err, rows) {
		    if (err) {
			res.json({"Error" : true, "Message" : "Error executing MySQL query"});
		    }
		    else {
			res.json({"Error" : false, "Message" : "Deleted comment with id " + req.params.commentId});
		    }
		});
		
	    }
	    else {
		res.json({"Error": true, "Message" : "Your token is invalid"});
	    }
	});
    });

    router.get("/commentsHomePage", function(req, res, next) {
	var query = "SELECT T1.CId AS commentId, T1.FirstName AS FirstName, T1.LastName AS LastName, T1.Comment AS Comment, T1.Mark AS Mark, T2.FirstName AS RestaurantName FROM (SELECT C.Id AS CId, BU.FirstName, BU.LastName, F.Id, C.Comment, C.Mark FROM Comment_Restaurant AS C, Foodie AS F, Base_User AS BU WHERE C.FoodieId = F.Id AND F.BaseUserId = BU.Id) AS T1 LEFT JOIN (SELECT C.Id AS CId, BU.FirstName FROM Comment_Restaurant AS C, Restaurant AS R, Base_User AS BU WHERE C.RestaurantId = R.Id AND R.BaseUserId = BU.Id) AS T2 ON T1.CId = T2.CId limit 10";
	query = mysql.format(query, null);
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
