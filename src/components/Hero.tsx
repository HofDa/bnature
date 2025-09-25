import Icon from './ui/Icon';
import { Leaf, BadgeCheck } from 'lucide-react';
import HeroImage from '../assets/hero.jpg';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="section-muted">
      <div className="container grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="badge">
            <Icon as={Leaf} />
            {t('hero.badge')}
            <span className="ml-2 inline-flex items-center gap-1 text-leaf-700">
              <Icon as={BadgeCheck} size={18} />
              {t('hero.verified', { defaultValue: 'geprüft' })}
            </span>
          </span>

          <h1 className="mt-6 h1">{t('hero.title')}</h1>

          <p className="mt-5 lead max-w-prose">{t('hero.subtitle')}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="btn-primary"
              aria-label={t('hero.ctaPrimary')}
              title={t('hero.ctaPrimary')}
            >
              {t('hero.ctaPrimary')}
            </a>
            <a
              href="#services"
              className="btn-ghost"
              aria-label={t('hero.ctaSecondary')}
              title={t('hero.ctaSecondary')}
            >
              {t('hero.ctaSecondary')}
            </a>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            {t('hero.expertise', {
              defaultValue:
                'Expertise von Biolog:innen, Ökolog:innen, Naturvermittler:innen und Gärtner:innen',
            })}
          </p>
        </div>

        <div
          className="relative rounded-3xl overflow-hidden shadow-sm ring-1 ring-black/5
                aspect-[16/10] lg:aspect-auto lg:h-[420px]"
        >
          <img
            src={HeroImage}
            alt={t('alt.heroImage')}
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}
