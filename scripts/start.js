'use strict';

const exec = require('child_process').exec;

//端口号
process.env.PORT = '2000';

//执行
exec('react-app-rewired start');