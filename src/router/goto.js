export default function (targetPath) {
  const { origin } = window.location;
  window.location.href= origin + targetPath;
}