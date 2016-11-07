
/*
 * GET home page.
 */

exports.index = function(req, res){
	var lat=req.param("Lat");
	var lng=req.param("Lng");
	console.log("The api is hit: "+lat);
	res.render('index', { title: lat });
};