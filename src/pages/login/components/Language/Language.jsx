// 基础模块
import React from 'react';

// 多语言
import { IntlProvider, addLocaleData } from 'react-intl';

// 时间格式，数字格式等。
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';

addLocaleData([ ...en, ...zh ]);


const Language = ({ children, ...restProps }) => (
  <IntlProvider { ...restProps }>
    { children }
  </IntlProvider>
);

export default Language;