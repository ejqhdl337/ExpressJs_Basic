const express = require('express')

const users = require('./routes/users_mongo')

const app = express()

const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/userdb",()=>{
	console.log("mongodb connected")
},(error)=>{
	console.log(`mongodb connect error : ${error}`)
})


app.use(express.static('./public'))

app.use(express.urlencoded({extended:false}))

app.use(express.json())

app.use('/users',users)


app.listen(3000,()=>{console.log('Server is listening in port 3000...')})
