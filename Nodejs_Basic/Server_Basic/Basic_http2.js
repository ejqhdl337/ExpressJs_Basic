const http = require('http');

const server = http.createServer((req,res)=>{
	if(req.url === '/'){
		res.end('Welcome to our homepage');
	}else if(req.url === '/about'){
		//This is Blocking Code
	  for(i=0;i<10;i++){
			for(j=0;j<1000;j++){
				console.log(`${i} ${j}`)
			}
		}
		//User get  response when this process is end
		res.end('This is page about us');
	}else{
		res.end(`
			<h1>Oops!</h1>
			<p>The page is not exist</p>
			<a href='/'>Go Home</a>
		`);
	}
});


server.listen(3000);
