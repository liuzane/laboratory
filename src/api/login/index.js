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