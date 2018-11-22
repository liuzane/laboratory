//基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//UI库组件
import { Form, Input, Icon, Button } from 'antd';

//多语言组件
import { injectIntl, FormattedMessage } from 'react-intl';

//公共组件
import LoginLayout from '@/layouts/LoginLayout';

//样式
import './style/Login.css';

const FormItem = Form.Item;


class Login extends Component {
  static propTypes = {
    intl: PropTypes.object,
    form: PropTypes.object,
    getUserLogin: PropTypes.func,
  };
  
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loading: false,
    };
  };

  componentDidMount () {

  };
  
  login = async () => {
    this.setState({ loading: true });
    await this.props.getUserLogin({ username: 'admin', password: '123456' }, response => {
      console.log(response);
      alert('success');
    });
    this.setState({ loading: false });
  };

  render () {
    const { formatMessage } = this.props.intl;
    const { getFieldDecorator } = this.props.form;
    
    return (
      <LoginLayout>
        <Form>
          <h3 className="login__title">
            <FormattedMessage id="login.title" />
          </h3>
          
          <FormItem>
            {
              getFieldDecorator('username')(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder={ formatMessage({ id: 'login.username' }) }
                />
              )
            }
          </FormItem>
  
          <FormItem>
            {
              getFieldDecorator('password')(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder={ formatMessage({ id: 'login.password' }) }
                  type="password"
                />
              )
            }
          </FormItem>
        </Form>
        
        <div className="login__error">
        
        </div>
        
        <Button
          type="primary"
          block
          onClick={ this.login }
        >
          <FormattedMessage id="login.loginText"/>
        </Button>
      </LoginLayout>
    );
  };
};

const IntlLogin = injectIntl(Login);

const FormIntlLogin = Form.create()(IntlLogin);

const mapDispatchToProps = dispatch => {
  const { getUserLogin } = dispatch.user;
  return {
    getUserLogin,
  };
};

export default connect(
  () => ({}),
  mapDispatchToProps
)(FormIntlLogin);