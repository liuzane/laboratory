// 基础模块
import React from 'react';

// 布局组件
import { LayContainer } from '@-react/layouts/LayMain';

// 子组件
import Decorators from './Decorators';

const Desktop: React.FC = () => {
  return (
    <LayContainer>
      <Decorators />
    </LayContainer>
  );
};

export default Desktop;