// 基础模块
import React from 'react';

// 多语言组件
import Language, { getPackage } from '@/components/Language';

// 自动引入语言包
const languageFiles = require.context('./', true, /^\.\/.*\/index\.js$/);
const languages = {};

languageFiles.keys().forEach(filePath => {
  const filePackage = languageFiles(filePath).default;

  languages[filePackage.language] = filePackage;
});

// 获取语言后返回的匹配的语言包
const languagePackage = getPackage(languages);

export default function ({ children }) {
  return (
    <Language
      locale={ languagePackage.language }
      messages={ languagePackage.messages }
    >
      { children }
    </Language>
  );
}

export { languages };