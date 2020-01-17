/*
* 当执行脚本时可以使用一下变量来确认环境，由于 create-react-app 限制环境变量除了 NODE_ENV 和 PUBLIC_URL 两个变量，其他变量都要以REACT_APP_开头
* process.env.NODE_ENV   Node 环境变量
* process.env.PUBLIC_URL   React 公共路径
* process.env.REACT_APP_SCRIPT   同等 process.env.npm_lifecycle_event
*/

// 执行脚本名称
const SCRIPT = process.env.REACT_APP_SCRIPT;

// http方式
const protocol = window.location.protocol;
const host = window.location.host;

// 命名方式  XXX_YYY_ADDRESS， XXX 所属服务，YYY 服务页面。
const address = Object.seal({
  SERVER_ADDRESS: null, // 服务地址
  LOCALEMOCK_ADDRESS: null, // 本地 Mock 地址
  EASYMOCK_ADDRESS: null, // EasyMock 地址
  HEWEATHER_ADDRESS: null, // 和风天气地址
});

switch (SCRIPT) {
  // 开发环境地址
  case 'start':
    address.SERVER_ADDRESS = null;
    address.LOCALEMOCK_ADDRESS = '/';
    address.HEWEATHER_ADDRESS = 'https://free-api.heweather.net';
    break;

  // 生产环境地址
  case 'build':
    address.SERVER_ADDRESS = '/react-laboratory';
    address.LOCALEMOCK_ADDRESS = '/';
    address.HEWEATHER_ADDRESS = 'https://free-api.heweather.net';
    break;

  // 默认地址
  default:
    address.SERVER_ADDRESS = '/';
    address.LOCALEMOCK_ADDRESS = '/';
    address.EASYMOCK_ADDRESS = '/easy-mock';
    address.HEWEATHER_ADDRESS = 'https://free-api.heweather.net';
    break;
}

// 处理 address
for (const key in address) {
  if (!address[key]) {
    address[key] = `${ protocol }//${ host }`;
    continue;
  }

  if (address[key][0] === '/') {
    address[key] = `${ protocol }//${ host }${ address[key] }`;
    continue;
  }

  if (!(/^https?:\/\/.*/.test(address[key]))) {
    address[key] = `${ protocol }//${ address[key] }`;
  }
}

export default address;