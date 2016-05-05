var mysql = require("mysql");
var nJwt = require('njwt');
var utils = require("../utils/utils.js");

function REST_ROUTER(router,connection,md5, secretKey) {
    var self = this;
    self.handleRoutes(router,connection,md5, secretKey);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5, secretKey) {
    
    router.get("/comment_restaurants", function(req, res) {
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

    router.get("/comment_restaurants/:id", function(req, res) {
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

    router.get("/foodies/:id/comment_restaurants", function(req, res) {
	var query = "SELECT * FROM Comment_Restaurant WHERE FoodieId = ? ORDER BY CreationDate DESC";
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

    router.get("/restaurant/:id/comment_restaurants", function(req, res) {
	var query = "SELECT * FROM Comment_Restaurant WHERE RestaurantId = ? ORDER BY CreationDate DESC";
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

    router.post("/foodies/:id/comment_restaurants", function(req, res) {
	utils.getToken(connection, req.body.baseUserId, function(response) {
	    if (response === req.headers._token) {
		nJwt.verify(response, secretKey, function(err, token) {
		    if (err) {
			res.json({"Error": true, "Message" : "Your token is invalid"});
		    }
		    else {
			var query = "INSERT INTO Comment_Restaurant (FoodieId, RestaurantId, Comment, Mark, CreationDate) VALUES (?, ?, ?, ?, CURDATE())";
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

    router.put("/foodies/:id/comment_restaurants/:commentId", function(req, res) {
	utils.getToken(connection, req.body.baseUserId, function(response) {
	    if (response === req.headers._token) {
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

    router.delete("/foodies/:id/comment_restaurants/:commentId", function(req, res) {
	utils.getToken(connection, req.body.baseUserId, function(response) {
	    if (response === req.headers._token) {
		nJwt.verify(response, secretKey, function(err, token) {
		    if (err) {
			res.json({"Error": true, "Message" : "Your token is invalid"});
		    }
		    else {
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
		});
	    }
	    else {
		res.json({"Error": true, "Message" : "Your token is invalid"});
	    }
	});
    });

}

module.exports = REST_ROUTER;
