import axios from 'axios';

//暴露初始实例
export default axios;

const isProd = process.env.NODE_ENV === 'production';


//判断生产环境的Url
export const handleUrl = (devUrl, prodUrl, baseUrl = '') => {
  devUrl = devUrl + baseUrl;
  prodUrl = prodUrl + baseUrl;

  return isProd ? prodUrl : devUrl;
};



//处理 get 请求参数转换为字符串
export const handleData = function (object) {
  let dataString = [];

  for (let key in object) dataString.push(key + '=' + object[key]);

  return dataString.join('&');
};



//基本配置实例
export const http = axios.create({
  baseURL: handleUrl('/serve', '/'),
  headers: { 'Content-Type': 'application/json' },
});



//配置输出格式和百度密钥
export const baidu_config = { output: 'json', ak: 'hEsDFepHLai1OqKD3ngsrULY' };

//中转百度api实例
export const baidu = axios.create({
  baseURL: handleUrl('/serve', '', '/api/Customer/GetBaiduApiResult'),

  headers: { 'Content-Type': 'application/json' },

  //发送请求前对参数进行转换
  paramsSerializer: function (params) {
    params.url = encodeURIComponent(params.url);
    params.content = encodeURIComponent(handleData(Object.assign({}, baidu_config, params.content)));

    return handleData(params);
  },
});



export const excel = params => {
  const url = params.url + '?';
  let data = handleData(params.params);

  // return (isProd ? '' : 'http://117.74.132.91:8777') + url + data;
  return (isProd ? '' : 'http://120.55.94.65:8777') + url + data;
};