// src/components/FAQ.tsx
import Icon from './ui/Icon';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function FAQ() {
  const { t } = useTranslation();

  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
  ];

  return (
    <section id="faq" className="section">
      <div className="container">
        <h2 className="h2">{t('faq.heading')}</h2>

        <div className="mt-6 grid gap-4">
          {faqs.map((f, i) => (
            <details key={i} className="card p-5">
              <summary className="relative cursor-pointer pr-10 list-none select-none">
                <span className="font-medium">{f.q}</span>
                <span className="chev absolute right-3 top-1/2 -translate-y-1/2 transition-transform">
                  <Icon as={ChevronDown} size={18} className="text-gray-600" />
                </span>
              </summary>
              <p className="mt-2 text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
