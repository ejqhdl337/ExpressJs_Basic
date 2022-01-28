const express = require('express')
const app = express()

//express send resourse that dont need to change by server;like login
//static means express dump all in public folder
app.use(express.static('./public'))

app.all('*',(req,res)=>{
	res.status(404).send('<h1>Page Not found</h1>')
})

app.listen(3000,()=>{
	console.log("Server is lisening on port 3000...")
})
