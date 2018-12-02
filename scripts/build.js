'use strict';

const exec = require('child_process').exec;


//sourceMap
if (process.env.NODE_ENV === 'production') {
  process.env.GENERATE_SOURCEMAP = 'false';
}

//打包启用测试环境地址
if (process.argv[2]) {
  process.env.ADDRESS_ENV = 'test';
}

//执行
exec('react-app-rewired build');