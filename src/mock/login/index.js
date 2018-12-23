// import { Random } from 'mockjs';
import mock from '@/mock/config';

const Users = {
  admin: {
    id: 'b920FfDB-63f7-dFf5-f8bb-36338ccff84B',
    name: '管理员',
    password: '123456',
    permission: []
  },
  
  manager: {
    id: 'a3Ac3dAD-f6Ba-B04C-ae81-16D6e4A85fB8',
    name: '经理',
    password: '123456',
    permission: []
  },
};


//登录
mock.onPost('/login').reply(config => {
  return new Promise((resolve, reject) => {
    let params = null;
    try {
      params = JSON.parse(config.data);
    } catch (e) {
      reject([ 200, { code: '500', success: false, data: [], message: '参数解析失败' } ]);
      return;
    }
    
    const { username, password } = params;
  
    if (Users[username] && Users[username].password === password) {
      resolve([ 200, {
        code: '200',
        success: true,
        data: {
          username,
          ...Users[username],
        },
        message: '登录成功'
      } ]);
    } else {
      reject([ 500, {
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
  const { id } = config.params;

  return new Promise((resolve, reject) => {
    let data = null;
    
    for (let key in Users) {
      if (Users[key].id === id && id !== undefined) {
        data = JSON.parse(JSON.stringify(Users[key]));
        data.username = key;
        delete data.password;
      }
    }
    
    if (data) {
      resolve([ 200, {
        code: '200',
        success: true,
        data,
        message: '获取成功',
      } ]);
    } else {
      reject([ 500, {
        code: '500',
        success: false,
        data: null,
        message: '未找到该用户信息',
      } ]);
    }
  });
});