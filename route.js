const startupDebugger = require('debug')('app:startup');
const dbDebugger = require('debug')('app:mongo');
const morgan = require('morgan');
const config = require('config');
const express = require('express');
const app = express();
const Joi = require('joi');
const logger = require('./logging');
const user = require('./route/user');
app.use(express.json());
app.use((req,res,next)=>{console.log("Hi");next()});
app.use(logger);
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine','pug');
app.set('views','./views');

if(app.get('env')==='development'){
	app.use(morgan('tiny'));
	startupDebugger('hello world');	
}
app.use('/',user);
dbDebugger('hey world');
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
console.log(app.get('env'));
console.log(config);

const port = process.env.PORT||3000; 
app.listen(port,()=>console.log("I am connecting throgh it"+port));