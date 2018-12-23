//基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//方法
import { setCookie } from '@/utils/cookie';
import { setStorage } from '@/utils/local-storage';

//UI库组件
import { Form, Input, Icon, Button, message } from 'antd';

//多语言组件
import { injectIntl, FormattedMessage } from 'react-intl';

//公共组件
import LayLogin from '@/layouts/LayLogin';

//样式
import './style/Login.css';

const FormItem = Form.Item;


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
      username: '',
      password: '',
      loading: false,
    };
  };
  
  login = () => {
    const { history, form, userLogin } = this.props;
    
    form.validateFields((error, params) => {
      if (!error) {
        this.setState({ loading: true });
        userLogin(params, response => {
          setCookie({ key: 'token', value: response.data.id, hours: 0.5 });
          setStorage('userInfo', response.data, 24);
          message.success(response.message);
          history.push('/main');
          this.setState({ loading: false });
        }, error => {
          this.setState({ loading: false });
        });
      }
    });
  };

  render () {
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
              getFieldDecorator('username')(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder={ formatMessage({ id: 'login.username' }) }
                  onPressEnter={ this.login }
                />
              )
            }
          </FormItem>
  
          <FormItem>
            {
              getFieldDecorator('password')(
                <Input
                  prefix={ <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} /> }
                  placeholder={ formatMessage({ id: 'login.password' }) }
                  type="password"
                  onPressEnter={ this.login }
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
          loading={ this.state.loading }
          onClick={ this.login }
        >
          <FormattedMessage id="login.loginText"/>
        </Button>
      </LayLogin>
    );
  };
};

const IntlLogin = injectIntl(Login);

const FormIntlLogin = Form.create()(IntlLogin);

const mapDispatchToProps = dispatch => {
  const { userLogin } = dispatch.user;
  return {
    userLogin,
  };
};

export default connect(
  () => ({}),
  mapDispatchToProps
)(FormIntlLogin);