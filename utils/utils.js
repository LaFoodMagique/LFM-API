var mysql = require("mysql");

exports.toString = function(string) {
    string = string.replace(/"/g, "\\\"");
    string = "\"" + string + "\"";
    return string;
}

var getToken = function(connection, id, callback) {
    var query = "SELECT Token FROM Base_User WHERE Id = " + parseInt(id);
    query = mysql.format(query, null);
    connection.query(query, function(err, rows) {
        if (err) {
            return callback(null);
        }
        else {
            return callback(rows[0].Token);
        }	
    });
}



exports.getToken = getToken;
