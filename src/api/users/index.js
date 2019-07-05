// 用户
import { http } from '@/api/config';


// 获取人员列表
export const getUserList = (params, config) => {
  return http({
    method: 'get',
    url: '/user/list',
    params,
    ...config,
  });
};