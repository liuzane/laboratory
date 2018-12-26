import { createModel } from '@rematch/core';

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

const initialState = Object.freeze({
  language: '',
  id: '',
  name: '',
  username: '',
  permission: [],
});


const user = createModel({
  state: { ...initialState },

  reducers: {
    update_user(state, data) {
      const userInfo = getStorage('userInfo');
      const language = getStorage('language');
      
      data = Object.assign({}, userInfo, data);
      
      if (!data.language) {
        data.language = language || navigator.language.replace('-', '_');
      }
      
      setStorage('userInfo', data, 24);

      for (let key in state) {
        if (data[key]) state[key] = data[key];
      }

      return JSON.parse(JSON.stringify(state));
    },
    
    reset_user() {
      return { ...initialState };
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
});

export default user;