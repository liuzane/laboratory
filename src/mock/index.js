// 读取目录下所有js文件
const MockFiles = require.context('./', true, /^\.\/((?!moban|666|abc).)*\/index\.js$/);

MockFiles.keys().forEach(file => {
  MockFiles(file);
});