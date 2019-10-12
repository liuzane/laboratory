// 基础模块
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// 路由模块
import { withRouter } from 'react-router-dom';

// 多语言组件
import Language from '@/components/Language';

// 自动引入语言包
const languageFiles = require.context('./', true, /^\.\/.*\/index\.js$/);
const languages = {};

languageFiles.keys().forEach(filePath => {
  const filePackage = languageFiles(filePath).default;

  languages[filePackage.language] = filePackage;
});

// 获取语言后返回的匹配的语言包
// const languagePackage = getPackage(languages);

class Languages extends PureComponent {
  static propTypes = {
    history: PropTypes.object,
    match: PropTypes.object,
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
    const { history, match } = props;
    let language = match.params.language;
    if (!languages[language]) {
      language = 'en';
      history.replace('/' + language);
    }
    this.languagePackage = languages[language];
  }

  render() {
    const { languagePackage } = this;
    const { children } = this.props;

    return (
      <Language
        locale={ languagePackage.language }
        messages={ languagePackage.messages }
      >
        { children }
      </Language>
    );
  }
}

export default withRouter(Languages);

export { languages };