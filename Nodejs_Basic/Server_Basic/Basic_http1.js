const http = require('http');

const server = http.createServer((req,res)=>{
	if(req.url === '/'){
		res.end('Welcome to our homepage');
	}else if(req.url === '/about'){
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
