var mysql = require("mysql");
var nJwt = require('njwt');
var utils = require("../utils/utils.js");

function REST_ROUTER(router,connection,md5, secretKey) {
    var self = this;
    self.handleRoutes(router,connection,md5, secretKey);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5, secretKey) {

    /**
     * @api {post} /users post a close date
     * @apiName post a close date
     * @apiGroup User
     *
     * @apiParams {String} firstName First name of the user.
     * @apiParams {String} lastName Last name of the user.
     * @apiParams {String} email Email of the User.
     * @apiParams {String} password Passord of the User.
     * @apiParams {String} addressPart1 Adresse of the User.
     * @apiParams {Boolean} isFoodie 1 for a foodie 0 for a restaurant.
     *
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "User Added !"
     *   }
     *
     * @apiErrorExample Error-Response:
     *   {
     *     "Error" : true,
     *     "Message" : "Error excecuting MySQL query"
     *   }
     *
     */
    router.post("/users", function(req, res, next) {
	var query = "";
	if (req.body.isFoodie === "1")
	    query = query + "INSERT INTO Base_User(FirstName, LastName, Email, Password, Phone, AddressPart1, IsFoodie) VALUES (" + utils.toString(req.body.firstName) + ", " + utils.toString(req.body.lastName)  + ", " + utils.toString(req.body.email) + ", " + utils.toString(md5(req.body.password))  + ", " + utils.toString(req.body.phone) + ", " + utils.toString(req.body.addressPart1) + ", " + req.body.isFoodie + ")";
	else
	    query = query + "INSERT INTO Base_User(FirstName, Email, Password, Phone, AddressPart1, IsFoodie) VALUES (" + utils.toString(req.body.firstName) + ", " + utils.toString(req.body.email) + ", " + utils.toString(md5(req.body.password))  + ", " + utils.toString(req.body.phone) + ", " + utils.toString(req.body.addressPart1) + ", " + req.body.isFoodie + ")";
	var table = [req.body.firstName,
		     req.body.lastName,
		     req.body.email,
		     req.body.password,
		     req.body.phone,
		     req.body.addressPart1,
		     req.body.isFoodie,
		     req.body.isRestaurant];
	query = mysql.format(query, null);
	console.log(query);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query1"});
	    }
	    else {
		var query = "SELECT * FROM Base_User WHERE Email = ?";
		var table = [req.body.email];
		query = mysql.format(query, table);
		connection.query(query, function(err, rows) {
		    if (err) {
			res.json({"Error" : true, "Message" : "Error executing MySQL query2"});
		    }
		    else {
			console.log(rows[0]);
			if (rows[0].IsFoodie) {
			    var query = "INSERT INTO Foodie(BaseUserId) VALUES (?)";
			    var table = [rows[0].Id];
			    query = mysql.format(query, table);
			    connection.query(query, function(err, rows) {
				if (err) {
				    res.json({"Error" : true, "Message" : "Error executing MySQL query3"});
				}
				else {
				    res.json({"Error" : false, "Message" : "User Added !"});
				}
			    });
			}
			else {
			    var query = "INSERT INTO Restaurant(BaseUserId) VALUES (?)";
			    var table = [rows[0].Id];
			    query = mysql.format(query, table);
			    connection.query(query, function(err, rows) {
				if (err) {
				    res.json({"Error" : true, "Message" : "Error executing MySQL query4"});
				}
				else {
				    res.json({"Error" : false, "Message" : "User Added !"});
				}
			    });
			}
		    }
		});
	    }
	});
    });

    /**
     * @api {get} /users Get all users.
     * @apiName Get all users
     * @apiGroup User
     *
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Success",
     *     "Users": [
     *       {
     *         "Id": 17,
     *         "FirstName": "quentin",
     *         "LastName": "journet",
     *         "Email": "qjournet2@gmail.com",
     *         "Password": "5fee5ae1c5da17ee54b56abaa45e9355",
     *         "Phone": "012345678",
     *         "AddressPart1": "12 rue gabriel péri",
     *         "AddressPart2": null,
     *         "IsFoodie": 1,
     *         "IsRestaurant": 0,
     *         "Token": "a token"
     *       },
     *       ......
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
    router.get("/users", function(req, res, next) {
	var query = "SELECT * FROM Base_User";
	query = mysql.format(query, null);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	    }
	    else {
		res.json({"Error" : false, "Message" : "Success", "Users" : rows});
		}
	});
    });
    

    /**
     * @api {get} /users/:id Get one user.
     * @apiName Get one user
     * @apiGroup User
     *
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Success",
     *     "User": [
     *       {
     *         "Id": 17,
     *         "FirstName": "quentin",
     *         "LastName": "journet",
     *         "Email": "qjournet2@gmail.com",
     *         "Password": "5fee5ae1c5da17ee54b56abaa45e9355",
     *         "Phone": "012345678",
     *         "AddressPart1": "12 rue gabriel péri",
     *         "AddressPart2": null,
     *         "IsFoodie": 1,
     *         "IsRestaurant": 0,
     *         "Token": "a token"
     *       }
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
    router.get("/users/:id", function(req, res, next) {
	var query = "SELECT * FROM Base_User WHERE Id = ?";
	var table = [parseInt(req.params.id)];
	query = mysql.format(query, table);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	    }
	    else {
		res.json({"Error" : false, "Message" : "Success", "User" : rows});
	    }
	});
    });

    /**
     * @api /users/:id Update a Foodie
     * @apiName Update a Foodie
     * @apiGroup User
     *
     * @apiParams {Int} baseUserId baseUserId provide by the API.
     * @apiParams {String} _token Token provide by the API.
     * @apiParams {String} FirstName (Obtional) Name of the User.
     * @apiParams {String} LastName (Obtional) LastName of the User (null is restaurant).
     * @apiParams {String} Email (Obtional) Email of the User.
     * @apiParams {String} Phone (Obtional) Phone of the User.
     * @apiParams {String} AddressPart1 (Obtional) First part of the User.
     * @apiParams {String} AddressPart2 (Obtional) Second part of the User.
     * @apiParams {Date} OpenHour (Obtional) Open hour.
     * @apiParams {Date} CloseHour (Obtional) Close hour.
     * @apiParams {String} Longitude (Obtional) Longitude of the restaurant.
     * @apiParams {String} Latitude (Obtional) Latitude of the restaurant.
     *
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "User updated"
     *   }
     *
     * @apiErrorExample Error-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Error excecuting MySQL query"
     *   }
     *
     */
    router.put("/users/:id", function(req, res, next) {
	utils.getToken(connection, req.body.baseUserId, function(response) {
	    if (response === req.body._token) {
		nJwt.verify(response, secretKey, function(err, token) {
		    if (err) {
			res.json({"Error": true, "Message" : "Your token is invalid"});
		    }
		    else {
			var query = "UPDATE Base_User SET"
			if (req.body.FirstName) {query = query + " FirstName = " + utils.toString(req.body.FirstName) + ",";}
			if (req.body.LastName &&  req.body.LastName  != undefined) {query = query + " LastName = " + utils.toString(req.body.LastName) + ",";}
			if (req.body.Email) {query = query + " Email = " + utils.toString(req.body.Email) + ",";}
			if (req.body.Phone) {query = query + " Phone = " + utils.toString(req.body.Phone) + ",";}
			if (req.body.AddressPart1) {query = query + " AddressPart1 = " + utils.toString(req.body.AddressPart1) + ",";}
			if (req.body.AddressPart2 && req.body.AddressPart2 != undefined) {query = query + " AddressPart2 = " + utils.toString(req.body.AddressPart2) + ",";}
			if (req.body.IsFoodie) {query = query + " IsFoodie = " + Boolean(req.body.isFoodie)+ ",";}
			query = query.substring(0, query.length - 1);
			query = query + " WHERE Id = ?";
			var table = [parseInt(req.params.id)];
			query = mysql.format(query, table);
			connection.query(query, function(err, rows) {
			    if (err) {
				res.json({"Error" : true, "Message" : "Error executing MySQL query"});
			    }
			    else {
				if (req.body.IsFoodie == "0") {
				    query = "UPDATE Restaurant SET";
				    if (req.body.OpenHour) {query = query + " OpenHour = '" + req.body.OpenHour + "',";}
				    if (req.body.CloseHour) {query = query + " CloseHour = '" + req.body.CloseHour + "',";}
				    if (req.body.Longitude) {query = query + " Longitude = " + utils.toString(req.body.Longitude) + ",";}
				    if (req.body.Latitude) {query = query + " Latitude = " + utils.toString(req.body.Latitude) + ",";}
				    query = query.substring(0, query.length - 1);
				    query = query + " WHERE Id = ?";
				    table = [parseInt(req.body.RestaurantId)];
				    query = mysql.format(query, table);
				    connection.query(query, function(err, rows) {
					if (err) {
					    res.json({"Error" : true, "Message" : "Your Token is invalid."});
					}
					else {
					    res.json({"Error" : false, "Message" : "User updated"});
					}
				    });
				    console.log(query);
				}
				else {
				    res.json({"Error" : false, "Message" : "User updated"});
				}
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
     * @api {delete} /users/:id Delete a user
     * @apiName Delete a user
     * @apiGroup User
     *
     * @apiParams {Int} baseUserId Provide by the API. In url (ex: ?baseUserId...)
     * @apiParams {String} _token Token provide by the API. 
     *
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Deleted user with id "
     *   }
     *
     * @apiErrorExample Error-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Error excecuting MySQL query"
     *   }
     *
     */
    router.delete("/users/:id", function(req, res, next) {
	 utils.getToken(connection, req.params.id, function(response) {
	     if (response === req.body._token) {
		  nJwt.verify(response, secretKey, function(err, token) {
		      if (err) {
			  res.json({"Error": true, "Message" : "Your token is invalid"});
		      }
		      else {
			  var query = "DELETE FROM Base_User WHERE Id = ?";
			  var table = [parseInt(req.params.id)];
			  query = mysql.format(query, table);
			  connection.query(query, function(err, rows) {
			      if (err) {
				  res.json({"Error" : true, "Message" : "Error executing MySQL query"});
			      }
			      else {
				  res.json({"Error" : false, "Message" : "Deleted the user with id "+req.params.id});
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
     * @api {post} /login Login
     * @apiName Login
     * @apiGroup User
     *
     * @apiParams {String} email Email of the user.
     * @apiParams {String} password Password of the user.
     *
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Success",
     *     "User": {
     *       "Id": 19,
     *       "FirstName": "foodie",
     *       "LastName": "foodie",
     *       "Email": "foodie@foodie.com",
     *       "Password": "889ea886e748fbd3dd317130a609f993",
     *       "Phone": "125489",
     *       "AddressPart1": "dtc",
     *       "AddressPart2": null,
     *       "IsFoodie": 1,
     *       "IsRestaurant": 0,
     *       "Token": "a token",
     *       "FoodieId": 8
     *     }
     *   }
     *
     */
    router.post('/login', function(req, res) {
	var query = "SELECT * FROM Base_User WHERE email = ? and password = ?";
	var table = [req.body.email, md5(req.body.password)];
	query = mysql.format(query, table);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error exucuting MySQL query"});
	    }
	    else {
		if (rows.length > 0) {
		    var claims = {
			sub: rows[0].Id,
			iss: 'http://localhost:3000'
		    }
		    var User = rows[0];
		    var jwt = nJwt.create(claims, secretKey);
		    var token = jwt.compact();
		    var queryToken = "UPDATE Base_User SET Token = ? WHERE Id = " + rows[0].Id;
		    var tableToken = [token];
		    queryToken = mysql.format(queryToken, tableToken);
		    connection.query(queryToken, function(err, rows) {
			if (err) {
			    res.json({"Error": true, "Message" : "Error while created your API token."});
			}
			else {
			    User.Token = token;
			    var query = "";
			    if (User.IsFoodie) {
				query = query + "SELECT Id FROM Foodie WHERE BaseUserId = ?";
			    }
			    else {
				query = query + "SELECT * FROM Restaurant WHERE BaseUserId = ?";
			    }
			    var table = [parseInt(User.Id)];
			    query = mysql.format(query, table);
			    connection.query(query, function(err, rows) {
				if (err) {
				    res.json({"Error" : true, "Message" : "Error exucuting MySQL query"});
				}
				else {
				    if (User.IsFoodie) {
					User.FoodieId = rows[0].Id;
				    }
				    else {
					User.RestaurantId = rows[0].Id;
					User.OpenHour = rows[0].OpenHour;
					User.CloseHour = rows[0].CloseHour;
				    }
				    res.json({"Error" : false, "Message" : "You are connected.", "User" : User});
				}
			    });
			}
		    });
		}
		else {
		    res.json({"Error" : true, "Message" : "Didn't find your account"});
		}
	    }
	});
    });

}

module.exports = REST_ROUTER;
