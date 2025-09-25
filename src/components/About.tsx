// src/components/About.tsx
import Icon from './ui/Icon';
import { FlaskConical, Target } from 'lucide-react';
import BioGeeks from '../assets/geeks1.png';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="section-muted">
      <div className="container grid lg:grid-cols-2 gap-10 items-start">
        {/* Bildseite */}
        <div>
          <img
            src={BioGeeks}
            alt={t('alt.aboutImage')}
            className="w-full rounded-2xl ring-1 ring-gray-200"
            loading="lazy"
          />
        </div>

        {/* Textseite */}
        <div>
          <h2 className="h2">{t('about.heading')}</h2>
          <p className="mt-4 lead max-w-prose">{t('about.text')}</p>

          {/* Callouts */}
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="card p-5">
              <div className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-leaf-50 text-leaf-700">
                <Icon as={FlaskConical} size={18} />
              </div>
              <h3 className="mt-3 font-semibold">
                {t('about.callouts.scienceTitle')}
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                {t('about.callouts.scienceText')}
              </p>
            </div>

            <div className="card p-5">
              <div className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-leaf-50 text-leaf-700">
                <Icon as={Target} size={18} />
              </div>
              <h3 className="mt-3 font-semibold">
                {t('about.callouts.impactTitle')}
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                {t('about.callouts.impactText')}
              </p>
            </div>
          </div>

          {/* Mini-Liste / USP */}
          <ul className="mt-6 prose-basic space-y-2">
            <li>{t('about.usps.process')}</li>
            <li>{t('about.usps.target')}</li>
            <li>{t('about.usps.didactic')}</li>
          </ul>

          {/* Deep-CTA zur Kontaktsektion */}
          <div className="mt-6">
            <a href="#contact" className="btn-primary">
              {t('about.cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
