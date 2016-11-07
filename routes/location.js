
var mysql = require('./mysql');
exports.index1 = function(req, res){
	var lat=req.body.Lat;
	var lng=req.body.Lng;
	var queryStr = "INSERT INTO Location VALUES('"+lat+"', '"+lng+"')";
	mysql.fetchData(function(err, results) {
		if (err) {
			console.log("Error in db connection: "+err);
			throw err;
		} else {
			console.log("savedd: "+lat);
			res.render('index', { title: lat });
			res.send({dataSaved: true});
		}
	}, queryStr);
	
	//res.render('home', { title: lat });
};