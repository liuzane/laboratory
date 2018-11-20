//基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//第三方模块
import { fromJS, is } from 'immutable';

//API
import {  } from '@/api';

//方法
import {  } from '@/utils/';

//高阶组件
import  from '@/HOC';

//公共组件
import  from '@/components';

//组件
import  from '';

//样式
import './style/';


export default class Desktop extends Component {
  static propTypes = {
    string: PropTypes.string,
    number: PropTypes.number,
    bool: PropTypes.bool,
    array: PropTypes.array,
    object: PropTypes.object,
    func:  PropTypes.func,
    isRequired: PropTypes.isRequired,
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

  shouldComponentUpdate (nextProps, nextState) {
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
  };

  render () {
    return (
      <div 
        className={ ('moban ' + this.props.className).trim() } 
        style={ this.props.style }
      >
        
      </div>
    );
  };
};