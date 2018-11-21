//用户
import { mock } from '@/api/config';


//登录
export const login = (params, cancelToken) => {
  return mock({
    method: 'get',
    url: '/user/login',
    params,
    cancelToken,
  });
};

//获取用户信息
export const getUserList = (params, cancelToken) => {
  return mock({
    method: 'get',
    url: '/user/list',
    params,
    cancelToken,
  });
};