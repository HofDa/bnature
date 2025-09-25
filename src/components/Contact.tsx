// src/components/Contact.tsx
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="section-muted">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="h2">{t('contact.heading')}</h2>
            <p className="mt-3 lead max-w-prose">{t('contact.lead')}</p>
            <div className="mt-6 text-sm text-gray-600">
              <p>
                Mail:{' '}
                <a
                  className="text-leaf-700 hover:underline"
                  href="mailto:info@bnature.example"
                >
                  info@bnature.example
                </a>
              </p>
              <p>Südtirol · Italien</p>
            </div>
          </div>

          <form
            className="card p-6 space-y-4"
            action="mailto:info@bnature.example"
            method="post"
            encType="text/plain"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t('contact.form.name', { defaultValue: 'Name' })}
              </label>
              <input className="input" name="name" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t('contact.form.email', { defaultValue: 'E-Mail' })}
              </label>
              <input className="input" type="email" name="email" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t('contact.form.message', { defaultValue: 'Nachricht' })}
              </label>
              <textarea
                className="textarea"
                name="message"
                placeholder={t('contact.form.placeholder', {
                  defaultValue: 'Projekt, Ziel, Zeitrahmen …',
                })}
              />
            </div>
            <div className="text-xs text-gray-500">
              {t('contact.form.privacy', {
                defaultValue:
                  'Mit dem Senden stimmen Sie der Verarbeitung Ihrer Angaben zur Kontaktaufnahme zu.',
              })}
            </div>
            <div className="flex gap-3">
              <button type="submit" className="btn-primary">
                {t('contact.button')}
              </button>
              <a href="mailto:info@bnature.example" className="btn-ghost">
                {t('contact.form.directMail', {
                  defaultValue: 'Direkt per Mail',
                })}
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
