'use strict';

const exec = require('child_process').exec;

//端口号
process.env.PORT = '2000';

console.log('启动成功...');
console.log('端口号为:' + process.env.PORT);

//执行
exec('react-app-rewired start');