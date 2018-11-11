import axios from 'axios';
import mock from '@/mock';

//暴露初始实例
export default axios;

//开启开发模式模拟数据（与正常联调模式互斥）
if (process.env.NODE_ENV === 'development') mock();

// const isProd = process.env.NODE_ENV === 'production';

//响应拦截器
const handleInterceptors = instances => {
  instances.forEach(instance => {
    instance.interceptors.response.use(function (response) {
      // 对响应数据做点什么
      return response.data;
    }, function (error) {
      // 对响应错误做点什么
      return Promise.reject(error);
    });
  });
};


//基本配置实例
export const http = axios.create({
  baseURL: '/',
  headers: { 'Content-Type': 'application/json' },
});

export const main = axios.create({
  baseURL: 'http://192.168.0.1',
  headers: { 'Content-Type': 'application/json' },
});

handleInterceptors([ http, main ]);