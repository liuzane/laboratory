// 基础模块
import React, { PureComponent } from 'react';

// 地址
import address from '@/address';

// 布局组件
import { LayContainer } from '@/layouts/LayMain';


class Desktop extends PureComponent {
  constructor() {
    super();
    this.src = address.SERVER_ADDRESS + '/solar-system.html';
  }

  render() {
    return (
      <LayContainer wrapperStyle={{ height: '100%' }}>
        <iframe
          src={ this.src }
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
        />
      </LayContainer>
    );
  }
}

export default Desktop;