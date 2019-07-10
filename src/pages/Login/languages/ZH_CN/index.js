// 自动化引入文件
const files = require.context('.', false, /\.json$/);

let messages = {};

files.keys().forEach(key => {
  if (key === './index.js') return;
  messages = { ...messages, ...files(key) };
});


export default {
  name: '简体中文',
  language: 'zh-CN',
  fileName: 'ZH_CN',
  messages,
};