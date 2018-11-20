import { init } from '@rematch/core';

//用户信息
import user from './modules/user';


const store = init({
  models: {
    user,
  },
});

export default store;

export const { dispatch, getState } = store;

//获取
//getState().user;

//提交（同步和异步都是该方法提交，异步把后面的方法名换成异步的方法名就可以了）
// dispatch.user.update_user(x, y);