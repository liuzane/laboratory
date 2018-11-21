//基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//第三方模块
import { fromJS, is } from 'immutable';

//样式
import './style/Login.css';


class Login extends Component {
  static propTypes = {
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

  shouldComponentUpdate (nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
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
    return (
      <div>
        <button onClick={ this.login }>Login</button>
      </div>
    );
  };
};

const mapDispatchToProps = dispatch => {
  const { getUserLogin } = dispatch.user;
  return {
    getUserLogin,
  };
};

export default connect(
  () => {},
  mapDispatchToProps
)(Login);