// Axios
export { default } from 'axios';

if (process.env.NODE_ENV) {
  require('@/mock');
}

// User
export * from './user';

// List
export * from './list';