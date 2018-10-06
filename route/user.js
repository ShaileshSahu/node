const express=require('express');
const router = express.Router();

router.get('/',(req,res)=>{res.send("Hi World");})
router.get('/api',(req,res)=>{

	res.render('index',{title:'shailesh sahu',message:'world comes here'});
})

//Query and params basic concept
router.get('/course/:id',(req,res)=>{
	console.log(req.query.sd);
	res.send(req.params.id);
}) 


router.get('/name/:id',(req,res)=>{
	
	// console.log(c.id)
	console.log(req.params.id);
	let data=courses.find((c)=>{return c.id==req.params.id})
	console.log(data);

		// res.download('./public/daniel.pdf');
		res.status(301).redirect('https://www.google.com');
}) 


router.post('/name',(req,res)=>{
	

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

router.put('/name/:id',(req,res)=>{
	
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


router.delete('/name/:id',(req,res)=>{
	
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


module.exports = router;