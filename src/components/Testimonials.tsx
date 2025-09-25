// src/components/Testimonials.tsx
import { useTranslation } from 'react-i18next';

export default function Testimonials() {
  const { t } = useTranslation();

  const items = t<{ quote: string; name: string; role: string }[]>(
    'testimonials.items',
    { returnObjects: true }
  );

  return (
    <section className="section-muted">
      <div className="container">
        <h2 className="h2">{t('testimonials.heading')}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {items.map((it, i) => (
            <figure key={i} className="card p-6">
              <blockquote className="text-gray-800">“{it.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-gray-600">
                {it.name} · {it.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
