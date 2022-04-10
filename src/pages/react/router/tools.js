// 地址
import address from '@/address';

// 方法
import { deepCopy } from '@/utils/assist';

// 处理路由配置
export const handleRoutes = (routes, parentPath) => {
  const cloneRoutes = deepCopy(routes);

  return cloneRoutes.reduce((prevRoutes, currentRoute) => {
    if (parentPath && currentRoute.path.substr(0, 1) !== '/') {
      currentRoute.path = parentPath + (currentRoute.path === '' ? '' : '/' + currentRoute.path);

      if (currentRoute.redirect) {
        currentRoute.redirect = currentRoute.redirect.substr(0, 1) === '/' ? currentRoute.redirect : (parentPath + '/' + currentRoute.redirect);
      }
    }

    if (currentRoute.children) {
      const children = handleRoutes(currentRoute.children, currentRoute.path);

      if (currentRoute.component) {
        currentRoute.children = children;
        return prevRoutes.concat([ currentRoute ]);
      } else {
        return prevRoutes.concat(children);
      }
    } else {
      return prevRoutes.concat(currentRoute);
    }
  }, []);
};

// 路由转化为菜单
export const routesToMenus = (routes) => {
  return routes.filter((route) => {
    if (route.children) {
      // if (route.children[0] && route.children[0].path) {
      //   route.path = route.children[0].path;
      // }
      route.children = routesToMenus(route.children);
    }
    return !route.hidden;
  });
};

export const getCurrentUrlPath = () => {
  const { origin, pathname, hash } = window.location;
  const path = (origin + pathname + hash).replace(address.SERVER_ADDRESS, '');
  const url = encodeURIComponent(path);

  return '?url=' + url;
};

export const goto = (targetPath) => {
  window.location.href= address.SERVER_ADDRESS + targetPath;
};