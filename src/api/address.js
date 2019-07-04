// 当执行脚本时可以使用一下变量来确认环境
// process.env.NODE_ENV   Node环境变量
// process.env.ADDRESS_ENV  通过package.json中scripts命令中的 set [key]=[value] 可以获取，这里是自定义变量
// process.env.npm_lifecycle_event  执行npm run xxx 的package.json中scripts对应的脚本名称。
// 例如"build": "react-app-rewired build",，脚本名称就是build
// process.PORT  调试时启用的端口

let address_env = process.env.ADDRESS_ENV;

if (address_env !== 'test') {
  address_env = process.env.NODE_ENV;
}

// 命名方式  XXX_YYY_ADDRESS， XXX 地址名称，YYY 地址所属服务。
const address = Object.seal({
  DEBUG_DEV_ADDRESS: null,  //联调地址
  LOCALE_MOCK_ADDRESS: null,  //本地Mock地址
  EASY_MOCK_ADDRESS: null,  //easy-mock地址
  MAIN_PROD_ADDRESS: null,  //主要生产环境地址
});

switch (address_env) {
  //开发环境地址
  case 'development':
    address.DEBUG_DEV_ADDRESS = '/';
    address.LOCALE_MOCK_ADDRESS = './';
    address.EASY_MOCK_ADDRESS = 'https://www.easy-mock.com/mock/5bf3ee63f0beab552d8b6fef';
    address.MAIN_PROD_ADDRESS = 'http://192.168.0.1';
    break;
    
  //生产环境地址
  case 'production':
    address.DEBUG_DEV_ADDRESS = '/';
    address.LOCALE_MOCK_ADDRESS = 'https://liuzane.github.io/react-laboratory';
    address.EASY_MOCK_ADDRESS = 'https://www.easy-mock.com/mock/5bf3ee63f0beab552d8b6fef';
    address.MAIN_PROD_ADDRESS = 'http://192.168.0.1';
    break;
    
  //测试环境地址
  case 'test':
    address.DEBUG_DEV_ADDRESS = '/';
    address.LOCALE_MOCK_ADDRESS = './';
    address.EASY_MOCK_ADDRESS = 'https://www.easy-mock.com/mock/5bf3ee63f0beab552d8b6fef';
    address.MAIN_PROD_ADDRESS = 'http://192.168.0.1';
    break;
    
  //默认地址
  default:
    address.DEBUG_DEV_ADDRESS = '/';
    address.LOCALE_MOCK_ADDRESS = './';
    address.EASY_MOCK_ADDRESS = 'https://www.easy-mock.com/mock/5bf3ee63f0beab552d8b6fef';
    address.MAIN_PROD_ADDRESS = 'http://192.168.0.1';
    break;
}

export default address;