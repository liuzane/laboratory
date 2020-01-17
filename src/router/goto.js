import address from '@/address';

export default function (targetPath) {
  window.location.href= address.SERVER_ADDRESS + targetPath;
}