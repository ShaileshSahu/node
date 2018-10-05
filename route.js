const express = require('express');
const app = express();
const Joi = require('joi');

app.use(express.json());
let courses =[
	{name:"shailesh sahu",
	id:3},
	{name:"Naveen Rana",
	id:1},
	{name:"Nitin Saha",
	id:32},
	{name:"Ritika Pandit",
	id:2},
	{name:"Dsdv",
	id:8},
];
app.get('/',(req,res)=>{res.send("Hi World");})
app.get('/api',(req,res)=>{
	res.send('Api world works fine for me');
})

//Query and params basic concept
app.get('/course/:id',(req,res)=>{
	console.log(req.query.sd);
	res.send(req.params.id);
}) 


app.get('/name/:id',(req,res)=>{
	
	// console.log(c.id)
	console.log(req.params.id);
	let data=courses.find((c)=>{return c.id==req.params.id})
	console.log(data);
	if(data || data!=undefined)
		res.status(200).send(data);
	else
		res.status(404).send("Error");
}) 


app.post('/name',(req,res)=>{
	

	const result = validate(req);
	console.log(result);
	if(result.error)
	{
		res.status(400).send(result.error.details[0].message);
		return;
	}

	courses.push(req.body);
	res.send(courses).status(200);

})

app.put('/name/:id',(req,res)=>{
	
	console.log(req.body);
	const result = validate(req);
	if(result.error)
	{
		res.status(400).send(result.error.details[0].message);
		return;
	}

	    let index=  courses.findIndex((c)=>{return c.id==req.params.id});
		courses[index]=req.body;
		res.send(courses).status(200);

})


app.delete('/name/:id',(req,res)=>{
	
	console.log(req.body);


	    let index=  courses.findIndex((c)=>{return c.id==req.params.id});
		courses.splice(index,1);
		res.send(courses).status(200);

})
function validate(req)
{
	const schema = {

		name: Joi.string().min(3).required(),
		id: Joi.number().min(7).required()
		};
	
	return  Joi.validate(req.body,schema);
}



const port = process.env.PORT||3000; 
app.listen(port,()=>console.log("I am connecting throgh it"+port));