<template>
  <ant-layout class="app">
    <ant-sider
      v-model:collapsed="collapsed"
      collapsible
      class="app__sider"
    >
      <div class="app__logo">
        <img
          :class="{ 'app__logo-image': true, 'app__logo-image--center': collapsed }"
          src="./assets/logo.svg"
          alt=""
        >
        <span v-if="!collapsed" class="app__logo-text">Laboratory</span>
      </div>

      <ant-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="inline"
        class="app__menu"
      >
        <ant-menu-item key="1">
          <template #icon>
            <icon type="home"/>
          </template>
          <router-link to="/home">Home</router-link>
        </ant-menu-item>
        <ant-menu-item key="2">
          <template #icon>
            <icon type="home"/>
          </template>
          <router-link to="/antd-ui">AntdUI</router-link>
        </ant-menu-item>
        <ant-menu-item key="3">
          <router-link to="/element-ui">ElementUI</router-link>
        </ant-menu-item>
      </ant-menu>
    </ant-sider>

    <ant-layout>
      <ant-header class="app__header">
        <div class="app__breadcrumb">
          <ant-breadcrumb>
            <ant-breadcrumb-item>home</ant-breadcrumb-item>
            <ant-breadcrumb-item>test</ant-breadcrumb-item>
            <ant-breadcrumb-item>desktop</ant-breadcrumb-item>
          </ant-breadcrumb>
          <h3 class="app__breadcrumb-name">desktop</h3>
        </div>

        <ul class="app__tooltip">
          <ant-dropdown trigger="click">
            <li>
              <img
                class="app__avatar"
                src="~@-vue/assets/avatar.jpg"
                alt=""
              >
              <span class="app__username">Admin</span>
            </li>
            <template #overlay>
              <ant-menu class="app__dropdown-menu">
                <ant-menu-item>
                  <icon type="user" />
                  <span>个人中心</span>
                </ant-menu-item>
                <ant-menu-item>
                  <icon type="password" />
                  <span>修改密码</span>
                </ant-menu-item>
                <ant-menu-divider />
                <ant-menu-item>
                  <icon type="logout" />
                  <span>注销</span>
                </ant-menu-item>
              </ant-menu>
            </template>
          </ant-dropdown>
          <ant-dropdown>
            <li>
              <icon type="earth"/>
            </li>
            <template #overlay>
              <ant-menu>
                <ant-menu-item>English</ant-menu-item>
                <ant-menu-item>简体中文</ant-menu-item>
              </ant-menu>
            </template>
          </ant-dropdown>
        </ul>
      </ant-header>

      <ant-content class="app__page">
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
  import { Layout, Menu, Breadcrumb, Dropdown } from 'ant-design-vue';

  const { Header, Sider, Content } = Layout;
  const { SubMenu, Item: MenuItem, Divider: MenuDivider } = Menu;
  const { Item: BreadcrumbItem } = Breadcrumb;

  // 公共组件
  import Icon from '@-vue/components/Icon';

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
      AntMenuItem: MenuItem,
      AntMenuDivider: MenuDivider,
      AntBreadcrumb: Breadcrumb,
      AntBreadcrumbItem: BreadcrumbItem,
      AntDropdown: Dropdown,
      Icon,
    },

    data() {
      return {
        collapsed: false,
        selectedKeys: [],
      };
    },
  }
</script>

<style lang="less">
  @import '~@-vue/styles/variable.less';

  .app {
    height: 100%;
    overflow: hidden;
  }

  .app__sider {
    overflow: hidden;
  }

  .app__logo {
    height: 64px;
    position: relative;
  }

  .app__logo-image {
    width: 32px;
    height: 32px;
    vertical-align: top;
    position: absolute;
    top: 50%;
    left: 5%;
    margin-top: -16px;
    animation: logo-spin 5s ease-in-out infinite;
  }

  .app__logo-image--center {
    left: 50%;
    margin-left: -16px;
  }

  .app__logo-text {
    display: inline-block;
    height: 32px;
    padding: 0 10px;
    background-color: #334454;
    color: rgba(255, 255, 255, .8);
    font-size: 16px;
    line-height: 32px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .app__menu {
    width: calc(100% + 17px) !important;
    height: calc(100% - 64px);
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .app__header {
    padding: 0 8px;
    background-color: #fff;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  }

  .app__breadcrumb {
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    height: 100%;
  }

  .app__breadcrumb-name {
    color: rgba(0, 0, 0, 0.85);
    font-size: 18px;
    font-weight: 600;
    line-height: 1;
  }

  .app__tooltip {
    float: right;
    height: 100%;
  }

  .app__tooltip > li {
    /*display: inline-block;*/
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 12px;
    text-align: center;
    cursor: pointer;
    transition: all .2s ease-in-out;
  }

  .app__tooltip > li:hover {
    background: #f8f8f9;
  }

  .app__avatar {
    width: 24px;
    height: 24px;
    line-height: 24px;
    border-radius: 50%;
  }

  .app__username {
    margin-left: 8px;
    line-height: 24px;
  }

  .app__dropdown-menu {
    .ant-dropdown-menu-title-content {
      display: flex;
      align-items: center;
    }

    .iconfont {
      margin-right: 8px;
    }

    .ant-dropdown-menu-item:last-child {
      color: @error-color;
    }
  }

  .app__page {
    margin: 8px;
    background-color: #fff;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
  }

  @keyframes logo-spin {
    0% {
      transform: rotateY(0deg);
    }

    45% {
      transform: rotateY(0deg);
    }

    55% {
      transform: rotateY(180deg);
    }

    100% {
      transform: rotateY(180deg);
    }
  }
</style>
