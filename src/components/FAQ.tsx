import Icon from './ui/Icon';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Wie läuft ein Erstgespräch ab?',
    a: '30–45 Min online oder vor Ort. Wir klären Ziele, Flächen, Budgetrahmen und Zeitplan.',
  },
  {
    q: 'Welche Ergebnisse bekomme ich?',
    a: 'Ein Maßnahmenpaket mit Prioritäten, optional Monitoring-Design und Reporting-Vorlage.',
  },
  {
    q: 'Für wen eignet sich bnature?',
    a: 'Gemeinden, Hotels, Schulen und Betriebe – überall dort, wo Flächen naturnah werden sollen.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="container">
        <h2 className="h2">Häufige Fragen</h2>

        <div className="mt-6 grid gap-4">
          {faqs.map((f) => (
            <details key={f.q} className="card p-5">
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
