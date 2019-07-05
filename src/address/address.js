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

// 命名方式  XXX_YYY_ADDRESS， XXX 地址名称，YYY 地址所属服务。
const address = Object.seal({
  LOCALE_MOCK_ADDRESS: null, // 本地 Mock 地址
  MAIN_DEVE_ADDRESS: null, // 开发环境地址
  MAIN_TEST_ADDRESS: null, // 测试环境地址
  MAIN_PROD_ADDRESS: null, // 生产环境地址
});

switch (SCRIPT) {
  // 开发环境地址
  case 'start':
    address.LOCALE_MOCK_ADDRESS = '/';
    address.MAIN_DEVE_ADDRESS = '/easy-mock';
    break;

  // 生产环境地址
  case 'build':
    address.LOCALE_MOCK_ADDRESS = '/';
    address.MAIN_PROD_ADDRESS = 'liuzane.github.io';
    break;

  // 测试环境地址
  case 'test':
    address.LOCALE_MOCK_ADDRESS = '/';
    address.MAIN_TEST_ADDRESS = 'liuzane.github.io';
    break;

  // 默认地址
  default:
    address.LOCALE_MOCK_ADDRESS = '/';
    address.MAIN_DEVE_ADDRESS = '/easy-mock';
    address.MAIN_PROD_ADDRESS = 'liuzane.github.io';
    address.MAIN_TEST_ADDRESS = 'liuzane.github.io';
    break;
}

// 根据http方式加上protocol
for (const key in address) {
  if (address[key] && address[key].length > 0 && address[key][0] === '/') {
    address[key] = `${ protocol }//${ host }${ address[key] }`;
  } else {
    address[key] = `${ protocol }//${ address[key] }`;
  }
}

export default address;