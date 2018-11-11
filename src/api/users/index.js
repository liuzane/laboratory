//用户
import { main } from '@/api/config';

//获取用户信息
export const getUserList = (params, cancelToken) => {
  return main({
    method: 'get',
    url: '/user/list',
    params,
    cancelToken,
  });
};