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

}

module.exports = REST_ROUTER;
