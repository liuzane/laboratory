declare global {
  const __PUBLIC_PATH: string;
  const __DEPLOY_ORIGIN: string;
}

// just add this line code make global.d.ts works
export {};
