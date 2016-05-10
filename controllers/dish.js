var mysql = require("mysql");
var nJwt = require('njwt');
var utils = require("../utils/utils.js");

function REST_ROUTER(router,connection,md5, secretKey) {
    var self = this;
    self.handleRoutes(router,connection,md5, secretKey);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5, secretKey) {

    /**
     * @api {get} /dishes Get all dishes
     * @apiName Get all dishes
     * @apiGroup Dish
     *
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Success",
     *     "Dishes" : [
     *       {
     *         "Id": 1,
     *         "RestaurantId": 2,
     *         "Name": "Noodles",
     *         "Description": "Very good noodles!!!"
     *       },
     *       .....
     *     ]
     *   }
     *
     * @apiErrorExample Error-Response:
     *   {
     *     "Error" : true,
     *     "Message" : Error executing MySQL query
     *   }
     *
     */
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

    /**
     * @api {get} /dishes/:id Get one dish
     * @apiName Get one dish
     * @apiGroup Dish
     *
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Success",
     *     "Dish" : [
     *       {
     *         "Id": 1,
     *         "RestaurantId": 2,
     *         "Name": "Noodles",
     *         "Description": "Very good noodles!!!"
     *       }
     *     ]
     *   }
     *
     * @apiErrorExample Error-Response:
     *   {
     *     "Error" : true,
     *     "Message" : Error executing MySQL query
     *   }
     *
     */
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


    /**
     * @api {post} /dishes Post a dish
     * @apiName Post a dish
     * @apiGroup Dish
     *
     * @apiParams {String} _token Provide by the API.
     * @apiParams {Int} baseUserId Provide by the API.
     * @apiParams {String} name Name of the dish.
     * @apiParams {String] description Description of the dish.
     *
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Dish added",
     *   }
     *
     * @apiErrorExample Error-Response:
     *   {
     *     "Error" : true,
     *     "Message" : Error executing MySQL query
     *   }
     *
     */
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

    /**
     * @api {put} /dishes/:id Post a dish
     * @apiName Post a dish
     * @apiGroup Dish
     *
     * @apiParams {String} _token Provide by the API.
     * @apiParams {Int} baseUserId Provide by the API.
     * @apiParams {String} name (Obtional) Name of the dish.
     * @apiParams {String] description (Obtional) Description of the dish.
     *
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Dish added",
     *   }
     *
     * @apiErrorExample Error-Response:
     *   {
     *     "Error" : true,
     *     "Message" : Error executing MySQL query
     *   }
     *
     */
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

    /**
     * @api {get} /restaurants/:id/dishes Get all dishes of a Restaurant
     * @apiName Get all dishes of a Restaurant
     * @apiGroup Restaurant
     *
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Success", 
     *     "Dishes" : [
     *       {
     *         "Id": 1,
     *         "Name": "Noodles",
     *         "Description": "Very good noodles!!!",
     *         "Mark": 3.5
     *       }
     *     ]
     *   }
     *
     * @apiErrorExample Error-Response:
     *   {
     *     "Error" : true,
     *     "Message" : Error executing MySQL query
     *   }
     *
     */
    router.get("/restaurants/:id/dishes", function(req, res, next) {
	var query = "SELECT T1.Id, T1.Name, T1.Description, T2.Mark FROM (SELECT D.Id, D.Name, D.Description, R.Id AS RId FROM Dish AS D, Restaurant AS R WHERE D.RestaurantId = R.Id AND R.Id = ?) AS T1 LEFT JOIN (SELECT D.Id, D.Name, D.Description, R.Id as RId, AVG(C.Mark) AS Mark FROM Dish AS D, Restaurant AS R, Comment_Dish AS C WHERE D.RestaurantId = R.Id AND C.DishId = D.Id AND R.Id = ?) AS T2 ON T1.Id = T2.Id";
	var table = [parseInt(req.params.id), parseInt(req.params.id)];
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

    /**
     * @api {post} /restaurants/:id/dishes Post a dish in a Restaruant
     * @apiName Post a dish in a Restaurant
     * @apiGroup Restaurant
     *
     * @apiParams {String} _token Provide by the API.
     * @apiParams {Int} baseUserId Provide by the API.
     * @apiParams {String} name Name of the dish.
     * @apiParams {String] description Description of the dish.
     *
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Dish add to your restaurant",
     *   }
     *
     * @apiErrorExample Error-Response:
     *   {
     *     "Error" : true,
     *     "Message" : Error executing MySQL query
     *   }
     *
     */
    router.post("/restaurants/:id/dishes", function(req, res, next) {
	utils.getToken(connection, req.body.baseUserId, function(response) {
            if (response === req.body._token) {
                nJwt.verify(response, secretKey, function(err, token) {
                    if (err) {
                        res.json({"Error": true, "Message" : "Your token is invalid1"});
                    }
                    else {
			var query = "INSERT INTO Dish (RestaurantId, Name, Description) VALUES (?, ?, ?)";
			var table = [parseInt(req.params.id), req.body.name, req.body.description];
			query = mysql.format(query, table);
			connection.query(query, function(err, rows) {
			    if (err) {
				res.json({"Error" : true, "Message" : "Error executing MySQL query"});
			    }
			    else {
				res.json({"Error" : false, "Message" : "Dish add to your restaurant"});
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

    /**
     * @api {delete} /restaurants/:id/dishes/:dishId Delete a dish
     * @apiName Delete a dish
     * @apiGroup Restaurant
     *
     * @apiParams {Int} baseUserId Provide by the API. In url (ex: ?baseUserId...)
     * @apiParams {String} _token Token provide by the API.
     *
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "The dish is delete from your restaurant."
     *   }
     *
     * @apiErrorExample Error-Response:
     *   {
     *     "Error" : true,
     *     "Message" : "Error excecuting MySQL query"
     *   }
     *
     */
    router.delete("/restaurants/:id/dishes/:dishId", function(req, res, next) {
	utils.getToken(connection, req.query.baseUserId, function(response) {
            if (response === req.query._token) {
		var query = "DELETE FROM Dish Where Id = ?"
		var table = [parseInt(req.params.dishId)];
		query = mysql.format(query, table);
		connection.query(query, function(err, rows) {
		    if (err) {
			res.json({"Error" : true, "Message" : "Error executing MySQL query"});		
		    }
		    else {
			res.json({"Error": false, "Message" : "The dish is delete from your restaurant."});
		    }
		});
		console.log(query);
	    }
	    else {
		res.json({"Error": true, "Message" : "Your token is invalid"});		
	    }
	});
    });
}

module.exports = REST_ROUTER;
