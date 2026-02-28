(() => {
  const currentPath = window.location.pathname;
  const normalizedPath = currentPath.replace(/\/index\.html$/, '/');
  const base = normalizedPath.endsWith('/') ? normalizedPath : `${normalizedPath}/`;
  const withBase = (path) => `${base}${String(path || '').replace(/^\/+/, '')}`;
  const supported = ['de', 'it'];
  const langs = Array.isArray(navigator.languages) && navigator.languages.length
    ? navigator.languages
    : [navigator.language || 'de'];

  const normalized = langs
    .map((lang) => String(lang || '').toLowerCase())
    .filter(Boolean);

  const match = normalized.find((lang) => supported.includes(lang.split('-')[0]));
  const target = match ? withBase(`/${match.split('-')[0]}`) : withBase('/de');
  window.location.replace(target);
})();
