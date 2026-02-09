(() => {
  const supported = ['de', 'it'];
  const langs = Array.isArray(navigator.languages) && navigator.languages.length
    ? navigator.languages
    : [navigator.language || 'de'];

  const normalized = langs
    .map((l) => String(l || '').toLowerCase())
    .filter(Boolean);

  const match = normalized.find((l) => supported.includes(l.split('-')[0]));
  const target = match ? `/${match.split('-')[0]}` : '/de';
  window.location.replace(target);
})();
