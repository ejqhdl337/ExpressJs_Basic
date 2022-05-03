
// To contact additional information about Status, mime type
// Refference URL
//https://developer.mozilla.org/ko/docs/Web/HTTP/Status
//https://developer.mozilla.org/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types

const http = require('http')

const server = http.createServer((req,res)=>{
	res.writeHead(200,{'content-type':'text/plain'})
	res.write('<h1>home page</h1>')
	res.end()
})

server.listen(3000);
