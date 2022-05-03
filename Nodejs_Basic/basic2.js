const {john, peter} = require('./basic2_module');
const sayHi = require('./basic2_utils');
const data = require('./basic3');
require('./basic4');

console.log(data);

console.log(__dirname);

sayHi('susan');
sayHi(john);
sayHi(peter);
