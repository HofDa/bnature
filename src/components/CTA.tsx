// src/components/CTA.tsx
import { useTranslation } from 'react-i18next';

export default function CTA() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="card p-8 md:p-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            {t('cta.heading')}
          </h2>
          <p className="mt-3 text-gray-600">{t('cta.text')}</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="mailto:info@bnature.example"
              className="btn-primary"
              aria-label={t('cta.primary')}
            >
              {t('cta.primary')}
            </a>
            <a
              href="#services"
              className="btn-ghost"
              aria-label={t('cta.secondary')}
            >
              {t('cta.secondary')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
