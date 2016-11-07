
/*
 * GET home page.
 */
var mysql = require('./mysql');

exports.index = function(req, res){
	var lat=req.body.Lat;
	var lng=req.body.Lng;
	var queryStr = "INSERT INTO Location VALUES('"+lat+"', '"+lng+"')";
	mysql.fetchData(function(err, results) {
		if (err) {
			console.log("Error in db connection: "+err);
			throw err;
		} else {
			res.render('home', { title: lat });
			res.send({dataSaved: true});
		}
	}, queryStr);
	console.log("The api is hit: "+lat);
	//res.render('home', { title: lat });
};