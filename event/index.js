var Logger =require('./logger');
 

 const log = new Logger();
 log.on('logged',(arg)=>{console.log(`your data ${arg.name} \nyear is ${arg.year}`);});
 log.logger();






