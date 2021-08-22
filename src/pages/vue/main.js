// 基础模块
import { createApp } from 'vue';

// 路由
import Router from './router';

// 入口组件
import App from './App.vue';

// 全局样式
import './styles';

// 创建根实例
const app = createApp(App);

// 应用实例
app.use(Router);

// 挂载
app.mount('#root');