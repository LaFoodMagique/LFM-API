var mysql = require("mysql");
var nJwt = require('njwt');
var utils = require("../utils/utils.js");

function REST_ROUTER(router,connection,md5, secretKey) {
    var self = this;
    self.handleRoutes(router,connection,md5, secretKey);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5, secretKey) {

    /**
     * @api {get} /foodies/:id/messages Get all messages for a Foodie
     * @apiName Get all messages for a Foodie
     * @apiGroup Foodie
     *
     * @apiParams {String} foodieId In url (like ?foodieId=...
     * 
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Success",
     *     "Messages" : [
     *       {
     *         "Id": 3,
     *         "SenderId": 8,
     *         "ReceiverId": 7,
     *         "SenderFirstName": "foodie",
     *         "SenderLastName": "foodie",
     *         "Message": "test by postman",
     *         "Creation": "2016-05-10T07:56:08.000Z",
     *         "ReceiverFirstName": "quentin",
     *         "ReceiverLastName": "journet"
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
    router.get("/foodies/:id/messages", function(req, res, next) {
	var query = "SELECT T1.Id, T1.SenderId, T2.ReceiverId, T1.FirstName AS SenderFirstName, T1.LastName AS SenderLastName, T1.Message, T1.Creation, T2.FirstName AS ReceiverFirstName, T2.LastName AS ReceiverLastName FROM (SELECT M.Id, M.Message, M.Creation, F.Id AS SenderId, BU.FirstName, BU.LastName FROM Message AS M, Foodie AS F, Base_User AS BU WHERE M.SenderId = F.Id AND F.BaseUserId = BU.Id) AS T1 LEFT JOIN (SELECT M.Id, F.Id AS ReceiverId, BU.FirstName, BU.LastName FROM Message AS M, Foodie AS F, Base_User AS BU WHERE M.ReceiverId = F.Id AND F.BaseUserId = BU.Id) AS T2 ON T1.Id = T2.Id WHERE (T1.SenderId = ?) OR (T1.SenderId = ?) ORDER BY T1.Creation DESC;";
	var table = [parseInt(req.params.id),
		     parseInt(req.query.foodieId)];
	query = mysql.format(query, table);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	    }
	    else {
		res.json({"Error" : false, "Message" : "Success", "Messages" : rows});
	    }
	});
    });

    /**
     * @api {post} /foodies/:id/messages post a message
     * @apiName post a message
     * @apiGroup Foodie
     *
     * @apiParams {Int} baseUserId baseUserId provide by the API. 
     * @apiParams {String} _token Token provide by the API.
     * @apiParams {Int} foodieId Id of the receiver.
     * @apiParams {String} message Message send.
     *
     * @apiSuccessExample Success-Response:
     *   {
     *     "Error" : false,
     *     "Message" : "Your message is send."
     *   }
     *
     * @apiErrorExample Error-Response:
     *   {
     *     "Error" : true,
     *     "Message" : "Error excecuting MySQL query"
     *   }
     *
     */
    router.post("/foodies/:id/messages", function(req, res, next) {
	var query = "INSERT INTO Message (SenderId, ReceiverId, Message, Creation) VALUES (?, ?, ?, CURRENT_TIMESTAMP);";
	var table = [parseInt(req.params.id),
		     parseInt(req.body.foodieId),
		     req.body.message];
	query = mysql.format(query, table);
	connection.query(query, function(err, rows) {
	    if (err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	    }
	    else {
		res.json({"Error" : false, "Message" : "Your message is send."});
	    }
	});
    });
    
}

module.exports = REST_ROUTER;
