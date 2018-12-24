//基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//方法
import { setCookie } from '@/utils/cookie';

//UI库组件
import { Form, Input, Icon, Button, message } from 'antd';

//多语言组件
import { injectIntl, FormattedMessage } from 'react-intl';

//公共组件
import LayLogin from '@/layouts/LayLogin';

//样式
import './style/Login.css';

const FormItem = Form.Item;

//验证必填项函数
// const required = (message, rules = []) => {
//   return {
//     rules: [
//       { required: true, message },
//       ...rules
//     ],
//   };
// };
const validate = (rules, params) => {
  return {
    rules,
    ...params
  };
};


class Login extends Component {
  static propTypes = {
    history: PropTypes.object,
    intl: PropTypes.object,
    form: PropTypes.object,
    userLogin: PropTypes.func,
  };
  
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  };
  
  login = () => {
    const { history, form, userLogin } = this.props;

    form.validateFields((error, params) => {
      if (!error) {
        this.setState({ loading: true });
        userLogin({
          params,
          callback: response => {
            setCookie({ key: 'token', value: response.data.id, hours: 0.5 });
            message.success(response.message);
            history.push('/main');
            this.setState({ loading: false });
          },
          errCallback: error => {
            message.error(error.message);
            this.setState({ loading: false });
          }
        });
      }
    });
  };

  render() {
    const { formatMessage } = this.props.intl;
    const { getFieldDecorator } = this.props.form;
    
    return (
      <LayLogin>
        <Form>
          <h3 className="login__title">
            <FormattedMessage id="login.title" />
          </h3>
          
          <FormItem>
            {
              getFieldDecorator('username', validate([
                { required: true, message: '账号不能为空' },
              ]))(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0, 0, 0, .25)' }} />}
                  placeholder={ formatMessage({ id: 'login.username' }) }
                  onPressEnter={ this.login }
                />
              )
            }
          </FormItem>
  
          <FormItem>
            {
              getFieldDecorator('password', validate([
                { required: true, message: '密码不能为空' },
              ]))(
                <Input
                  prefix={ <Icon type="lock" style={{ color: 'rgba(0, 0, 0, .25)' }} /> }
                  placeholder={ formatMessage({ id: 'login.password' }) }
                  type="password"
                  onPressEnter={ this.login }
                />
              )
            }
          </FormItem>
        </Form>
        
        <Button
          type="primary"
          block
          loading={ this.state.loading }
          onClick={ this.login }
        >
          <FormattedMessage id="login.loginText"/>
        </Button>
      </LayLogin>
    );
  };
}

const IntlLogin = injectIntl(Login);

const FormIntlLogin = Form.create()(IntlLogin);

const mapDispatchToProps = dispatch => ({
  userLogin: dispatch.user.userLogin,
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(FormIntlLogin);