const {createReadStream} = require('fs')

const stream = createReadStream('./big_File.txt','utf8')

stream.on('data',(result)=>{
	console.log(result)
})

stream.on('error',(err)=>{
	console.log(err)
})



//const {writeFileSync} = require('fs')
//
//for(let i=1;i<10000;i++){
//	writeFileSync('./big_File.txt',`hello World ${i}\n`,{flag:'a'})
//}
