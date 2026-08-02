export const withBase = (path: string) => {
  if (/^https?:\/\//.test(path) || path.startsWith('//') || path.startsWith('#')) return path;
  const base = import.meta.env.BASE_URL ?? '/';
  if (base === '/') return path;
  return `${base.replace(/\/$/, '')}${path.startsWith('/') ? path : `/${path}`}`;
};