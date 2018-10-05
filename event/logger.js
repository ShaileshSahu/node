const EventEmitter = require('events');

class Logger extends EventEmitter
{

	logger(message){
	console.log("You have signed in our application");    
	// Object person =;
	this.emit('logged',{ 'name':"Shailesh",'year':22});
	}

}
module.exports = Logger;