// const path =require('path');
// console.log(path.parse(__filename).ext);

/*
const os = require('os');
console.log(os.cpus()[0].model);*/

const fs = require('fs');
console.log(fs.readdirSync('./'));


console.log('d');
fs.readdir('./',(e,f)=>console.log(f));
//calllback this is the part of the system 