import { useTranslation } from 'react-i18next';

const languages: { code: 'de' | 'it'; label: string }[] = [
  { code: 'de', label: 'DE' },
  { code: 'it', label: 'IT' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  return (
    <div className="flex gap-2 items-center">
      {languages.map((l) => (
        <button
          key={l.code}
          onClick={() => i18n.changeLanguage(l.code)}
          className={`px-2 py-1 rounded text-sm border ${
            i18n.resolvedLanguage === l.code
              ? 'font-semibold border-black/40'
              : 'border-black/10'
          }`}
          aria-pressed={i18n.resolvedLanguage === l.code}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
