// // Synchronous example
// console.log("before");
// console.log("after");

// Asynchronous example
// console.log("async is working");
// console.log("before");
// const data =getUser(20);
// console.log(data);
// console.log("after");



function getUser(id)
{
	setTimeout(()=>{
		console.log("asynchronous calling")
		return id;	
	},2000);
	
}
// that means we are not getting data when it's intiated so we need to work
// on simple concept callback

 // getApi('5t0fghvbcfd0340fvgd',(auth)=>{
 // 	console.log(`This is api called ${auth.username}`);
 // 	getRepos(auth.username,(repos)=>{
 // 		console.log("Here is my simple repos working");
 // 		console.log(repos);
 // 		getCommit(repos[1],(commit)=>{
 // 			console.log("Date "+commit);
 // 		})
 // 	})
 // });




 // function getApi(auth,callback)
 // {
 // 	// Api is calling 
	// console.log("Api calling to external resource");
	// setTimeout(()=>{console.log(`Api auth is ${auth}`);
	// callback({'username':'shailesh sahu','account no':160032021034});	
	// },2000);
 // }

 // function getRepos(username,callback){

 // 	//Repo is calling
 // 	console.log("Repos are working");
 // 	setTimeout(()=>{
 // 		console.log("Repos fetching from database");
 // 		if(username)
 // 			callback(['repo1','repo2','repo3'])
 // 		else
 // 			callback('error');

 // 	})
 // }

 // function getCommit(repo,callback){
 // 	console.log("Getting commit are working");
 // 	setTimeout(()=>{console.log(`fetching commit from`);
 // 		callback(new Date());
 // 	},2000);
 // }

 // But that coding has callback hell means it's difficult to read and understand to
 // make it simple we need some sort of technique and naming structure make it simple explanation
 // format



getApi('5t0fghvbcfd0340fvgd',auth);

function auth(auth){
	console.log(`This is api called ${auth.username}`);
	getRepos(auth.username,repo);
}


const repo = function(repos){
	console.log("Here is my simple repos working");
	console.log(repos);
	getCommit(repos[1],commit)
};


const commit = function(commit){
	console.log("Here is the latest commit in my code");
	console.log("Date"+commit);
};



function getApi(auth,callback){
// Api is calling 
	console.log("Api calling to external resource");
	setTimeout(()=>{
		console.log(`Api auth is ${auth}`);
		callback({'username':'shailesh sahu','account no':160032021034});	
	},2000);
}

function getRepos(username,callback){
//Repo is calling
	console.log("Repos are working");
	setTimeout(()=>{
		console.log("Repos fetching from database");
		if(username)
			callback(['repo1','repo2','repo3'])
		else
			callback('error');
	},2000)
}

function getCommit(repo,callback){
	console.log("Getting commit are working");
	setTimeout(()=>{
		console.log(`fetching commit from`);
		callback(new Date());
	},2000);
}

