
/*
 * GET home page.
 */

exports.index = function(req, res){
	var lat=req.body.Lat;
	var lng=req.body.Lng;
	console.log("The api is hit: "+lat);
	res.render('index', { title: 'Express' });
};