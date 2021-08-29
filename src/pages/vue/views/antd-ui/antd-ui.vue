<template>
  <div class="antd-ui">
    <Button type="primary">antd-ui</Button>
  </div>
</template>

<script>
// 请求
// import axios, {  } from 'api';

// 方法
// import  from '@/utils/';

// 混入
// import  from '@/mixins/';

// UI组件
import { Button } from 'ant-design-vue';

// 公共组件
// import  from '@/components/';

// 组件
// import  from '';

export default {
  name: 'antd-ui',

  components: {
    Button,
  },
};
</script>

<style>
.antd-ui {
  font-size: 1.8rem;
  text-align: center;
}
</style>