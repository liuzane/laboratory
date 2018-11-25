//暴露 config 中的实例
export { default } from './config';
export * from './config';

//开启开发模式模拟数据
// if (process.env.NODE_ENV === 'development') {
  require('@/mock');
// }


//Users
export * from './users';