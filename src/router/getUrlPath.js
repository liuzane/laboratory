import history from './history';

const getFromPathname = () => {
  const pathnames = window.location.pathname.split('/');
  const lastPathname = pathnames[pathnames.length - 1];
  return '/' + lastPathname;
};

const getUrlPath = (from = getFromPathname()) => {
  const pathname = history.location.pathname;
  const url = escape(from + '#' + pathname);

  return url === '/' ? '' : ('?url=' + url);
};

export default getUrlPath;