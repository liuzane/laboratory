// const exec = require('child_process').exec;


//sourceMap
process.env.GENERATE_SOURCEMAP = 'false';

//打包启用测试环境地址
if (process.argv[2]) {
  process.env.ADDRESS_ENV = 'test';
}
process.env.ADDRESS_ENV = 'test';
console.log(process.env.GENERATE_SOURCEMAP);
//执行
// exec('react-app-rewired build');