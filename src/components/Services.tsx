// src/components/Services.tsx
import Icon from './ui/Icon';
import { LineChart, GraduationCap, Sprout } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Services() {
  const { t } = useTranslation();

  const items = [
    {
      key: 'monitoring',
      icon: LineChart,
    },
    {
      key: 'education',
      icon: GraduationCap,
    },
    {
      key: 'consulting',
      icon: Sprout,
    },
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="h2">{t('services.heading')}</h2>
        <p className="mt-3 lead max-w-prose">{t('services.lead')}</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article key={it.key} className="card card-hover p-6">
              <div className="size-10 rounded-full bg-leaf-50 text-leaf-700 inline-flex items-center justify-center">
                <Icon as={it.icon} />
              </div>
              <h3 className="mt-4 text-xl font-semibold">
                {t(`services.${it.key}.title`)}
              </h3>
              <p className="mt-2 text-gray-600">
                {t(`services.${it.key}.desc`)}
              </p>
              <ul className="mt-4 space-y-1 text-gray-700">
                {t<string[]>(`services.${it.key}.bullets`, {
                  returnObjects: true,
                }).map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 size-1.5 rounded-full bg-leaf-600/70" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#contact" className="text-leaf-700 hover:underline">
                  {t('services.more')}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
