var mysql = require("mysql");
var nJwt = require('njwt');
var utils = require("../utils/utils.js");

function REST_ROUTER(router,connection,md5, secretKey) {
    var self = this;
    self.handleRoutes(router,connection,md5, secretKey);
}

REST_ROUTER.prototype.handleRoutes= function(router,connection,md5, secretKey) {

    router.get("/restaurants/:id/menus/:idmenu/comments", function(req, res, next){
	var query = "SELECT C.Comment, C.Mark, BU.FirstName AS Name FROM Comment_Menu AS C, Foodie AS F, Base_User AS BU WHERE C.FoodieId = F.Id AND F.BaseUserId = BU.Id AND MenuId = ?";
	var table = [parseInt(req.params.idmenu)];
	query = mysql.format(query, table);
	connection.query(query, function(err, rows){
	    if (err) {
		res.json({"Error" : true, "Message" : "Error executing MySQL query"});
	    } else {
		res.json({"Error" : false, "Message" : "Success", "Comment_menu" : rows});
	    }
	});
    });
    
    router.post("/restaurants/:id/menus/:idmenu/comments", function(req, res, next) {
	utils.getToken(connection, req.body.baseUserId, function(response){
	    if (response === req.body._token) {
		nJwt.verify(response, secretKey, function(err, token) {
		    if (err) {
			res.json({"Error": true, "Message" : "Your token is invalid"});
		    } else {
			var query = "INSERT INTO Comment_Menu(MenuId, FoodieId, Comment, Mark, CreationDate) VALUES (?, ?, ?, ?, CURRENT_DATE());"
			var tables = [
			    parseInt(req.params.idmenu),
			    parseInt(req.body.foodieId),
			    req.body.comment,
			    parseInt(req.body.mark)
			];
			query = mysql.format(query, tables);
			connection.query(query, function(err, rows) {
			    if (err) {
				res.json({"Error" : true, "Message" : "Error executing MySQL query"});
			    } else {
				res.json({"Error" : false, "Message" : "Commentaire added"});
			    }
			});
		    }
		});
	    } else {
		res.json({"Error" : true, "Message" : "Your Token is invalid."});
	    }
	});
    });
    
    router.delete("/restaurants/:id/menus/:idmenu/comments/:idcomment", function(req, res, next) {
	utils.getToken(connection, req.body.baseUserId, function(response) {
	    if (response == req.query._token) {
		res.json({"Error": true, "Message" : "Your token is invalid"});
	    } else {
		var query = "DELETE FROM Comment_Menu WHERE Id = ?";
		var table = [parseInt(req.params.idcomment)];
		query = mysql.format(query, table);
		connection.query(query, function(err, rows){
		    if (err) {
			res.json({"Error" : true, "Message" : "Error executing MySQL query"});
		    } else {
			res.json({"Error" : false, "Message" : "Commentaire deleted"});
		    }
		})
	    }
	});
    })
}

module.exports = REST_ROUTER;
