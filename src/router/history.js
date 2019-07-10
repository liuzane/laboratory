import { createHashHistory } from 'history';

const hashHistory = createHashHistory();

export default hashHistory;

export const goto = function (targetPath) {
  const { origin, pathname } = window.location;
  const replacePath = pathname.match(/\/[a-zA-Z0-9_-]+\.html/);
  const path = replacePath ? pathname.replace(replacePath[0], targetPath) : pathname + targetPath;

  window.location.href= origin + path;
};