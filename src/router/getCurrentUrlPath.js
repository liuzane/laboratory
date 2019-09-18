const getCurrentUrlPath = () => {
  const { hash, pathname } = window.location;
  const url = encodeURIComponent(pathname + hash);

  return '?url=' + url;
};

export default getCurrentUrlPath;