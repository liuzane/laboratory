// 基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 样式
import './style/Login.css';

// 方法
import { setCookie } from '@/utils/cookie';

// API
import { login } from '@/api';

// UI库组件
import { Form, Input, Icon, Button, message } from 'antd';

// 多语言组件
import { injectIntl, FormattedMessage } from 'react-intl';

// 公共组件
import LayLogin from '@/layouts/LayLogin';

const FormItem = Form.Item;

// 验证必填项函数
const validate = (rules, params) => {
  return {
    rules,
    ...params
  };
};


class Login extends Component {
  static propTypes = {
    intl: PropTypes.object,
    form: PropTypes.object,
  };
  
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  
  login = () => {
    const { form } = this.props;

    form.validateFields((error, params) => {
      if (!error) {
        this.setState({ loading: true });
        login(params).then(
          response => {
            setCookie({ key: 'token', value: response.data.id, hours: 0.5 });
            message.success(response.message);
            this.setState({ loading: false });

            window.location.href= window.location.origin + '/index.html';
          },

          error => {
            message.error(error.message);
            this.setState({ loading: false });
          }
        );
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
                  onPressEnter={ this.login }
                  placeholder={ formatMessage({ id: 'login.username' }) }
                  prefix={<Icon style={{ color: 'rgba(0, 0, 0, .25)' }} type="user" />}
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
                  onPressEnter={ this.login }
                  placeholder={ formatMessage({ id: 'login.password' }) }
                  prefix={ <Icon style={{ color: 'rgba(0, 0, 0, .25)' }} type="lock" /> }
                  type="password"
                />
              )
            }
          </FormItem>
        </Form>
        
        <Button
          block
          loading={ this.state.loading }
          onClick={ this.login }
          type="primary"
        >
          <FormattedMessage id="login.loginText"/>
        </Button>
      </LayLogin>
    );
  }
}

const IntlLogin = injectIntl(Login);

const FormIntlLogin = Form.create()(IntlLogin);

export default FormIntlLogin;