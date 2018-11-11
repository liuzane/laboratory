// const mock = () => {
//   import('./users').then(data => data.default());
// };
import users from './users';

const request = () => {
  users();
};

export default request;
