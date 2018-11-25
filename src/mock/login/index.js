// import { Random } from 'mockjs';
import mock from '@/mock/config';



//登录
mock.onPost('/login').reply(config => {
  let params = config.data;
  console.log('mock login ', config);
  return new Promise((resolve, reject) => {
    let data = [];
    
    resolve([ 200, { code: '200', success: true, data, message: '登录成功' } ]);
  });
});