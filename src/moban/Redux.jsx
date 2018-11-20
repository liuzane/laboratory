//基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Redux extends Component {
  static propTypes = {
    array: PropTypes.array,
    func: PropTypes.func,
  };
  
  render () {
    return ();
  };
};

const mapStateToProps = state => {
  const {  } = state.;
  return {
  
  };
};

const mapDispatchToProps = dispatch => {
  const {  } = dispatch.;
  return {
  
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Redux);