//基础模块
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Redux extends Component {
  static propTypes = {
    array: PropTypes.array,
    func: PropTypes.func,
  };
  
  render() {
    return ();
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
)(Redux);