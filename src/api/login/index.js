// 用户
import { http } from '@/api/config';


// 登录
export const login = (data, config) => {
  return http({
    method: 'post',
    url: '/login',
    data,
    ...config,
  });
};

// 获取用户信息
export const getUserInfo = (params, config) => {
  return http({
    method: 'get',
    url: '/user/info',
    params,
    ...config,
  });
};