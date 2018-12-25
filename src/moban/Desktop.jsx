//基础模块
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//API
import {  } from '@/api';

//方法
import {  } from '@/utils/';

//样式
import './style/';

//公共组件
import  from '@/components';

//组件
import  from '';

//UI组件
import {  } from 'antd';


class Desktop extends PureComponent {
  static propTypes = {
    string: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    className: '',
  };

  constructor (props) {
    super(props);
    this.state = {};
  };

  componentDidMount () {

  };

  render () {
    const { className, style } = this.props;
    
    return (
      <div 
        className={ ('moban ' + className).trim() }
        style={ style }
      >
        
      </div>
    );
  };
}

const mapStateToProps = state => ({
  one: state.user.one,
});

const mapDispatchToProps = dispatch => ({
  emit: dispatch.user.emit,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Desktop);

export default Desktop;