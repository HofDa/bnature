// src/components/About.tsx
import Icon from './ui/Icon';
import { FlaskConical, Target } from 'lucide-react';
import BioGeeks from '../assets/geeks1.png';

export default function About() {
  return (
    <section id="about" className="section-muted">
      <div className="container grid lg:grid-cols-2 gap-10 items-start">
        {/* Bildseite */}
        <div>
          {/* Ersetze /about.jpg durch dein Bild (WebP empfohlen) */}
          <img
            src={BioGeeks}
            alt="bnature – Team, Arbeit im Feld und Beratung"
            className="w-full rounded-2xl ring-1 ring-gray-200"
            loading="lazy"
          />
        </div>

        {/* Textseite */}
        <div>
          <h2 className="h2">Warum bnature?</h2>
          <p className="mt-4 lead max-w-prose">
            Wir verbinden ökologische Expertise mit didaktischer Erfahrung und
            klarer Kommunikation. So entstehen Projekte, die Menschen erreichen
            und Lebensräume nachweislich verbessern.
          </p>

          {/* Callouts */}
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div className="card p-5">
              <div className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-leaf-50 text-leaf-700">
                <Icon as={FlaskConical} size={18} />
              </div>
              <h3 className="mt-3 font-semibold">Wissenschaftliche Basis</h3>
              <p className="mt-1 text-sm text-gray-600">
                Aktuelle Literatur, Standards &amp; Monitoring-Designs –
                fundiert und nachvollziehbar.
              </p>
            </div>

            <div className="card p-5">
              <div className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-leaf-50 text-leaf-700">
                <Icon as={Target} size={18} />
              </div>
              <h3 className="mt-3 font-semibold">Praxis &amp; Wirkung</h3>
              <p className="mt-1 text-sm text-gray-600">
                Planbar, umsetzbar, messbar – mit klaren Prioritäten und
                Erfolgskontrolle.
              </p>
            </div>
          </div>

          {/* Mini-Liste / USP (optional, aber hilfreich) */}
          <ul className="mt-6 prose-basic space-y-2">
            <li>
              <span className="font-medium text-gray-900">
                Transparente Prozesse:
              </span>{' '}
              Erstgespräch, Maßnahmenplan, Umsetzung, Monitoring.
            </li>
            <li>
              <span className="font-medium text-gray-900">
                Zielgruppengerecht:
              </span>{' '}
              Gemeinden, Hotels, Schulen &amp; Betriebe.
            </li>
            <li>
              <span className="font-medium text-gray-900">
                Mehrsprachig &amp; didaktisch:
              </span>{' '}
              Materialien und Formate, die Wissen erlebbar machen.
            </li>
          </ul>

          {/* Deep-CTA zur Kontaktsektion */}
          <div className="mt-6">
            <a href="#kontakt" className="btn-primary">
              Erstgespräch anfragen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
