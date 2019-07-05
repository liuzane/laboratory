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
  }
  
  render() {
    return this.state.isHidden ? null : (
      <div
        id="screen-loading"
        onTransitionEnd={ () => this.setState({ isHidden: true }) }
        style={{ opacity: this.props.loading ? 1 : 0 }}
      >
        <div className="screen-loading__viewbox">
          <svg
            fill="#2d8cf0"
            height="100%"
            viewBox="0 0 25 30"
            width="100%"
          >
            <rect
              height="11.3922"
              rx="1.5"
              ry="1.5"
              width="4"
              x="0"
              y="9.80392"
            >
              <animate
                attributeName="height"
                attributeType="XML"
                begin="0s"
                dur="0.6s"
                repeatCount="indefinite"
                values="5;21;5"
              />
              <animate
                attributeName="y"
                attributeType="XML"
                begin="0s"
                dur="0.6s"
                repeatCount="indefinite"
                values="13; 5; 13"
              />
            </rect>
            <rect
              height="19.3922"
              rx="1.5"
              ry="1.5"
              width="4"
              x="10"
              y="5.80392"
            >
              <animate
                attributeName="height"
                attributeType="XML"
                begin="0.15s"
                dur="0.6s"
                repeatCount="indefinite"
                values="5;21;5"
              />
              <animate
                attributeName="y"
                attributeType="XML"
                begin="0.15s"
                dur="0.6s"
                repeatCount="indefinite"
                values="13; 5; 13"
              />
            </rect>
            <rect
              height="14.6078"
              rx="1.5"
              ry="1.5"
              width="4"
              x="20"
              y="8.19608"
            >
              <animate
                attributeName="height"
                attributeType="XML"
                begin="0.3s"
                dur="0.6s"
                repeatCount="indefinite"
                values="5;21;5"
              />
              <animate
                attributeName="y"
                attributeType="XML"
                begin="0.3s"
                dur="0.6s"
                repeatCount="indefinite"
                values="13; 5; 13"
              />
            </rect>
          </svg>
          <p className="screen-loading__text">Wecome to React Laboratory</p>
        </div>
      </div>
    );
  }
}

export default LayLoading;