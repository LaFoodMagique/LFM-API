var mysql = require("mysql");
var nJwt = require('njwt');
var utils = require("../utils/utils.js");

function REST_ROUTER(router,connection,md5, secretKey) {
    var self = this;
    self.handleRoutes(router,connection,md5, secretKey);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5, secretKey) {

    router.get("/restaurants/:id/closeDates", function(req, res, next) {
	var query = "SELECT * FROM Close_Date AS C, Restaurant AS R WHERE C.RestaurantId = R.Id AND R.Id = ?";
	var table = [parseInt(req.params.id)];
	query = mysql.format(query, table);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	    }
	    else {
		res.json({"Error" : false, "Message" : "Success", "CloseDates" : rows});
	    }
	});
    });

    router.post("/restaurants/:id/closeDates", function(req, res, next) {
	utils.getToken(connection, req.body.baseUserId, function(response){
            if (response === req.body._token) {
                nJwt.verify(response, secretKey, function(err, token) {
                    if (err) {
                        res.json({"Error": true, "Message" : "Your token is invalid"});
                    } else {
			var query = "INSERT INTO Close_Date (RestaurantId, DateClosed, DateReOpen) VALUES (?, ?, ?);";
			var table = [parseInt(req.params.id), req.body.DateClosed, req.body.DateReOpen];
			query = mysql.format(query, table);
			connection.query(query, function(err, rows) {
			    if (err) {
				res.json({"Error" : true, "Message" : "Error executing MySQL query"});
			    }
			    else {
				res.json({"Error" : false, "Message" : "Close date added."});
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

    router.delete("/restaurants/:id/closeDates/:closeId", function(req, res, next) {
	utils.getToken(connection, req.query.baseUserId, function(response) {
            if (response === req.query._token) {
		var query = "DELETE FROM Close_Date Where Id = ?";
		var table = [parseInt(req.params.closeId)];
		query = mysql.format(query, table);
		connection.query(query, function(err, rows) {
		    if (err) {
			res.json({"Error" : true, "Message" : "Error executing MySQL query"});
		    }
		    else {
			res.json({"Error": false, "Message" : "The close date is delete."});
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
