
/*
 getApi('5t0fghvbcfd0340fvgd')
 	.then((auth)=>getRepos(auth.username))
	.then((repos)=>getCommit(repos[1]))
	.then(commit=>console.log(commit))



function getApi(auth,callback){
// Api is calling 
	console.log("Api calling to external resource");
	return new Promise((resolve,reject)=>{
	setTimeout(()=>{
		console.log(`Api auth is ${auth}`);
		resolve({'username':'shailesh sahu','account no':160032021034});	
		},2000);	
	})
}

function getRepos(username,callback){

//Repo is calling
	console.log("Repos are working");
	return new Promise((resolve,reject)=>{
	setTimeout(()=>{
		console.log("Repos fetching from database");
		if(username)
			resolve(['repo1','repo2','repo3'])
	
		},2000);
	})

}

function getCommit(repo,callback){
	console.log("Getting commit are working");
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			console.log(`fetching commit from`);
			if(repo)
				resolve(new Date());
			else
				reject(new Error('no repositary found'));
		},2000);


	});

}

*/




// const p =new Promise((resolve,reject)=>{

//  resolve({username:"shailesh",age:19});


// })


// let x =new Promise((resolve,reject)=>{

//  resolve({username:"shailesh",age:19});


// })
// x = new Promise((resolve,reject)=>{resolve('d');});
// p.then((data)=>{console.log(data);}).catch(e=>new Error("That came"));
// p.then((data)=>{console.log(data);}).catch(e=>new Error("That came"));
// p.then((data)=>{console.log(data);}).catch(e=>new Error("That came"));
// x.then((data)=>{console.log(data);}).catch(e=>new Error("That came"));




// let p=Promise.resolve([1,2,3,4]);
// p.then(data=>console.log(data));

 // const p2=new Promise((resolve)=>resolve('facebook'));
 // const p1=new Promise((resolve)=>resolve('twitter'));
 // 	const data =Promise.race([p2,p1])
 // 	data.then(data=>console.log(data));

 // 	


async function api()
{
	const apiTwitter=	await twitter();
	console.log(apiTwitter);
}	
api();

function twitter()
{
		return new Promise((resolve,reject)=>{
		setTimeout(()=>{resolve('data')},2000);
		})

}
