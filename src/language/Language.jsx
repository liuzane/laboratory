// 基础模块
import React from 'react';
import { dispatch } from "@/store";

// 方法
import { getStorage, setStorage } from '@/utils/local-storage';

// 多语言
import { IntlProvider, addLocaleData } from 'react-intl';

// 时间格式，数字格式等。
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';

// 本地语言
import * as languages from './locale';

addLocaleData([ ...en, ...zh ]);

// 获取本地存储语言，没有默认浏览器语言,格式xx-XX
let localeLanguage = '';

try {
  localeLanguage = getStorage('language');
} catch (e) {
  localeLanguage = navigator.language;
}

if (!localeLanguage) localeLanguage = navigator.language;

// 设置格式为xx_XX
if (typeof localeLanguage === 'string') localeLanguage = localeLanguage.replace('-', '_');

// 更新 redux 语言数据源
if (localeLanguage) {
  setStorage('language', localeLanguage);
  dispatch.user.update_user({ language: localeLanguage });
}

// 根据语言类型选择本地语言包
const chooseLocale = language => {
  let languagePackage = {};
  
  try {
    languagePackage = languages[ language ].locale;
  } catch (e) {
    console.error('[ Language Error ]: not found locale language package');
    languagePackage = languages.en_US.locale;
  }
  
  return languagePackage;
};

const Language = ({ children }) => (
  <IntlProvider
    locale={ localeLanguage.replace('_', '-') }
    messages={ chooseLocale(localeLanguage) }
  >
    { children }
  </IntlProvider>
);

export default Language;