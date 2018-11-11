import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Mock from 'mockjs';

import * as Data from './data';

export default {
  start () {
    let mock = new MockAdapter(axios);

    // mock success request
    mock.onGet('/success').reply(200, {
      msg: 'success'
    });

    // mock error request
    mock.onGet('/error').reply(500, {
      msg: 'failure'
    });

    //登录
    mock.onPost('/login').reply(config => {
      let {userName, passWord} = JSON.parse(config.data);
      return new Promise((resolve, reject) => {
        let user = null;
        setTimeout(() => {
          let hasUser = Data.LoginUsers.some(u => {
            if (u.userName === userName && u.passWord === passWord) {
              user = JSON.parse(JSON.stringify(u));
              user.passWord = undefined;
              return true;
            }
          });

          if (hasUser) {
            resolve([200, { code: '200', message: '请求成功', user }]);
          } else {
            resolve([500, { code: '500', message: '账号或密码错误' }]);
          };
        }, 500);
      });
    });

    const handleData = (array, item) => {
      const id = item.id || Mock.Random.guid();

      if (item.id) {
        const index = array.findIndex(item => item.id === id);
        array.splice(index, 1, item);
      } else {
        item.id = id;
        array.push(item);
      };
      return id;
    };
    const deleteData = (array, id) => {
      const index = array.findIndex(item => item.id === id);
      array.splice(index, 1);
    };

    //获取客户列表
    mock.onGet('/customer/list').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([ 200, Data.Customer ]);
        }, 1000);
      });
    });
    //添加客户
    mock.onPost('/customer/add').reply(config => {
      const id = handleData(Data.Customer, JSON.parse(config.data));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (id) {
            resolve([ 200, id ]);
          } else {
            resolve([ 500 ]);
          };
        }, 1000);
      });
    });
    //删除客户
    mock.onGet('/customer/delete').reply(config => {
      const id = config.params.id;
      deleteData(Data.Customer, id);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (id) {
            resolve([ 200, id ]);
          } else {
            resolve([ 500 ]);
          };
        }, 100);
      });
    });

    //获取待办列表
    mock.onGet('/todo/list').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([ 200, Data.TodoList ]);
        }, 1000);
      });
    });

    //待办详情
    mock.onGet(/\/todo\/\.*/).reply(config => {
      const id = config.url.replace('/todo/', '');
      let item = Data.TodoList.find(item => item.id === id);

      if (item) {
        item = JSON.parse(JSON.stringify(item));
        item.content = Mock.Random.cparagraph();
      };

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (item) {
            resolve([ 200, item ]);
          } else {
            resolve([ 500, { message: '未找到该待办项' } ]);
          };
        }, 500);
      });
    });

    //获取联系人列表
    mock.onGet('/contact/person').reply(config => {
      const id = config.params.id;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (id) {
            resolve([ 200, Data.ContactPerson ]);
          } else {
            resolve([ 500 ]);
          };
        }, 1000);
      });
    });
    //添加联系人
    mock.onPost('/contact/person/add').reply(config => {
      const id = handleData(Data.ContactPerson, JSON.parse(config.data));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (id) {
            resolve([ 200, id ]);
          } else {
            resolve([ 500 ]);
          };
        }, 1000);
      });
    });
    //删除联系人
    mock.onGet('/contact/person/delete').reply(config => {
      const id = config.params.id;
      deleteData(Data.ContactPerson, id);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (id) {
            resolve([ 200, id ]);
          } else {
            resolve([ 500 ]);
          };
        }, 100);
      });
    });

    //获取设备列表
    mock.onGet('/equipment').reply(config => {
      const id = config.params.id;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (id) {
            resolve([ 200, Data.Equipment ]);
          } else {
            resolve([ 500 ]);
          };
        }, 1000);
      });
    });

    //获取设备详情
    mock.onGet(/\/equipment\/\.*/).reply(config => {
      const id = config.url.replace('/equipment/', '');
      let item = Data.Equipment.find(item => item.id === id);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (item) {
            resolve([ 200, item ]);
          } else {
            resolve([ 500 ]);
          };
        }, 1000);
      });
    });

    //获取零件列表
    mock.onGet('/parts/list').reply(config => {
      const id = config.params.id;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (id) {
            resolve([ 200, Data.Parts ]);
          } else {
            resolve([ 500 ]);
          };
        }, 1000);
      });
    });

    //获取合同列表
    mock.onGet('/contract/list').reply(config => {
      const id = config.params.id;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (id) {
            resolve([ 200, Data.Contract ]);
          } else {
            resolve([ 500 ]);
          };
        }, 1000);
      });
    });

    //获取直销合同列表
    mock.onPost('/contract/direct/list').reply(config => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([ 200, { 
            code: '200', 
            data: {
              totalCount: 100,
              entities: Data.DirectContract
            }, 
            message: null,
          }]);
        }, 1000);
      });
    });

    //获取直销合同详情
    mock.onGet('/contract/direct/detail').reply(config => {
      const id = config.params.cid;
      let item = Data.DirectContract.find(item => item.id === id);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (id) {
            resolve([ 200, { 
              code: '200', 
              data: item, 
              message: null,
            }]);
          } else {
            resolve([ 500, { 
              code: '500', 
              data: '未找到id为' + id + '的合同', 
              message: null 
            }]);
          };
        }, 1000);
      });
    });

    //获取售后服务列表
    mock.onGet('/service/after-sale/list').reply(config => {
      const id = true;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (id) {
            resolve([ 200, { 
              code: '200', 
              data: {
                totalCount: 200,
                entities: Data.AfterSale
              },
              message: null,
            }]);
          } else {
            resolve([ 500, { 
              code: '500', 
              data: '', 
              message: null 
            }]);
          };
        }, 1000);
      });
    });

    //获取人员详情列表
    mock.onGet('/person-details/list').reply(config => {
      const id = config.params.id;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (id) {
            resolve([ 200, Data.PersonDetails ]);
          } else {
            resolve([ 500 ]);
          };
        }, 1000);
      });
    });

    //获取节日列表
    mock.onGet('/festival/list').reply(config => {
      // const id = config.params.id;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([ 200, Data.FestivalList ]);
        }, 1000);
      });
    });

    //获取生日列表
    mock.onGet('/birthday/list').reply(config => {
      // const id = config.params.id;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([ 200, Data.BirthdayList ]);
        }, 1000);
      });
    });

    //获取拜访列表
    mock.onGet('/visit/list').reply(config => {
      // const id = config.params.id;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([ 200, Data.VisitList ]);
        }, 1000);
      });
    });
  },
};
