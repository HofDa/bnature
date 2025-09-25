import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function ensureMeta(attr: 'name' | 'property', value: string): HTMLMetaElement {
  let m = document.head.querySelector(
    `meta[${attr}="${value}"]`
  ) as HTMLMetaElement | null;
  if (!m) {
    m = document.createElement('meta');
    m.setAttribute(attr, value);
    document.head.appendChild(m);
  }
  return m;
}

export default function Seo() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const title = t('meta.title');
    const description = t('meta.description');
    document.title = title;

    const desc = ensureMeta('name', 'description');
    desc.setAttribute('content', description);

    ensureMeta('property', 'og:title').setAttribute('content', title);
    ensureMeta('property', 'og:description').setAttribute(
      'content',
      description
    );
    ensureMeta('property', 'og:type').setAttribute('content', 'website');
    ensureMeta('property', 'og:locale').setAttribute(
      'content',
      i18n.resolvedLanguage === 'de' ? 'de_DE' : 'it_IT'
    );
  }, [t, i18n.resolvedLanguage]);

  return null;
}
