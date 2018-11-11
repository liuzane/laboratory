import { Random } from 'mockjs';
import mock from '@/mock/config';

let Data = Array.apply(null, { length: 100 }).map((item, i) => {
  return {
    id: Random.guid(),
    name: Random.name(),
    age: Random.integer(20, 50),
    address: Random.county(true),
  }; 
});


const request = () => {
  mock.onGet('/user/list').reply(config => {
    let { page, size } = config.params;

    let data = [];

    for (let i = page - 1, iLength = Data.length; i < page * size && i < iLength; i ++) {
      data.push(Data[i]);
    };

    return [ 200, data ];
  });
};

export default request;