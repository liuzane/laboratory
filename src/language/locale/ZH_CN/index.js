// 自动化引入文件
const files = require.context('.', false, /\.json$/);

let locale = {};

files.keys().forEach(key => {
  if (key === './index.js') return;
  locale = { ...locale, ...files(key) };
});


export const zh_CN = {
  name: '简体中文',
  language: 'zh-CN',
  fullName: 'zh_CN',
  fileName: 'ZH_CN',
  locale,
};