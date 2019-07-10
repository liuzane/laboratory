// 处理路由配置
const handleRoutes = (routes, parentPath) => {
  return routes.reduce((prevRoutes, currentRoute) => {
    if (parentPath && currentRoute.path.substr(0, 1) !== '/') {
      currentRoute.path = parentPath + (currentRoute.path === '' ? '' : '/' + currentRoute.path);
    }

    if (currentRoute.children) {
      handleRoutes(currentRoute.children, currentRoute.path);
    }

    if (!currentRoute.component && currentRoute.children) {
      return prevRoutes.concat(currentRoute.children);
    } else {
      return prevRoutes.concat(currentRoute);
    }
  }, []);
};


export default handleRoutes;

// 路由视图
export { default as RouterView } from './RouterView';

// 异步路由
export { default as AsyncLoad } from './AsyncLoad';

// 路由 history 对象
export { default as history } from './history';

// 页面之间跳转方法
export { default as goto } from './goto';