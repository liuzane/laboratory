import history from './history';

const getUrlPath = (from) => {
  const url = history.location.pathname;

  return url === '/' ? '' : (`?url=/${ from }#` + url);
};

export default getUrlPath;