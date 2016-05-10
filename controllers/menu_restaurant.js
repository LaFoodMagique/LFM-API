var mysql = require("mysql");
var nJwt = require('njwt');
var utils = require("../utils/utils.js");

function REST_ROUTER(router,connection,md5, secretKey) {
    var self = this;
    self.handleRoutes(router,connection,md5, secretKey);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5, secretKey) {

    /**
     * @api {get} /restaurants/:id/menus Get Menus for a restaurant
     * @apiName Get Menus for a restaurant
     * @apiGroup Restaurant
     *
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Success",
     *     "Menus" : [
     *       {
     *         "Id": 1,
     *         "Name": "PastaVsNoodle",
     *         "Description": "qu'elle est le meilleur pasta or noodle ?!",
     *         "Dish": [
     *           {
     *             "Name": "Pasta",
     *             "Description": "better than noodles!",
     *             "Id": 2
     *           },
     *           .....
     *         ],
     *         "Mark": 4.5
     *       },
     *       ....
     *     ]
     *   }
     *
     * @apiErrorExample Error-Response:
     *   {
     *     "Error" : true,
     *     "Message" : "Error excecuting MySQL query"
     *   }
     *
     */    
    router.get("/restaurants/:id/menus", function(req, res, next) {
	var query = "SELECT T1.Id, T1.Name, T1.Description, T1.Dish, T2.Mark FROM (SELECT M.Id, M.Name, M.Description, CONCAT('[', GROUP_CONCAT(CONCAT('{\"Name\":\"', D.Name, '\", \"Description\":\"', D.Description, '\", \"Id\":', D.Id, '}')), ']') AS Dish FROM Menu AS M, Link_Menu_Dish AS L, Dish AS D, Restaurant AS R WHERE M.Id = L.MenuId AND L.DishId = D.Id AND M.RestaurantId = R.Id AND R.Id = ? GROUP BY M.Id) AS T1 LEFT JOIN (SELECT M.Id, M.Name, M.Description, CONCAT('[', GROUP_CONCAT(CONCAT('{\"Name\":\"', D.Name, '\", \"Description\":\"', D.Description, '\", \"Id\":', D.Id, '}')), ']') AS Dish, AVG(C.Mark) AS Mark FROM Menu AS M, Link_Menu_Dish AS L, Dish AS D, Restaurant AS R, Comment_Menu AS C WHERE M.Id = L.MenuId AND L.DishId = D.Id AND M.RestaurantId = R.Id AND C.MenuId = M.Id AND R.Id = ? GROUP BY M.Id) AS T2 ON T1.Id = T2.Id";
	var table = [parseInt(req.params.id), parseInt(req.params.id)];
	query = mysql.format(query, table);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	    }
	    else {
		var query2 = "SELECT M.Id, M.Name, M.Description, CONCAT('[', ']') AS Dish FROM Menu as M WHERE M.Id NOT IN (SELECT MenuId FROM Link_Menu_Dish) AND M.RestaurantId = ?";
		query2 = mysql.format(query2, table);
		connection.query(query2, function(err, rows2) {
		    if (err) {
			res.json({"Error" : true, "Message" : "Error executing MySQL query"});
		    }
		    else {
			for (var i = 0; i< rows2.length; i++) {
			    rows.push(rows2[i]);
			}
			for (var i = 0; i < rows.length; i++) {
			    rows[i].Dish = JSON.parse(rows[i].Dish);
			}
			res.json({"Error" : false, "Message" : "Success", "Menus" : rows});
		    }
		});
	    }
	});
    });

    /**
     * @api {post} /restaurants/:id/menus post a menu
     * @apiName post a menu
     * @apiGroup Restaurant
     *
     * @apiParams {Int} baseUserId baseUserId provide by the API. 
     * @apiParams {String} _token Token provide by the API.
     * @apiParams {String} name Name of the menu.
     * @apiParams {String} description Description of the Menu.
     * @apiParams {Int} price Price of the menu.
     * @apiParams {Int} nbPerson Number of person.
     *
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Menu Added to your restaurant"
     *   }
     *
     * @apiErrorExample Error-Response:
     *   {
     *     "Error" : true,
     *     "Message" : "Error excecuting MySQL query"
     *   }
     *
     */ 
    router.post("/restaurants/:id/menus", function(req, res, next) {
	utils.getToken(connection, req.body.baseUserId, function(response) {
	    console.log(req.body._token);
	    console.log(response);
            if (response === req.body._token) {
                nJwt.verify(response, secretKey, function(err, token) {
                    if (err) {
                        res.json({"Error": true, "Message" : "Your token is invalid"});
                    }
                    else {
			var query = "INSERT INTO Menu (RestaurantId, Name, Description, Price, NbPerson) VALUES (?, ?, ?, ?, ?)";
			var table = [parseInt(req.params.id),
				     req.body.name,
				     req.body.description,
				     parseInt(req.body.price),
				     parseInt(req.body.nbPerson)];
			query = mysql.format(query, table);
			connection.query(query, function(err, rows) {
			    if (err) {
				res.json({"Error" : true, "Message" : "Error executing MySQL query"});
			    }
			    else {
				res.json({"Error" : false, "Message" : "Menu Added to your restaurant"});
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
     * @api {delete} /restaurants/:id/menus/:menuId Delete a menu
     * @apiName Delete a menu
     * @apiGroup Restaurant
     *
     * @apiParams {Int} baseUserId Provide by the API. In url (ex: ?baseUserId...)
     * @apiParams {String} _token Token provide by the API.
     *
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "The menu is delete from your restaurant."
     *   }
     *
     * @apiErrorExample Error-Response:
     *   {
     *     "Error" : true,
     *     "Message" : "Error excecuting MySQL query"
     *   }
     *
     */
    router.delete("/restaurants/:id/menus/:menuId", function(req, res, next) {
	utils.getToken(connection, req.query.baseUserId, function(response) {
            if (response === req.query._token) {
		var query = "DELETE FROM Menu Where Id = ?"
		var table = [parseInt(req.params.menuId)];
		query = mysql.format(query, table);
		connection.query(query, function(err, rows) {
		    if (err) {
			res.json({"Error" : true, "Message" : "Error executing MySQL query"});
		    }
		    else {
			res.json({"Error" : false, "Message" : "The menu is delete from your restaurant."});
		    }
		});	
	    }
	    else {
		res.json({"Error": true, "Message" : "Your token is invalid"});
	    }
	});
    });

    /**
     * @api {post} /restaurants/:id/menus/:menuId/dishes/:dishId post a dish in a menu
     * @apiName post a dish in a menu
     * @apiGroup Restaurant
     *
     * @apiParams {Int} baseUserId baseUserId provide by the API. 
     * @apiParams {String} _token Token provide by the API.
     *
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Dish Added"
     *   }
     *
     * @apiErrorExample Error-Response:
     *   {
     *     "Error" : true,
     *     "Message" : "Error excecuting MySQL query"
     *   }
     *
     */    
    router.post("/restaurants/:id/menus/:menuId/dishes/:dishId", function(req, res, next) {
	utils.getToken(connection, req.body.baseUserId, function(response) {
            if (response === req.body._token) {
                nJwt.verify(response, secretKey, function(err, token) {
                    if (err) {
                        res.json({"Error": true, "Message" : "Your token is invalid"});
                    }
                    else {
			var query = "INSERT INTO Link_Menu_Dish (MenuId, DishId) VALUES (?, ?)";
			var table = [parseInt(req.params.menuId), parseInt(req.params.dishId)];
			query = mysql.format(query, table);
			connection.query(query, function(err, rows) {
			    if (err) {
				res.json({"Error" : true, "Message" : "Error executing MySQL query"});
			    }
			    else {
				res.json({"Error" : false, "Message" : "Dish Added"});
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
     * @api {delete} /restaurants/:id/menus/:menuId/dishes/:dishId Delete a dish from a menu
     * @apiName Delete a dish from a menu
     * @apiGroup Restaurant
     *
     * @apiParams {Int} baseUserId Provide by the API. In url (ex: ?baseUserId...)
     * @apiParams {String} _token Token provide by the API.
     *
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "The dish is delete from your menu."
     *   }
     *
     * @apiErrorExample Error-Response:
     *  {
     *    "Error": true,
     *    "Message": "Error excecuting MySQL query"
     *  }
     *
     */
    router.delete("/restaurants/:id/menus/:menuId/dishes/:dishId", function (req, res, next) {
	utils.getToken(connection, req.query.baseUserId, function(response) {
            if (response === req.query._token) {
		var query = "DELETE FROM Link_Menu_Dish Where MenuId = ? AND DishId = ?";
		var table = [parseInt(req.params.menuId), parseInt(req.params.dishId)];
		query = mysql.format(query, table);
		connection.query(query, function(err, rows) {
		    if (err) {
			res.json({"Error" : true, "Message" : "Error executing MySQL query"});
		    }
		    else {
			res.json({"Error" : false, "Message" : "The dish is delete from your menu."});
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
