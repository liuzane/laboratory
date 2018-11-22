//基础模块
import React, { Component } from 'react';
import { connect } from 'react-redux';

//多语言
import { IntlProvider, addLocaleData } from 'react-intl';

//时间格式，数字格式等。
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';

//本地语言
import EN_US from './locale/EN_US';
import ZH_CN from './locale/ZH_CN';

addLocaleData([ ...en, ...zh ]);

const chooseLocale = () => {
  switch(navigator.language.split('-')[0]){
    case 'en':
      return EN_US;
    case 'zh':
      return ZH_CN;
    default:
      return EN_US;
  };
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