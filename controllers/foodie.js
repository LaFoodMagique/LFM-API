var mysql = require("mysql");
var nJwt = require('njwt');
var utils = require("../utils/utils.js");

function REST_ROUTER(router,connection,md5, secretKey) {
    var self = this;
    self.handleRoutes(router,connection,md5, secretKey);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5, secretKey) {

    /**
     * @api {get} /foodies Get all foodies
     * @apiName Get all foodies
     * @apiGroup Foodie
     *
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Success",
     *     "Foodies" : [
     *       {
     *         "Id": 7,
     *         "BaseUserId": 17,
     *         "FirstName": "quentin",
     *         "LastName": "journet",
     *         "Email": "qjournet2@gmail.com",
     *         "Password": "5fee5ae1c5da17ee54b56abaa45e9355",
     *         "Phone": "012345678",
     *         "AddressPart1": "12 rue gabriel péri",
     *         "AddressPart2": null,
     *         "IsFoodie": 1,
     *         "IsRestaurant": 0,
     *         "Token": "token"
     *       },
     *       .....
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
    router.get("/foodies", function(req, res, next) {
	var query = "SELECT F.Id, F.BaseUserId, BU.FirstName, BU.LastName, BU.Email, BU.Password, BU.Phone, BU.AddressPart1, BU.AddressPart2, BU.IsFoodie, BU.IsRestaurant, BU.Token FROM Foodie as F, Base_User as BU WHERE F.BaseUserId = BU.Id";
	query = mysql.format(query, null);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	    }
	    else {
		res.json({"Error" : false, "Message" : "Success", "Foodies" : rows});
	    }
	});
    });

    /**
     * @api {get} /foodies/:id/all Get all other foodies
     * @apiName Get all other foodies
     * @apiGroup Foodie
     *
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Success",
     *     "Foodies" : [
     *       {
     *         "Id": 7,
     *         "BaseUserId": 17,
     *         "FirstName": "quentin",
     *         "LastName": "journet",
     *         "Email": "qjournet2@gmail.com",
     *         "Password": "5fee5ae1c5da17ee54b56abaa45e9355",
     *         "Phone": "012345678",
     *         "AddressPart1": "12 rue gabriel péri",
     *         "AddressPart2": null,
     *         "IsFoodie": 1,
     *         "IsRestaurant": 0,
     *         "Token": "token"
     *       },
     *       .....
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
    router.get("/foodies/:id/all", function(req, res, next) {
	var query = "SELECT F.Id, F.BaseUserId, BU.FirstName, BU.LastName, BU.Email, BU.Password, BU.Phone, BU.AddressPart1, BU.AddressPart2, BU.IsFoodie, BU.IsRestaurant, BU.Token FROM Foodie as F, Base_User as BU WHERE F.BaseUserId = BU.Id AND F.Id != ?";
	var table = [req.params.id];
	query = mysql.format(query, table);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	    }
	    else {
		res.json({"Error" : false, "Message" : "Success", "Foodies" : rows});	
	    }
	});
    });

    /**
     * @api {get} /foodies/:id Get one foodies
     * @apiName Get one foodies
     * @apiGroup Foodie
     *
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Success",
     *     "Foodies" : [
     *       {
     *         "Id": 7,
     *         "BaseUserId": 17,
     *         "FirstName": "quentin",
     *         "LastName": "journet",
     *         "Email": "qjournet2@gmail.com",
     *         "Password": "5fee5ae1c5da17ee54b56abaa45e9355",
     *         "Phone": "012345678",
     *         "AddressPart1": "12 rue gabriel péri",
     *         "AddressPart2": null,
     *         "IsFoodie": 1,
     *         "IsRestaurant": 0,
     *         "Token": "token"
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
    router.get("/foodies/:id", function(req, res, next) {
	var query = "SELECT F.Id, F.BaseUserId, BU.FirstName, BU.LastName, BU.Email, BU.Password, BU.Phone, BU.AddressPart1, BU.AddressPart2, BU.IsFoodie, BU.IsRestaurant, BU.Token FROM Foodie as F, Base_User as BU WHERE F.BaseUserId = BU.Id and F.Id = ?";
	var table = [parseInt(req.params.id)];
	query = mysql.format(query, table);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	    }
	    else {
		res.json({"Error" : false, "Message" : "Success", "Foodies" : rows});
	    }
	});
    });

    router.get("/foodies/:id/comments", function(req, res, next) {
	var queryR = "SELECT F.Id, R.Comment, R.Mark, R.CreationDate, BU.FirstName, BU.LastName FROM Comment_Restaurant AS R, Foodie AS F, Base_User AS BU WHERE R.FoodieId = F.Id AND F.Id = ? AND F.BaseUserId = BU.Id";
	var table = [parseInt(req.params.id)];
	queryR = mysql.format(queryR, table);
	connection.query(queryR, function(err, rows) {
            if (err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            }
            else {
		var commentR = rows;
		var queryM = "SELECT F.Id, M.Comment, M.Mark, M.CreationDate, BU.FirstName, BU.LastName FROM Comment_Menu AS M, Foodie AS F, Base_User AS BU WHERE M.FoodieId = F.Id AND F.Id = ? AND F.BaseUserId = BU.Id";
		queryM = mysql.format(queryM, table);
		connection.query(queryM, function(err, rows) {
		    if (err) {
			res.json({"Error" : true, "Message" : "Error executing MySQL query"});			
		    }
		    else {
			var commentM = rows;
			var queryD = "SELECT F.Id, D.Comment, D.Mark, D.CreationDate, BU.FirstName, BU.LastName FROM Comment_Dish AS D, Foodie AS F, Base_User AS BU WHERE D.FoodieId = F.Id AND F.Id = ? AND F.BaseUserId = BU.Id";
			queryD = mysql.format(queryM, table);
			connection.query(queryM, function(err, rows) {
			    if (err) {
				res.json({"Error" : true, "Message" : "Error executing MySQL query"});
			    }
			    else {
				var commentD = rows;
				var comments = [];
				for (var i = 0; i < commentR.length; i++) {
				    commentR[i].isRestaurant = true;
				    commentR[i].isMenu = false;
				    commentR[i].isDish = false;
				    comments.push(commentR[i]);
				}
				for (var i = 0; i < commentM.length; i++) {
				    commentM[i].isRestaurant = false;
				    commentM[i].isMenu = true;
				    commentM[i].isDish = false;
				    comments.push(commentM[i]);
				}
				for (var i = 0; i < commentD.length; i++) {
				    commentD[i].isRestaurant = false;
				    commentD[i].isMenu = false;
				    commentD[i].isDish = true;
				    comments.push(commentD[i]);
				}
				res.json({"Error" : false, "Message" : "Success", "Comments" : comments});
			    }
			});
		    }
		});
            }
        });
    });

}

module.exports = REST_ROUTER;
