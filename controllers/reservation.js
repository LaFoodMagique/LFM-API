var mysql = require("mysql");
var nJwt = require('njwt');
var utils = require("../utils/utils.js");

function REST_ROUTER(router,connection,md5, secretKey) {
    var self = this;
    self.handleRoutes(router,connection,md5, secretKey);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5, secretKey) {


    /**
     * @api {get} /restaurants/:id/reservations Get reservation for a restaurant
     * @apiName Get reservation for a restaurant
     * @apiGroup Restaurant
     *
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Success",
     *     "reservations" : [
     *        {
     *          "Id": 1,
     *          "FoodieId": 8,
     *          "RestaurantId": 2,
     *          "Date": "2016-05-10T08:00:00.000Z",
     *          "Hour": "13:30:00",
     *          "NbPerson": 2,
     *          "Comment": "à proximité de la fenêtre"
     *        },
     *        ....
     *      ]
     *    }
     *
     * @apiErrorExample Error-Response:
     *   {
     *     "Error" : true,
     *     "Message" : "Error excecuting MySQL query"
     *   }
     *
     */
    router.get("/restaurant/:id/reservations", function(req, res, next){
	var query = "SELECT R.Id, R.Comment, R.Date, R.Hour, R.NbPerson, BU.FirstName, BU.LastName, BU.Email, BU.Phone FROM Reservation AS R, Foodie AS F, Base_User AS BU WHERE R.FoodieId = F.Id AND F.BaseUserId = BU.Id AND R.RestaurantId = ?";
	var table = [parseInt(req.params.id)];
	query = mysql.format(query, table);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	    } else {
		res.json({"Error" : false, "Message" : "Success", "reservations" : rows});
	    }
	});
    });

    /**
     * @api {get} /foodie/:id/reservations Get reservation for a foodie
     * @apiName Get reservation for a foodie
     * @apiGroup Foodie
     *
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Success",
     *     "reservations" : [
     *        {
     *          "Id": 1,
     *          "FoodieId": 8,
     *          "RestaurantId": 2,
     *          "Date": "2016-05-10T08:00:00.000Z",
     *          "Hour": "13:30:00",
     *          "NbPerson": 2,
     *          "Comment": "à proximité de la fenêtre"
     *        },
     *        ....
     *      ]
     *    }
     *
     * @apiErrorExample Error-Response:
     *   {
     *     "Error" : true,
     *     "Message" : "Error excecuting MySQL query"
     *   }
     *
     */
    router.get("/foodie/:id/reservations", function(req, res, next) {
	var query = "SELECT * FROM Reservation WHERE FoodieId = ? ORDER BY Id DESC";
	var table = [parseInt(req.params.id)];
	query = mysql.format(query, table);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	    }
	    else {
		res.json({"Error" : false, "Message" : "Success", "reservations" : rows});
	    }
	});
    });
    
    /**
     * @api {post} /foodies/:id/restaurants/:restoId/reservations post a reservation
     * @apiName post a reservation
     * @apiGroup Foodie
     *
     * @apiParams {Int} baseUserId baseUserId provide by the API. 
     * @apiParams {String} _token Token provide by the API.
     * @apiParams {Date} date Date of the reservation.
     * @apiParams {Hour} hour Hour of the réservation ("10:05").
     * @apiParams {Int} nbPerson Number of person.
     * @apiParams {String} comment Comment for the reservation.
     *
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Reservation added"
     *   }
     *
     * @apiErrorExample Error-Response:
     *   {
     *     "Error" : true,
     *     "Message" : "Error excecuting MySQL query"
     *   }
     *
     */
    router.post("/foodies/:id/restaurants/:restoId/reservations", function(req, res, next){
	utils.getToken(connection, req.body.baseUserId, function(response){
            if (response === req.body._token) {
                nJwt.verify(response, secretKey, function(err, token) {
                    if (err) {
                        res.json({"Error": true, "Message" : "Your token is invalid"});
                    } else {
			var query = "INSERT INTO Reservation (FoodieId, RestaurantId, Date, Hour, NbPerson, Comment) VALUES (?, ?, ?, ?, ?, ?)";
			var table = [parseInt(req.params.id),
				     parseInt(req.params.restoId),
				     req.body.date,
				     req.body.hour,
				     req.body.nbPerson,
				     req.body.comment];
			query = mysql.format(query, table);
			connection.query(query, function(err, rows) {
			    if (err) {
				res.json({"Error" : true, "Message" : "Error executing MySQL query"});
			    }
			    else {
				res.json({"Error" : false, "Message" : "Reservation added"});
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

    router.delete("/foodies/:id/reservations/:reservationId", function (req, res, next) {
        utils.getToken(connection, req.query.baseUserId, function(response) {
            if (response === req.query._token) {
                var query = "DELETE FROM Reservation Where Id = ?";
                var table = [parseInt(req.params.reservationId)];
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
