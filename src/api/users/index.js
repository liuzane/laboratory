//用户
import axios, { localeMock, easyMock } from '@/api/config';

//登录
export const login = (data, cancelToken) => {
  return axios({
    method: 'post',
    url: '/login',
    data,
    cancelToken,
  });
};

// export const login = (params, cancelToken) => {
//   return easyMock({
//     method: 'get',
//     url: '/user/login',
//     params,
//     cancelToken,
//   });
// };

//获取用户信息
export const getUserList = (params, cancelToken) => {
  return axios({
    method: 'get',
    url: '/user/list',
    params,
    cancelToken,
  });
};