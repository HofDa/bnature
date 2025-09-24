import Icon from './ui/Icon';
import { LineChart, GraduationCap, Sprout } from 'lucide-react';

const items = [
  {
    title: 'Monitoring & Erhebungen',
    desc: 'Standardisierte Erfassungen, klare Befunde, belastbare Entscheidungen.',
    bullets: [
      'Methodik nach Stand der Wissenschaft',
      'Dokumentation & Ergebnisse',
      'Langfristige Erfolgskontrolle',
    ],
    icon: LineChart,
  },
  {
    title: 'Umweltbildung & Formate',
    desc: 'Workshops, Exkursionen, Seminare – Natur verstehen und erleben.',
    bullets: [
      'Didaktische Konzepte',
      'Mehrsprachige Materialien',
      'Outreach & Events',
    ],
    icon: GraduationCap,
  },
  {
    title: 'Naturnahe Flächengestaltung',
    desc: 'Planung & Begleitung – artenreich, pflegeleicht und standortgerecht.',
    bullets: [
      'Pflanzkonzepte & Pflege',
      'Habitat-Module',
      'Biodiversitäts-Check',
    ],
    icon: Sprout,
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="section">
      <div className="container">
        <h2 className="h2">Unsere Leistungen</h2>
        <p className="mt-3 lead max-w-prose">
          Von der Analyse bis zur Umsetzung – alles aus einer Hand, transparent
          und wirksam.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article key={it.title} className="card card-hover p-6">
              <div className="size-10 rounded-full bg-leaf-50 text-leaf-700 inline-flex items-center justify-center">
                <Icon as={it.icon} />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-gray-600">{it.desc}</p>
              <ul className="mt-4 space-y-1 text-gray-700">
                {it.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-2 size-1.5 rounded-full bg-leaf-600/70" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#kontakt" className="text-leaf-700 hover:underline">
                  Mehr erfahren →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
