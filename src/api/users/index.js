// 用户
import { localeMock } from '@/api/config';


// 获取人员列表
export const getUserList = (params, cancelToken) => {
  return localeMock({
    method: 'get',
    url: '/user/list',
    params,
    cancelToken,
  });
};