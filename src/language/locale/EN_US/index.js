// 自动化引入文件
const files = require.context('.', false, /\.json$/);

let locale = {};

files.keys().forEach(key => {
  if (key === './index.js') return;
  locale = { ...locale, ...files(key) };
});


export const en_US = {
  name: 'English',
  language: 'en-US',
  fullName: 'en_US',
  fileName: 'EN_US',
  locale,
};