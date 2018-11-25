import { Random } from 'mockjs';
import mock from '@/mock/config';

let Data = Array.apply(null, { length: 100 }).map((item, i) => {
  return {
    id: Random.guid(),
    
  };
});


//
mock.onGet('/').reply(config => {
  let params = config.params;
  return new Promise((resolve, reject) => {
    let data = [];
    
    resolve([ 200, { code: '200', success: true, data, message: '' } ]);
  });
});

//
mock.onPost('/').reply(config => {
  let params = config.data;
  return new Promise((resolve, reject) => {
    let data = [];
    
    resolve([ 200, { code: '200', success: true, data, message: '' } ]);
  });
});