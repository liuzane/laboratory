//API
import { login, getUserInfo } from '@/api';

//方法
import { getStorage, setStorage } from '@/utils/local-storage';

//成功回调
const successCallback = function (callback, errCallback, response) {
  if (response.success && response.code === '200') {
    if (callback) callback(response);
    this.update_user(response.data);
  } else {
    if (errCallback) errCallback(response);
  }
};

//失败回调
const errorCallback = function (errCallback, error) {
  console.error(error);
  if (errCallback) {
    if (error.response && error.response.data) {
      error = error.response.data;
    }
    errCallback(error);
  }
};


const user = {
  state: {
    language: '',
    id: '',
    username: '',
    permission: [],
  },

  reducers: {
    update_user(state, data) {
      const local = getStorage('userInfo');
      
      data = Object.assign({}, local, data);
      setStorage('userInfo', data, 24);
      
      for (let key in state) {
        if (state[key]) state[key] = data[key];
      }
      
      return state;
    },
  },
  
  effects: {
    userLogin({ params, callback, errCallback }, rootState) {
      if (!params || !params.username || !params.password) {
        console.error('[ userLogin Error ]: Please confirm params is complete?');
        return;
      }

      return login(params).then(
        successCallback.bind(this, callback, errCallback),
        errorCallback.bind(this, errCallback)
      );
    },
    
    getUserInfo (params, rootState, callback, errCallback) {
      if (!params || !params.id) {
        console.error('[ getUserInfo Error ]: Please confirm params is complete?', params);
        return;
      }
  
      return getUserInfo(params).then(
        successCallback.bind(this, callback, errCallback),
        errorCallback.bind(this, errCallback)
      );
    },
  },
};

export default user;