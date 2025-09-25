// src/components/Footer.tsx
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="pt-12 pb-16 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-semibold">b*nature</div>
            <p className="mt-2 text-sm text-gray-600">{t('footer.tagline')}</p>
          </div>

          <div>
            <div className="font-semibold">{t('nav.services')}</div>
            <ul className="mt-2 space-y-1 text-sm text-gray-700">
              <li>
                <a href="#services" className="hover:underline">
                  {t('services.monitoring.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  {t('services.education.title')}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  {t('services.consulting.title')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="font-semibold">{t('nav.contact')}</div>
            <p className="mt-2 text-sm text-gray-700">
              {t('footer.contactMail', {
                defaultValue: 'info@bnature.example',
              })}
            </p>
            <p className="text-sm text-gray-700">
              {t('footer.contactLocation', {
                defaultValue: 'Südtirol · Italien',
              })}
            </p>
          </div>
        </div>

        <div className="divider my-8"></div>

        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} b*nature ·{' '}
          {t('footer.imprint', { defaultValue: 'Impressum' })} ·{' '}
          {t('footer.privacy', { defaultValue: 'Datenschutz' })}
        </p>
      </div>
    </footer>
  );
}
