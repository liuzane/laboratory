import axios from 'axios';
import address from './address';

// 暴露初始实例
export default axios;


// 基本配置实例
export const localeMock = axios.create({
  baseURL: address.LOCALE_MOCK_ADDRESS,
  headers: { 'Content-Type': 'application/json' },
});

export const easyMock = axios.create({
  baseURL: address.EASY_MOCK_ADDRESS,
  headers: { 'Content-Type': 'application/json' },
});

export const http = axios.create({
  baseURL: address.MAIN_PROD_ADDRESS,
  headers: { 'Content-Type': 'application/json' },
});


// 响应拦截器
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

handleInterceptors([ localeMock, easyMock, http ]);