export default function (targetPath) {
  const { origin, pathname } = window.location;
  const matchPath = pathname.match(/\/[a-zA-Z0-9\\._-]{0,}$/);
  let path = '';

  if (matchPath) {
    const frontPath = pathname.substring(0, pathname.lastIndexOf(matchPath[0]));

    path = frontPath + targetPath;
  } else {
    path = pathname + targetPath;
  }

  window.location.href= origin + path;
}