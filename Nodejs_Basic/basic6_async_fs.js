const {readFile, writeFile} = require('fs');

console.log('start');

readFile('./first.txt','utf-8',(err,result)=>{
	if(err){
		console.log(err);
		return;
	}
	const first = result;
	
	readFile('./second.txt','utf-8',(err,result)=>{
		if(err){	
			console.log(err);
			return;
		}
		const second = result;

		writeFile('./async_file.txt', `This is async fs Example : ${first}, ${second}`,(err,result)=>{
			if(err){	
				console.log(err);
				return;
			}
			console.log('done');
		});
	});
});
console.log('start next job');

