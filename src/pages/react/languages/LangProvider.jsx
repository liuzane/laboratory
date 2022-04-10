// 基础模块
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// 路由模块
import { withRouter } from 'react-router-dom';

// 多语言模块
import { IntlProvider } from 'react-intl';

// 多语言列表
import { defaultLanguage, languages } from './languages';


class LangProvider extends PureComponent {
  static propTypes = {
    updateUser: PropTypes.func,
    location: PropTypes.object,
    match: PropTypes.object,
    children: PropTypes.node,
  };

  constructor(props) {
    super(props);
    const browserLanguage = window.navigator.language.toLocaleLowerCase();
    const matchLanguage = props.match.params.language;
    this.language = languages.find(item => item.code === matchLanguage) ? matchLanguage : languages.find(item => item.code === browserLanguage) ? browserLanguage : defaultLanguage.code;
    this.messages = require(`./locales/${this.language}.json`);
    props.updateUser({ language: this.language });
  }

  render() {
    const { children } = this.props;

    return (
      <IntlProvider
        locale={ this.language }
        messages={ this.messages }
        defaultLocale={ defaultLanguage.code }
      >
        { children }
      </IntlProvider>
    );
  }
}

const withLangProvider = withRouter(LangProvider);

// Dispatch
const mapDispatchToProps = ({ user }) => ({
  updateUser: user.updateUser,
});

export default connect(
  null,
  mapDispatchToProps
)(withLangProvider);