//基础模块
import React from 'react';

//样式
import './style/LayLoading.css';


const LayLoading = () => {
  return (
    <div id="screen-loading">
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

export default LayLoading;