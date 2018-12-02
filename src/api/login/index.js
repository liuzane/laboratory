//用户
import { localeMock } from '@/api/config';


//登录
export const login = (data, cancelToken) => {
  return localeMock({
    method: 'post',
    url: '/login',
    data,
    cancelToken,
  });
};

//获取用户信息
export const getUserInfo = (params, cancelToken) => {
  return localeMock({
    method: 'get',
    url: '/user/info',
    params,
    cancelToken,
  });
};