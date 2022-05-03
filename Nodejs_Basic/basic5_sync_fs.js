const {readFileSync, writeFileSync} = require('fs');

console.log('start');

const first = readFileSync('./first.txt','utf-8');
const second = readFileSync('./second.txt','utf-8');

writeFileSync('./sync_file.txt', `This is sync fs Example : ${first}, ${second}`);

console.log('done');
console.log('start next job');
