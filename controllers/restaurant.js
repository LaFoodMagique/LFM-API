var mysql = require("mysql");
var nJwt = require('njwt');
var utils = require("../utils/utils.js");

function REST_ROUTER(router,connection,md5, secretKey) {
    var self = this;
    self.handleRoutes(router,connection,md5, secretKey);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5, secretKey) {

    /**
     * @api {get} /restaurants Get all restaurant
     * @apiName Get all restaurant
     * @apiGroup Restaurant
     *
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Success",
     *     "Restaurants": [
     *       {
     *         "Id": 1,
     *         "BaseUserId": 18,
     *         "FirstName": "restaurant",
     *         "LastName": "restaurant",
     *         "Email": "restaurant@gmail.com",
     *         "Password": "6d4b62960a6aa2b1fff43a9c1d95f7b2",
     *         "Phone": "0123465789",
     *         "AddressPart1": "12 rue",
     *         "AddressPart2": null,
     *         "Latitude": null,
     *         "Longitude": null,
     *         "IsFoodie": 0,
     *         "IsRestaurant": 0,
     *         "Token": "a token",
     *         "Mark": 4,
     *         "OpenHour": "00:00:00",
     *         "CloseHour": "00:00:00",
     *         "ClosedDate": null
     *         },
     *         .....
     *       ]
     *     }
     *
     * @apiErrorExample Error-Response:
     *   {
     *     "Error" : true,
     *     "Message" : "Error excecuting MySQL query"
     *   }
     *
     */
    router.get("/restaurants", function(req, res, next) {
	var query = "SELECT T1.Id, T1.BaseUserId, T1.FirstName, T1.LastName, T1.Email, T1.Password, T1.Phone, T1.AddressPart1, T1.AddressPart2, T1.Latitude, T1.Longitude, T1.IsFoodie, T1.IsRestaurant, T1.Token, T2.Mark, T1.OpenHour, T1.CloseHour, CONCAT('[', GROUP_CONCAT(CONCAT('{\"DateClosed\":\"', T3.DateClosed, '\", \"DateReOpen\":\"', T3.DateReOpen, '\"}')), ']') AS ClosedDate FROM (SELECT R.Id, R.BaseUserId, BU.FirstName, BU.LastName, BU.Email, BU.Password, BU.Phone, BU.AddressPart1, R.Latitude, R.Longitude, BU.AddressPart2, BU.IsFoodie, BU.IsRestaurant, BU.Token, R.OpenHour, R.CloseHour FROM Restaurant AS R, Base_User AS BU WHERE R.BaseUserId = BU.Id GROUP BY R.Id) AS T1 LEFT JOIN (SELECT R.Id, R.BaseUserId, BU.FirstName, BU.LastName, BU.Email, BU.Password, BU.Phone, BU.AddressPart1, BU.AddressPart2, BU.IsFoodie, BU.IsRestaurant, BU.Token, AVG(C.Mark) as Mark FROM Restaurant AS R, Base_User AS BU, Comment_Restaurant AS C WHERE R.BaseUserId = BU.Id AND R.Id = C.RestaurantId GROUP BY R.Id) AS T2 ON T1.Id = T2.Id LEFT JOIN (SELECT R.Id, R.BaseUserId, BU.FirstName, BU.LastName, BU.Email, BU.Password, BU.Phone, BU.AddressPart1, BU.AddressPart2, BU.IsFoodie, BU.IsRestaurant, BU.Token, R.OpenHour, R.CloseHour, CL.DateClosed, CL.DateReOpen FROM Restaurant AS R, Base_User AS BU, Close_Date AS CL WHERE R.BaseUserId = BU.Id AND CL.RestaurantId = R.Id GROUP BY R.Id) AS T3 ON T1.Id = T3.Id GROUP BY T1.Id";
	query = mysql.format(query, null);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	    }
	    else {
		for (var i = 0; i < rows.length; i++) {
		    if (rows[i].ClosedDate != null)
			rows[i].ClosedDate = JSON.parse(rows[i].ClosedDate);
		}
		res.json({"Error" : false, "Message" : "Success", "Restaurants" : rows});
	    }
	});
    });

    /**
     * @api {get} /restaurants/:id/ Get a restaurant
     * @apiName Get a restaurant
     * @apiGroup Restaurant
     *
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Success",
     *     "Restaurant": [
     *       {
     *         "Id": 2,
     *         "BaseUserId": 20,
     *         "FirstName": "la bonne bouffe",
     *         "LastName": null,
     *         "Email": "resto@resto.com",
     *         "Password": "9c6350b0aa51300d30790de1192fbcf8",
     *         "Phone": "1246985",
     *         "AddressPart1": "12 rue du resto",
     *         "AddressPart2": null,
     *         "IsFoodie": 0,
     *         "IsRestaurant": 0,
     *         "Token": "a token",
     *         "Longitude": null,
     *         "Latitude": null
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
    router.get("/restaurants/:id", function(req, res, next) {
	var query = "SELECT R.Id, R.BaseUserId, BU.FirstName, BU.LastName, BU.Email, BU.Password, BU.Phone, BU.AddressPart1, BU.AddressPart2, BU.IsFoodie, BU.IsRestaurant, BU.Token, R.Longitude, R.Latitude FROM Restaurant as R, Base_User as BU WHERE R.BaseUserId = BU.Id and R.Id = ?";
	var table = [parseInt(req.params.id)];
	query = mysql.format(query, table);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	    }
	    else {
		res.json({"Error" : false, "Message" : "Success", "Restaurant" : rows});
	    }
	});
    });

    router.get("/restaurantsWithData", function(req, res, next) {
	var query = "SELECT T1.Id AS RestaurantId, T1.FirstName AS RestaurantName, CONCAT('[', GROUP_CONCAT(CONCAT('{\"MenuId\":', T2.MenuId, ', \"Name\":\"', T2.Name, '\", \"Description\":\"', T2.Description, '\", \"CommentMenu\":', T2.CommentMenu, '}')), ']') AS Menu, CONCAT('[', GROUP_CONCAT(CONCAT('{\"DishId\":', T3.DishId, ', \"Name\":\"', T3.DishName, '\", \"Description\":\"', T3.DishDescription, '\", \"CommentDish\":', T3.CommentDish, '}')), ']') AS Dish FROM ( SELECT BU.FirstName, R.Id FROM Restaurant AS R, Base_User AS BU WHERE R.BaseUserId = BU.Id) AS T1 LEFT JOIN (SELECT R.Id AS RestaurantId, M.Id AS MenuId, M.Name, M.Description, CONCAT('[', GROUP_CONCAT(CONCAT('{\"Comment\":\"', CM.Comment, '\", \"Mark\":', CM.Mark, '}')), ']') AS CommentMenu FROM Menu AS M, Comment_Menu AS CM, Restaurant AS R WHERE M.Id = CM.MenuId AND R.Id = M.RestaurantId GROUP BY M.Id) AS T2 ON T1.Id = T2.RestaurantId LEFT JOIN (SELECT R.Id AS RestaurantId, D.Id AS DishId, D.Name AS DishName, D.Description AS DishDescription, CONCAT('[', GROUP_CONCAT(concat('{\"Id\":', C.Id, ', \"Comment\":\"', C.Comment, '\", \"Mark\":', C.Mark, '}')), ']') AS CommentDish FROM Link_Dish_Restaurant AS L, comment_dish AS C, Restaurant AS R, Dish as D WHERE C.LDishId = L.Id AND L.RestaurantId = R.Id AND L.DishId = D.Id GROUP BY R.Id) AS T3 ON T1.Id = T3.RestaurantId GROUP BY T1.Id"
	query = mysql.format(query, null);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	    }
	    else {
		for (var i = 0; i < rows.length; i++) {
		    rows[i].Menu = JSON.parse(rows[i].Menu);
		    rows[i].Dish = JSON.parse(rows[i].Dish);
		}
		res.json({"Error" : false, "Message" : "Success", "Restaurants" : rows});
	    }
	});
    });
}

module.exports = REST_ROUTER;
