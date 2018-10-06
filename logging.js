function logger(req,res,next){

	console.log("Starting to log into module");
	next();
}

module.exports = logger;