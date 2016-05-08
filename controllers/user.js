var mysql = require("mysql");
var nJwt = require('njwt');
var utils = require("../utils/utils.js");

function REST_ROUTER(router,connection,md5, secretKey) {
    var self = this;
    self.handleRoutes(router,connection,md5, secretKey);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5, secretKey) {

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
				console.log(req.body.IsFoodie);
				if (req.body.IsFoodie == "0") {
				    console.log("coucou");
				    query = "UPDATE Restaurant SET";
				    if (req.body.OpenHour) {query = query + " OpenHour = '" + req.body.OpenHour + "',";}
				    if (req.body.CloseHour) {query = query + " CloseHour = '" + req.body.CloseHour + "',";}
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
