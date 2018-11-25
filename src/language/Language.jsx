//基础模块
import React from 'react';

//多语言
import { IntlProvider, addLocaleData } from 'react-intl';

//时间格式，数字格式等。
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';

//本地语言
import * as languages from './locale';

addLocaleData([ ...en, ...zh ]);

const chooseLocale = () => {
  const localeLanguage = navigator.language.split('-')[0];
  let language = {};
  try {
    language = languages[ localeLanguage ].locale;
  } catch (e) {
    console.error('[ Language Error ]: not found locale language');
    language = {};
  };
  
  return language;
};



const Language = ({ children }) => (
  <IntlProvider
    locale={ navigator.language }
    messages={ chooseLocale() }
  >
    { children }
  </IntlProvider>
);

export default Language;