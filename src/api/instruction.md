## How to use?
api.js
```javascript
import axios from 'axios';

export const login = (data, config) => {
  return axios({
    method: 'post',
    url: '/user/login',
    data,
    ...config,
  });
};

export const getUserList = (params, config) => {
  return axios({
    method: 'get',
    url: '/user/list',
    params,
    ...config,
  });
};
```
在JS文件中
* 注意：下面使用了别名
> @ 符号在Webpack中进行配置，这里指向 src/api
```javascript
import { login } from '@/api';

// 发送请求
login({ username: 'admin', password: '123456' }).then(
  response => {
    // 请求成功
  }, 

  error => {
    // 处理错误
  }
);
```
## How to cancel the request?
```javascript
import axios, { login } from 'api';

const source = axios.CancelToken.source();

// 发送请求
login({ username: 'admin', password: '123456' }, source.token).then(
  response => {
    // 请求成功
  }, 

  error => {
    if (axios.isCancel(error)) {
      console.log('Request canceled', error.message);
    } else {
      // 处理错误
    }
  }
);

// 取消请求
source.cancel('Operation canceled by the user.');
```