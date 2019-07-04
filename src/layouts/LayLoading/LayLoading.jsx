// 基础模块
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// 样式
import './style/LayLoading.css';


class LayLoading extends PureComponent {
  static propTypes = {
    loading: PropTypes.bool,
  };
  
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
    };
  };
  
  render() {
    return this.state.isHidden ? null : (
      <div
        id="screen-loading"
        style={{ opacity: this.props.loading ? 1 : 0 }}
        onTransitionEnd={ () => this.setState({ isHidden: true }) }
      >
        <div className="screen-loading__viewbox">
          <svg width="100%" height="100%" viewBox="0 0 25 30" fill="#2d8cf0">
            <rect x="0" y="9.80392" rx="1.5" ry="1.5" width="4" height="11.3922">
              <animate
                attributeName="height"
                attributeType="XML"
                values="5;21;5"
                begin="0s"
                dur="0.6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                attributeType="XML"
                values="13; 5; 13"
                begin="0s"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="10" y="5.80392" rx="1.5" ry="1.5" width="4" height="19.3922">
              <animate
                attributeName="height"
                attributeType="XML"
                values="5;21;5"
                begin="0.15s"
                dur="0.6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                attributeType="XML"
                values="13; 5; 13"
                begin="0.15s"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </rect>
            <rect x="20" y="8.19608" rx="1.5" ry="1.5" width="4" height="14.6078">
              <animate
                attributeName="height"
                attributeType="XML"
                values="5;21;5"
                begin="0.3s"
                dur="0.6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                attributeType="XML"
                values="13; 5; 13"
                begin="0.3s"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </rect>
          </svg>
          <p className="screen-loading__text">Wecome to React Laboratory</p>
        </div>
      </div>
    );
  };
}

export default LayLoading;