import axios from 'axios';

//暴露初始实例
export default axios;

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
export const localeMock = axios.create();

export const easyMock = axios.create({
  baseURL: 'https://www.easy-mock.com/mock/5bf3ee63f0beab552d8b6fef',
  headers: { 'Content-Type': 'application/json' },
});

export const http = axios.create({
  baseURL: 'http://192.168.0.1',
  headers: { 'Content-Type': 'application/json' },
});

handleInterceptors([ localeMock, easyMock, http ]);

//开启开发模式模拟数据
if (process.env.NODE_ENV === 'development') {
  require('@/mock');
}