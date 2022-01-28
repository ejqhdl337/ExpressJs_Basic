const http = require('http')
const {readFileSync} = require('fs')

const homeHtml = readFileSync('./index.html')
const homeCss = readFileSync('./style.css')
const homeJs = readFileSync('./nav-app.js')
const homeLogo = readFileSync('./logo.svg')

//If you have to make server using http module
//It's like this
//you should use 'if statement' each of your request url
//express that made by http module will helpful to make this


const server = http.createServer((req,res)=>{
	if(req.url === '/'){
		res.writeHead(200,{'content-type':'text/html'})
		res.write(homeHtml)
		res.end()
	}
	if(req.url === '/style.css'){
		res.writeHead(200,{'content-type':'text/css'})
		res.write(homeCss)
		res.end()
	}
	if(req.url === '/nav-app.js'){
		res.writeHead(200,{'content-type':'text/javascript'})
		res.write(homeJs)
		res.end()
	}
	if(req.url === '/logo.svg'){
		res.writeHead(200,{'content-type':'Image/svg-img'})
		res.write(homeLogo)
		res.end()
	}
})

server.listen(3000)
