//基础模块
import React from 'react';
import { dispatch } from "@/store";

//方法
import { getStorage } from '@/utils/local-storage';

//多语言
import { IntlProvider, addLocaleData } from 'react-intl';

//时间格式，数字格式等。
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';

//本地语言
import * as languages from './locale';

addLocaleData([ ...en, ...zh ]);

//获取本地存储语言，没有默认浏览器语言
let localeLanguage = '';

try {
  localeLanguage = getStorage('userInfo').language;
} catch (e) {
  localeLanguage = navigator.language;
}

if (!localeLanguage) localeLanguage = navigator.language;

//更新 redux 语言数据源
if (localeLanguage) {
  dispatch.user.update_user({ language: localeLanguage });
}

//根据语言类型选择本地语言包
const chooseLocale = language => {
  let languagePackage = {};

  try {
    languagePackage = languages[ language ].locale;
  } catch (e) {
    console.error('[ Language Error ]: not found locale language package');
    console.log(languages.en_US.locale, 44);
    languagePackage = languages.en_US.locale;
  }
  
  return languagePackage;
};

console.log(navigator.language, chooseLocale(localeLanguage), 51);
const Language = ({ children }) => (
  <IntlProvider
    locale={ navigator.language }
    messages={ chooseLocale(localeLanguage) }
  >
    { children }
  </IntlProvider>
);

export default Language;