// 嵌套路由容器
export const Container = {
  template: '<router-view />'
};

// 处理路由配置
export const createRoutes = (routes) => {
  const recursionRoutes = (routes, parentPath) => {
    return routes.reduce((prevRoutes, currentRoute) => {
      if (!currentRoute.code) {
        currentRoute.code = (currentRoute.path || currentRoute.redirect).replace(/\//g, '');
      }

      if (parentPath && currentRoute.path.substr(0, 1) !== '/') {
        currentRoute.path = parentPath + (currentRoute.path === '' ? '' : '/' + currentRoute.path);

        if (currentRoute.redirect) {
          currentRoute.redirect =
            currentRoute.redirect.substr(0, 1) === '/'
              ? currentRoute.redirect
              : parentPath + '/' + currentRoute.redirect;
        }
      }

      if (process.env.NODE_ENV !== 'start' && currentRoute.path === '/test') {
        return prevRoutes;
      } else if (currentRoute.children) {
        const children = recursionRoutes(currentRoute.children, currentRoute.path);
        return prevRoutes.concat(currentRoute);
      } else {
        return prevRoutes.concat(currentRoute);
      }
    }, []);
  };
  return recursionRoutes(routes);
};

// 路由转化为菜单
export const routesToMenus = (routes) => {
  return routes.filter((route) => {
    if (route.children) {
      route.children = routesToMenus(route.children);
    }
    return !route.hidden;
  });
};