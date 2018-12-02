// import { Random } from 'mockjs';
import mock from '@/mock/config';

const Users = {
  admin: {
    id: 'b920FfDB-63f7-dFf5-f8bb-36338ccff84B',
    password: '123456',
    permission: []
  },
  
  manager: {
    id: 'a3Ac3dAD-f6Ba-B04C-ae81-16D6e4A85fB8',
    password: '123456',
    permission: []
  },
};


//登录
mock.onPost('/login').reply(config => {
  return new Promise((resolve, reject) => {
    try {
      let params = JSON.parse(config.data);
    } catch (e) {
      reject([ 200, { code: '500', success: false, data: [], message: '参数解析失败' } ]);
      return;
    }
  
    if (Users[username] && Users[username].password === password) {
      resolve([ 200, {
        code: '200',
        success: true,
        data: {
          id: Users[username].id,
          username,
          permission: Users[username].permission
        },
        message: '登录成功'
      } ]);
    } else {
      resolve([ 200, {
        code: '500',
        success: false,
        data: null,
        message: '请检查账号或密码是否正确'
      } ]);
    }
  });
});

//获取用户信息
mock.onGet('/user/info').reply(config => {
  let params = config.data;
  console.log('mock login ', config);
  return new Promise((resolve, reject) => {
    let data = [];
    
    resolve([ 200, { code: '200', success: true, data, message: '登录成功' } ]);
  });
});