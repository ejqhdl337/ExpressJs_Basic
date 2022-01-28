// Sync Function 
//const {readFileSync, writeFileSync} = require('fs');
//
//const first = readFileSync('./first.txt','utf8');
//const second = readFileSync('./second.txt','utf8');
//
//writeFileSync('./promise.txt',`${first}\r\n ${second}`)
//
//
//// Async Function using Promise
//const {readFile,writeFile} = require('fs')
//const getText = (path) =>{
//	return new Promise((resolve,reject)=>{
//		readFile(path,'utf8',(err,result)=>{
//			if(err){
//				reject(err)
//			}
//			resolve(result)
//		})
//	})
//}
//
//getText('./first.txt').then((result)=>{
//	getText('./second.txt').then((result2)=>{
//		writeFile('./promise.txt',`${result}\r\n${result2}`,(err)=>{
//			if(err){
//				console.log(err)
//			}
//		})
//	})
//}).catch(console.log)

const {readFile,writeFile} = require('fs').promises

const start = async () => {
	try{
		const first = await readFile('./first.txt','utf8')
		console.log(first)
	}catch(error){
		console.log(error)
	}
}
start()

readFile('./first.txt').then((result)=>{
	readFile('./second.txt').then((result2)=>{
		writeFile('./promise.txt',`${result}\r\n${result2}`)
	})
}).catch(console.log)
