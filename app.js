const express = require('express')

const users = require('./routes/users')

const app = express()


app.use(express.static('./public'))

app.use(express.urlencoded({extended:false}))

app.use(express.json())

app.use('/users',users)


app.listen(3000,()=>{console.log('Server is listening in port 3000...')})
