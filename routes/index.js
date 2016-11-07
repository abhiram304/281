
/*
 * GET home page.
 */
var mysql = require('./mysql');

exports.index = function(req, res){
	var lat=req.body.Lat;
	var lng=req.body.Lng;
	/*var queryStr = "INSERT INTO User VALUES('" + detailsP.UserId + "', '"
	+ detailsP.UserName + "', '" + detailsP.Password + "', '"
	+ shortid.generate() + "', '" + detailsP.PrimaryTenant + "', '"
	+ detailsP.Age + "', '" + detailsP.Gender + "', '"
	+ Number(detailsP.Contact) + "', '" + Number(detailsP.Emergencyc)
	+ "')";
	mysql.fetchData(function(err, results) {
		if (err) {
			console.log("Error in db connection: "+err);
			throw err;
		} else {
			res.render('home', { title: lat });
			res.send({dataSaved: true});
		}
	}, queryStr);*/
	console.log("The api is hit: "+lat);
	res.render('home', { title: lat });
};