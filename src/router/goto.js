export default function (targetPath) {
  const { origin, pathname } = window.location;
  const replacePath = pathname.match(/\/[a-zA-Z0-9\\._-]+$/);
  console.log(replacePath);
  const path = replacePath ? pathname.replace(replacePath[0], targetPath) : pathname + targetPath;

  window.location.href= origin + path;
}