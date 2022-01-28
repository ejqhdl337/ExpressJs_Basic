const http = require('http');

const server = http.createServer()

server.on('request',(req,res)=>{
	if(req.url === '/'){
		res.end(`<h1>Welcome to our homepage</h1>
		<br>
		<a href='/about'>About</a>
		<a href='/ERROR'>Error</a>`);
	}else if(req.url === '/about'){
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
