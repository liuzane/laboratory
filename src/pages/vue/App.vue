<template>
  <ant-layout class="app">
    <ant-sider v-model:collapsed="collapsed" collapsible>
      <ant-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="inline"
      >
        <ant-menu-item key="1">
          <router-link to="/home">Home</router-link>
        </ant-menu-item>
        <ant-menu-item key="2">
          <router-link to="/ant-ui">AntdUI</router-link>
        </ant-menu-item>
        <ant-menu-item key="3">
          <router-link to="/element-ui">ElementUI</router-link>
        </ant-menu-item>
      </ant-menu>
    </ant-sider>
    <ant-layout>
      <ant-header class="app__header">header</ant-header>
      <ant-content>
        <router-view/>
      </ant-content>
    </ant-layout>
  </ant-layout>
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
  const { SubMenu, Item } = Menu;

  // 公共组件
  // import  from '@/components/';

  // 组件
  // import  from '';

  export default {
    name: 'App',

    components: {
      AntLayout: Layout,
      AntHeader: Header,
      AntSider: Sider,
      AntContent: Content,
      AntMenu: Menu,
      AntSubMenu: SubMenu,
      AntMenuItem: Item,
      AntBreadcrumb: Breadcrumb,
    },

    data() {
      return {
        collapsed: false,
        selectedKeys: [],
      };
    },
  }
</script>

<style>
.app {
  height: 100%;
}

.app__header {
  background-color: #fff;
}
</style>
