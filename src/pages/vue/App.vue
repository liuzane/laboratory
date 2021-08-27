<template>
  <layout>
    <p>
      <router-link to="/home">Go to Home</router-link>
    </p>
    <p>
      <router-link to="/view-ui">Go to view-ui</router-link>
    </p>
    <router-view/>
  </layout>
</template>

<script>
  // 请求
  // import axios, {  } from 'api';

  // 第三方工具
  // import {  } from 'lodash';

  // 方法
  // import  from '@/utils/';

  // UI组件
  import { Layout, Menu, Breadcrumb } from 'ant-design-vue';
  const { Header, Sider, Content } = Layout;
  const { SubMenu, MenuItem } = Menu;

  // 公共组件
  // import  from '@/components/';

  // 组件
  // import  from '';

  export default {
    name: 'App',

    components: {
      Layout,
      Header,
      Sider,
      Content,
      Menu,
      SubMenu,
      MenuItem,
      Breadcrumb,
    },
  }
</script>

<style>

</style>
