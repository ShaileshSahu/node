const mongoose = require('mongoose');
//here is the connect is method which return promise
const data =mongoose.connect('mongodb://localhost/test')
			 .then((connect)=>console.log('connected to mongo'))
			 .catch((error)=>console.log(error));

//here is the we define the schema for the and model to insert our data 
// to database
const testSchema = new mongoose.Schema({
	"title":String,
	"author":String,
	"tag":[String],
	"start":Number,
	"published":Boolean,
});

 const Course = mongoose.model('Course',testSchema);
 const course = new Course();

 async function courseFunction(){
 	const queryData =await Course.deleteOne({"start":20});
 	 	console.log(queryData);
 }

 courseFunction();