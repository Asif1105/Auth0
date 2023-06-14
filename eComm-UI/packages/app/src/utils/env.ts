export const isDevMode = (): boolean => {
  return globalThis?.env === 'DEV';
};
