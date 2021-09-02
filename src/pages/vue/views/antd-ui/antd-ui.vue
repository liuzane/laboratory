<template>
  <div class="antd-ui">
    <Button type="primary">antd-ui</Button>
    <Icon type="earth" />
  </div>
</template>

<script>
  // 方法
  // import  from '@/utils/';

  // 混入
  // import  from '@/mixins/';

  // UI组件
  import { Button } from 'ant-design-vue';

  // 公共组件
  import Icon from '@-vue/components/Icon';

  // 组件
  // import  from '';

  export default {
    name: 'antd-ui',

    components: {
      Button,
      Icon,
    },
  };
</script>

<style>
  .antd-ui {
    height: 2000px;
    background-color: #fff;
    font-size: 1.8rem;
    text-align: center;
  }
</style>