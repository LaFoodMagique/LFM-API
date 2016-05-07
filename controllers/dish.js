var mysql = require("mysql");
var nJwt = require('njwt');
var utils = require("../utils/utils.js");

function REST_ROUTER(router,connection,md5, secretKey) {
    var self = this;
    self.handleRoutes(router,connection,md5, secretKey);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5, secretKey) {

    router.get("/dishes", function(req, res, next) {
	var query = "SELECT * FROM Dish";
	query = mysql.format(query, null);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	    }
	    else {
		res.json({"Error" : false, "Message" : "Success", "Dishes" : rows});
	    }
	});
    });

    router.get("/dishes/:id", function(req, res, next) {
	var query = "SELECT * FROM Dish WHERE Id = ?";
	var table = [parseInt(req.params.id)];
	query = mysql.format(query, table);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	    }
	    else {
		res.json({"Error" : false, "Message" : "Success", "Dish" : rows});
	    }
	});
    });

    router.post("/dishes", function(req, res, next) {
	utils.getToken(connection, req.body.baseUserId, function(response) {
	    if (response === req.body._token) {
		nJwt.verify(response, secretKey, function(err, token) {
		    if (err) {
			res.json({"Error": true, "Message" : "Your token is invalid"});
		    }
		    else {
			var query = "INSERT INTO Dish (Name, Description) VALUES (?, ?)";
			var table = [req.body.name, req.body.description];
			query = mysql.format(query, table);
			connection.query(query, function(err, rows) {
			    if (err) {
				res.json({"Error" : true, "Message" : "Error executing MySQL query"});
			    }
			    else {
				res.json({"Error" : false, "Message" : "Dish added"});
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

    router.put("/dishes/:id", function(req, res, next) {
	utils.getToken(connection, req.body.baseUserId, function(response) {
	    if (response === req.body._token) {
                nJwt.verify(response, secretKey, function(err, token) {
		    if (err) {
			res.json({"Error": true, "Message" : "Your token is invalid"});
		    }
		    else {
			var query = "UPDATE Dish SET";
			if (req.body.name) {query = query + " Name = " + utils.toString(req.body.name) + ",";}
			if (req.body.description) {query = query + " Description = " + utils.toString(req.body.description) + ",";}
			query = query.substring(0, query.length - 1);
			query = query + " WHERE Id = ?";
			var table = [parseInt(req.params.id)];
                        query = mysql.format(query, table);
                        connection.query(query, function(err, rows) {
			    if (err) {
				res.json({"Error" : true, "Message" : "Error executing MySQL query"});
			    }
			    else {
				res.json({"Error" : false, "Message" : "Dish updated"});
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

    router.get("/restaurants/:id/dishes", function(req, res, next) {
	var query = "SELECT D.Id, D.Name, D.Description, L.Id as LinkId FROM Dish as D, Link_Dish_Restaurant as L, Restaurant as R WHERE D.Id = L.DishId AND L.RestaurantId = R.Id AND R.Id = ?";
	var table = [parseInt(req.params.id)];
	query = mysql.format(query, table);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	    }
	    else {
		res.json({"Error" : false, "Message" : "Success", "Dishes" : rows});
	    }
	});
    });

    router.get("/restaurants/:id/dishesNotUsed", function(req, res, next) {
	var query = "SELECT * FROM Dish WHERE Id NOT IN (SELECT D.Id FROM Dish as D, Link_Dish_Restaurant AS L, Restaurant as R WHERE R.Id = L.RestaurantId AND L.DishId = D.Id AND R.Id = ?)";
	var table = [parseInt(req.params.id)];
	query = mysql.format(query, table);
	connection.query(query, function(err, rows) {
		if (err) {
			res.json({"Error": true, "Message": "Error executing mysql query"});
		} else {
			res.json({"Error": false, "Message": "Success", "Dishes": rows});
		}
	});
    });

    router.post("/restaurants/:id/dishes", function(req, res, next) {
	utils.getToken(connection, req.body.baseUserId, function(response) {
            if (response === req.body._token) {
                nJwt.verify(response, secretKey, function(err, token) {
                    if (err) {
                        res.json({"Error": true, "Message" : "Your token is invalid1"});
                    }
                    else {
			var query = "INSERT INTO Link_Dish_Restaurant (RestaurantId, DishId) VALUES (?, ?)";
			var table = [parseInt(req.params.id), parseInt(req.body.dishId)];
			query = mysql.format(query, table);
			connection.query(query, function(err, rows) {
			    if (err) {
				res.json({"Error" : true, "Message" : "Error executing MySQL query"});
			    }
			    else {
				res.json({"Error" : false, "Message" : "The dish is link to your restaurant"});
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

    router.delete("/restaurants/:id/dishes/:lId", function(req, res, next) {
	utils.getToken(connection, req.query.baseUserId, function(response) {
            if (response === req.query._token) {
		var query = "DELETE FROM Link_Dish_Restaurant Where Id = ?"
		var table = [parseInt(req.params.lId)];
		query = mysql.format(query, table);
		connection.query(query, function(err, rows) {
		    if (err) {
			res.json({"Error" : true, "Message" : "Error executing MySQL query"});		
		    }
		    else {
			res.json({"Error": false, "Message" : "The dish is delete from your restaurant."});
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
