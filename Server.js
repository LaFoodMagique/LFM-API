var express = require("express");
var cors = require("cors");
var mysql   = require("mysql");
var bodyParser  = require("body-parser");
var md5 = require('MD5');
var app  = express();
app.use(cors());

var user = require("./controllers/user.js");
var restaurant = require("./controllers/restaurant.js");
var foodie = require("./controllers/foodie.js");
var comment_restaurant = require("./controllers/comment_restaurant.js");
var dish_restaurant = require("./controllers/dish.js");

var uuid = require('node-uuid');
var secretKey = uuid.v4();

function REST(){
    var self = this;
    self.connectMysql();
};


REST.prototype.connectMysql = function() {
    var self = this;
    var pool      =    mysql.createPool({
        connectionLimit : 100,
        host     : 'localhost',
        user     : 'root',
        password : 'toto1705//',
        database : 'spt2',
        debug    :  false
    });

    pool.getConnection(function(err,connection){
        if(err) {
            self.stop(err);
        } else {
            self.configureExpress(connection);
        }
    });
}


REST.prototype.configureExpress = function(connection) {
    var self = this;
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    var router = express.Router();
    app.use('/api', router);
    var user_router = new user(router,connection,md5, secretKey);
    var restaurant_router = new restaurant(router, connection, md5, secretKey);
    var foodie_router = new foodie(router, connection, md5, secretKey);
    var comment_restaurant_router = new comment_restaurant(router, connection, md5, secretKey);
    var dish_restaurant_router = new dish_restaurant(router, connection, md5, secretKey);
    self.startServer();
}

REST.prototype.startServer = function() {
    
    app.listen(3000,function(){
        console.log("All right ! I am alive at Port 3000.");
    });
}

REST.prototype.stop = function(err) {
    console.log("ISSUE WITH MYSQL n" + err);
    process.exit(1);
}

new REST();
