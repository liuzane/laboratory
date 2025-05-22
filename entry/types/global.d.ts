declare global {
  const __PUBLIC_PATH: string;
  const __DEPLOY_ORIGIN: string;

  type Recordable<T = any> = Record<string, T>;
}

// just add this line code make global.d.ts works
export {};
